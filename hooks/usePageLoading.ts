import { useEffect, useState } from 'react';

/**
 * Hook to detect when page is fully loaded
 * Monitors both DOM ready state and image loading
 */
export function usePageLoading(minimumLoadTime: number = 2000) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    let imagesLoaded = 0;
    let totalImages = 0;

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minimumLoadTime - elapsed);
      
      setTimeout(() => {
        setLoadProgress(100);
        setIsLoading(false);
      }, remaining);
      return;
    }

    // Count total images
    const images = Array.from(document.images);
    totalImages = images.length;

    // Track image loading
    const imageLoadHandler = () => {
      imagesLoaded++;
      const progress = totalImages > 0 ? (imagesLoaded / totalImages) * 100 : 100;
      setLoadProgress(progress);
    };

    images.forEach((img) => {
      if (img.complete) {
        imageLoadHandler();
      } else {
        img.addEventListener('load', imageLoadHandler);
        img.addEventListener('error', imageLoadHandler);
      }
    });

    // Listen for window load event
    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minimumLoadTime - elapsed);
      
      setLoadProgress(100);
      
      setTimeout(() => {
        setIsLoading(false);
      }, remaining);
    };

    window.addEventListener('load', handleLoad);

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
      images.forEach((img) => {
        img.removeEventListener('load', imageLoadHandler);
        img.removeEventListener('error', imageLoadHandler);
      });
    };
  }, [minimumLoadTime]);

  return { isLoading, loadProgress };
}
