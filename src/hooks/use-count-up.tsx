import { useEffect, useState } from 'react';

interface UseCountUpProps {
  end: number;
  duration?: number;
  isVisible: boolean;
}

export const useCountUp = ({ end, duration = 2000, isVisible }: UseCountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // If prefers reduced motion, show final value immediately
    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    // Reduce duration by 20% on mobile for snappier feel
    const isMobile = window.innerWidth < 768;
    const adjustedDuration = isMobile ? duration * 0.8 : duration;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / adjustedDuration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return count;
};
