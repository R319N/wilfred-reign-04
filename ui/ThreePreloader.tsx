import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import SimplexNoise from '../utils/SimplexNoise';
import { usePageLoading } from '../hooks/usePageLoading';
import heroImage from '@/public/images/creator1.png';

interface ThreePreloaderProps {
  particleCount?: number;
  onComplete?: () => void;
  minimumLoadTime?: number;
}

export function ThreePreloader({
  particleCount = 80000,
  onComplete,
  minimumLoadTime = 2500
}: ThreePreloaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());
  const noiseRef = useRef<SimplexNoise>(new SimplexNoise());
  const animationIdRef = useRef<number | null>(null);

  const { isLoading, loadProgress } = usePageLoading(minimumLoadTime);
  const [isForming, setIsForming] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Store particle data
  const particleDataRef = useRef<{
    velocities: Float32Array;
    originalPositions: Float32Array;
    targetPositions: Float32Array;
    isAnimating: boolean;
    displacedPositions: Float32Array;
  } | null>(null);

  // Mouse interaction state
  const mouseRef = useRef<{ x: number; y: number; isOver: boolean }>({
    x: 0,
    y: 0,
    isOver: false,
  });

  // Check for reduced motion preference
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (!canvasRef.current || prefersReducedMotion.current) {
      // Skip animation if reduced motion is preferred
      if (prefersReducedMotion.current) {
        setIsComplete(true);
        onComplete?.();
      }
      return;
    }

    // ========================================
    // SCENE SETUP
    // ========================================
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0a0a, 30, 100);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // ========================================
    // LOAD HERO IMAGE & SAMPLE PIXELS
    // ========================================
    const loader = new THREE.TextureLoader();

    // ========================================
    // CREATE CIRCULAR PARTICLE TEXTURE
    // ========================================
    const createCircleTexture = () => {
      const size = 32;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');

      if (!ctx) return null;

      // Draw smooth circle with soft edges
      const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.5)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const particleTexture = createCircleTexture();

    loader.load(heroImage.src, (texture) => {
      const img = texture.image as HTMLImageElement;

      if (!img?.width || !img?.height) return;

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) return;

      // Sample at higher resolution for better detail
      const sampleWidth = 400;
      const sampleHeight = (img.height / img.width) * sampleWidth;
      canvas.width = sampleWidth;
      canvas.height = sampleHeight;

      ctx.drawImage(img, 0, 0, sampleWidth, sampleHeight);
      const imageData = ctx.getImageData(0, 0, sampleWidth, sampleHeight);
      const pixels = imageData.data;

      // ========================================
      // SAMPLE IMAGE INTO TARGET POSITIONS
      // ========================================
      const targetPositions: number[] = [];
      const targetColors: number[] = [];
      const step = 1; // Sample every pixel for maximum detail

      for (let y = 0; y < sampleHeight; y += step) {
        for (let x = 0; x < sampleWidth; x += step) {
          const i = (y * sampleWidth + x) * 4;
          const r = pixels[i] / 255;
          const g = pixels[i + 1] / 255;
          const b = pixels[i + 2] / 255;
          const a = pixels[i + 3] / 255;

          if (a > 0.1) { // Lower threshold to capture more detail
            const px = (x - sampleWidth / 2) * 0.18;
            const py = -(y - sampleHeight / 2) * 0.18;
            const pz = 0;

            targetPositions.push(px, py, pz);
            targetColors.push(r, g, b);
          }
        }
      }

      const numTargets = targetPositions.length / 3;
      const particlesToUse = Math.min(particleCount, numTargets * 10); // 10 particles per pixel for ultra-high density

      // ========================================
      // CREATE PARTICLES
      // ========================================
      const positions = new Float32Array(particlesToUse * 3);
      const colors = new Float32Array(particlesToUse * 3);
      const velocities = new Float32Array(particlesToUse * 3);
      const finalTargets = new Float32Array(particlesToUse * 3);

      for (let i = 0; i < particlesToUse; i++) {
        // Random initial positions (scattered in 3D space)
        const spread = 80;
        positions[i * 3] = (Math.random() - 0.5) * spread;
        positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
        positions[i * 3 + 2] = (Math.random() - 0.5) * spread;

        // Random initial velocities for organic drift
        velocities[i * 3] = (Math.random() - 0.5) * 0.02;
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;

        // Assign target positions (with multiple particles per target for density)
        const targetIndex = Math.floor(Math.random() * numTargets);

        // Minimal texture noise for ultra-sharp image
        const textureNoise = 0.03; // Reduced to minimum for maximum clarity
        finalTargets[i * 3] = targetPositions[targetIndex * 3] + (Math.random() - 0.5) * textureNoise;
        finalTargets[i * 3 + 1] = targetPositions[targetIndex * 3 + 1] + (Math.random() - 0.5) * textureNoise;
        finalTargets[i * 3 + 2] = targetPositions[targetIndex * 3 + 2] + (Math.random() - 0.5) * 0.05; // Very tight Z clustering for flat appearance

        // Assign colors
        colors[i * 3] = targetColors[targetIndex * 3];
        colors[i * 3 + 1] = targetColors[targetIndex * 3 + 1];
        colors[i * 3 + 2] = targetColors[targetIndex * 3 + 2];
      }

      // Store particle data
      particleDataRef.current = {
        velocities,
        originalPositions: new Float32Array(positions),
        targetPositions: finalTargets,
        isAnimating: true,
        displacedPositions: new Float32Array(positions),
      };

      // ========================================
      // CREATE GEOMETRY & MATERIAL
      // ========================================
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.8, // Increased initial opacity
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        map: particleTexture,
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);
      particlesRef.current = particles;

      // Start animation loop
      animate();
    });

    // ========================================
    // ANIMATION LOOP
    // ========================================
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      if (!particlesRef.current || !particleDataRef.current) return;

      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      const time = clockRef.current.getElapsedTime();
      const noise = noiseRef.current;

      // ========================================
      // LOADING PHASE: Organic particle drift
      // ========================================
      if (particleDataRef.current.isAnimating && !isForming) {
        for (let i = 0; i < positions.length / 3; i++) {
          const i3 = i * 3;

          // Apply Simplex noise for organic motion
          const noiseScale = 0.002;
          const noiseStrength = 0.03;

          const nx = noise.noise3d(
            positions[i3] * noiseScale,
            positions[i3 + 1] * noiseScale,
            time * 0.2
          );
          const ny = noise.noise3d(
            positions[i3] * noiseScale + 100,
            positions[i3 + 1] * noiseScale,
            time * 0.2
          );
          const nz = noise.noise3d(
            positions[i3] * noiseScale,
            positions[i3 + 1] * noiseScale + 100,
            time * 0.2
          );

          // Apply noise and velocities
          positions[i3] += particleDataRef.current.velocities[i3] + nx * noiseStrength;
          positions[i3 + 1] += particleDataRef.current.velocities[i3 + 1] + ny * noiseStrength;
          positions[i3 + 2] += particleDataRef.current.velocities[i3 + 2] + nz * noiseStrength;

          // Gentle gravity/drift
          positions[i3 + 1] -= 0.005;

          // Boundary wrapping to keep particles in view
          const boundary = 60;
          if (positions[i3] > boundary) positions[i3] = -boundary;
          if (positions[i3] < -boundary) positions[i3] = boundary;
          if (positions[i3 + 1] > boundary) positions[i3 + 1] = -boundary;
          if (positions[i3 + 1] < -boundary) positions[i3 + 1] = boundary;
          if (positions[i3 + 2] > boundary) positions[i3 + 2] = -boundary;
          if (positions[i3 + 2] < -boundary) positions[i3 + 2] = boundary;
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      // ========================================
      // FORMED IMAGE PHASE: Mouse interaction dispersion
      // ========================================
      if (isComplete && mouseRef.current.isOver && cameraRef.current) {
        const camera = cameraRef.current;

        // Convert mouse position to 3D world coordinates
        const mouse3D = new THREE.Vector3(
          mouseRef.current.x,
          mouseRef.current.y,
          0
        );
        mouse3D.unproject(camera);

        // Calculate mouse position in world space (at z=0 plane)
        const dir = mouse3D.sub(camera.position).normalize();
        const distance = -camera.position.z / dir.z;
        const mousePos = camera.position.clone().add(dir.multiplyScalar(distance));

        // Apply dispersion force
        const repulsionRadius = 15; // Radius of effect
        const repulsionStrength = 1.5; // Strength of push

        for (let i = 0; i < positions.length / 3; i++) {
          const i3 = i * 3;

          // Get particle's target position
          const targetX = particleDataRef.current.targetPositions[i3];
          const targetY = particleDataRef.current.targetPositions[i3 + 1];
          const targetZ = particleDataRef.current.targetPositions[i3 + 2];

          // Calculate distance from mouse to particle
          const dx = targetX - mousePos.x;
          const dy = targetY - mousePos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < repulsionRadius) {
            // Calculate repulsion force (stronger when closer)
            const force = (1 - distance / repulsionRadius) * repulsionStrength;
            const angle = Math.atan2(dy, dx);

            // Displace particles away from mouse
            const displaceX = Math.cos(angle) * force;
            const displaceY = Math.sin(angle) * force;
            const displaceZ = (Math.random() - 0.5) * force * 0.5; // Add some Z displacement

            positions[i3] = targetX + displaceX;
            positions[i3 + 1] = targetY + displaceY;
            positions[i3 + 2] = targetZ + displaceZ;
          } else {
            // Smoothly return to target position
            const returnSpeed = 0.1;
            positions[i3] += (targetX - positions[i3]) * returnSpeed;
            positions[i3 + 1] += (targetY - positions[i3 + 1]) * returnSpeed;
            positions[i3 + 2] += (targetZ - positions[i3 + 2]) * returnSpeed;
          }
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      // Render scene
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    // ========================================
    // WINDOW RESIZE HANDLER
    // ========================================
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;

      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // ========================================
    // MOUSE INTERACTION HANDLERS
    // ========================================
    const handleMouseMove = (event: MouseEvent) => {
      // Convert mouse position to normalized device coordinates (-1 to +1)
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleMouseEnter = () => {
      mouseRef.current.isOver = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isOver = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    // ========================================
    // CLEANUP
    // ========================================
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);

      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }

      if (particlesRef.current) {
        particlesRef.current.geometry.dispose();
        (particlesRef.current.material as THREE.Material).dispose();
      }

      if (sceneRef.current) {
        sceneRef.current.clear();
      }
    };
  }, [particleCount]);

  // ========================================
  // TRIGGER FORMATION WHEN LOADING COMPLETES
  // ========================================
  useEffect(() => {
    if (!isLoading && particlesRef.current && particleDataRef.current && !isForming) {
      setIsForming(true);

      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      const material = particlesRef.current.material as THREE.PointsMaterial;

      // Stop organic animation
      particleDataRef.current.isAnimating = false;

      // GSAP Timeline for cinematic formation
      const tl = gsap.timeline({
        onComplete: () => {
          setIsComplete(true);
          onComplete?.();

          // Keep rendering for the formed image
          // Don't stop animation - we want the particles to stay visible
        }
      });

      // Gradually slow down drift
      tl.to(particleDataRef.current.velocities as any, {
        duration: 1,
        endArray: Array.from({ length: particleDataRef.current.velocities.length }, () => 0),
        ease: 'power2.out',
      });
      // Form the image
      tl.to(positions, {
        duration: 3.5,
        ease: 'power2.inOut',
        endArray: Array.from(particleDataRef.current.targetPositions),
        onUpdate: () => {
          if (particlesRef.current) {
            particlesRef.current.geometry.attributes.position.needsUpdate = true;
          }
        },
      }, '-=0.5');

      // Fade to full opacity and increase size for solid image
      tl.to(material, {
        duration: 2,
        opacity: 1,
        size: 0.6,
        ease: 'power2.inOut',
      }, '-=2');
    }
  }, [isLoading, isForming, onComplete]);

  // Skip rendering if reduced motion
  if (prefersReducedMotion.current) {
    return (
      <div
        ref={containerRef}
        className="fixed inset-0 flex items-center justify-center bg-linear-to-b from-black to-neutral-900"
      >
        <img
          src={heroImage.src}
          alt="Hero"
          className="max-w-md opacity-100"
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0"
      style={{
        zIndex: isComplete ? 1 : 9999,
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'linear-gradient(to bottom, #0a0a0a, #1a1a1a)',
        }}
      />

      {/* Loading progress indicator - hide when complete */}
      {!isComplete && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-64 h-1 bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-neutral-400 transition-all duration-300 ease-out"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}