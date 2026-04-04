import { useEffect, useState, useCallback } from "react";

interface UseTypingOptions {
  speed?: number;
  delay?: number;
}

export const useTyping = (text: string, options: UseTypingOptions = {}) => {
  const { speed = 100, delay = 0 } = options;
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const startTyping = useCallback(() => {
    setIsTyping(true);
    setDisplayed("");
    
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setIsTyping(false);
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  useEffect(() => {
    const cleanup = startTyping();
    return cleanup;
  }, [startTyping]);

  return { displayed, isTyping, restart: startTyping };
};
