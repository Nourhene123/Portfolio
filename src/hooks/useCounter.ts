import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface UseCounterOptions {
  duration?: number;
  steps?: number;
}

export const useCounter = (targetValue: number, options: UseCounterOptions = {}) => {
  const { duration = 2000, steps = 60 } = options;
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const increment = targetValue / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, targetValue, duration, steps]);

  return { count, ref };
};
