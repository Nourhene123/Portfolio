import { useEffect, useState, useCallback } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface UseTypingOptions {
  speed?: number;
  delay?: number;
}

export const useTyping = (text: string, options: UseTypingOptions = {}) => {
  const { speed = 100, delay = 0 } = options;
  const prefersReducedMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const startTyping = useCallback(() => {
    // Reduced motion: show the final text straight away, no typewriter.
    if (prefersReducedMotion) {
      setDisplayed(text);
      setIsTyping(false);
      return () => {};
    }

    setIsTyping(true);
    setDisplayed("");

    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setIsTyping(false);
          clearInterval(interval);
        }
      }, speed);
    }, delay);

    // Clear both timers, so unmounting mid-typing doesn't leave the interval running.
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, delay, prefersReducedMotion]);

  useEffect(() => {
    const cleanup = startTyping();
    return cleanup;
  }, [startTyping]);

  return { displayed, isTyping, restart: startTyping };
};
