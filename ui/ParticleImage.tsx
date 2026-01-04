import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import hero from '@/public/images/creator1.png';

export function ParticleImage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const positionsRef = useRef<{ original: Float32Array; scattered: Float32Array } | null>(null);
  const heroImage = hero.src;

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Load the image
    const loader = new THREE.TextureLoader();
    loader.load(heroImage, (texture) => {
      const img = texture.image;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) return;

      // Set canvas size
      const width = 300;
      const height = (img.height / img.width) * width;
      canvas.width = width;
      canvas.height = height;

      // Draw image
      ctx.drawImage(img, 0, 0, width, height);
      const imageData = ctx.getImageData(0, 0, width, height);
      const pixels = imageData.data;

      // Create particle positions
      const positions: number[] = [];
      const colors: number[] = [];
      const scatteredPositions: number[] = [];
      const step = 2; // Sample every 2 pixels for performance

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const i = (y * width + x) * 4;
          const r = pixels[i] / 255;
          const g = pixels[i + 1] / 255;
          const b = pixels[i + 2] / 255;
          const a = pixels[i + 3] / 255;

          if (a > 0.5) {
            // Original position (centered)
            const px = x - width / 2;
            const py = -(y - height / 2);
            const pz = 0;

            positions.push(px * 0.15, py * 0.15, pz);
            colors.push(r, g, b);

            // Scattered position (random)
            const scatter = 80;
            scatteredPositions.push(
              (Math.random() - 0.5) * scatter,
              (Math.random() - 0.5) * scatter,
              (Math.random() - 0.5) * scatter
            );
          }
        }
      }

      // Create geometry
      const geometry = new THREE.BufferGeometry();
      const positionArray = new Float32Array(positions);
      const colorArray = new Float32Array(colors);
      const scatteredArray = new Float32Array(scatteredPositions);

      geometry.setAttribute('position', new THREE.BufferAttribute(scatteredArray.slice(), 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

      // Store positions for animation
      positionsRef.current = {
        original: positionArray,
        scattered: scatteredArray,
      };

      // Create material
      const material = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true,
      });

      // Create particles
      const particles = new THREE.Points(geometry, material);
      scene.add(particles);
      particlesRef.current = particles;

      // Animate particles forming into image
      setTimeout(() => {
        const currentPositions = particles.geometry.attributes.position.array as Float32Array;
        
        gsap.to(currentPositions, {
          duration: 2.5,
          ease: 'power2.out',
          endArray: Array.from(positionArray),
          onUpdate: () => {
            particles.geometry.attributes.position.needsUpdate = true;
          },
        });

        // Fade in opacity
        gsap.to(material, {
          duration: 2,
          opacity: 1,
          ease: 'power2.inOut',
        });
      }, 300);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate particles slightly for effect
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0005;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;

      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (particlesRef.current) {
        particlesRef.current.geometry.dispose();
        (particlesRef.current.material as THREE.Material).dispose();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ background: 'linear-gradient(to bottom, #000000, #1a1a1a)' }}
    />
  );
}
