import { useMemo } from "react";

export interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

interface UseParticlesOptions {
  count?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  minDuration?: number;
  maxDuration?: number;
  maxDelay?: number;
}

const seededRandom = (seed: number): number => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export const useParticles = (options: UseParticlesOptions = {}) => {
  const {
    count = 20,
    colors = ["#8C4555", "#B58169", "#65635a"],
    minSize = 2,
    maxSize = 6,
    minDuration = 15,
    maxDuration = 35,
    maxDelay = 10,
  } = options;

  return useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: seededRandom(i * 100) * 100,
      y: seededRandom(i * 200) * 100,
      size: minSize + seededRandom(i * 300) * (maxSize - minSize),
      duration: minDuration + seededRandom(i * 400) * (maxDuration - minDuration),
      delay: seededRandom(i * 500) * maxDelay,
      color: colors[Math.floor(seededRandom(i * 600) * colors.length)],
    }));
  }, [count, colors, minSize, maxSize, minDuration, maxDuration, maxDelay]);
};
