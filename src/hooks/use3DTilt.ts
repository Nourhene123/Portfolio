import { useCallback, useRef } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

interface Use3DTiltOptions {
  stiffness?: number;
  damping?: number;
  rotateRange?: number;
}

export const use3DTilt = (options: Use3DTiltOptions = {}) => {
  const { stiffness = 400, damping = 30, rotateRange = 10 } = options;
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness, damping });
  const mouseYSpring = useSpring(y, { stiffness, damping });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${rotateRange}deg`, `-${rotateRange}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${rotateRange}deg`, `${rotateRange}deg`]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return {
    ref,
    rotateX,
    rotateY,
    handleMouseMove,
    handleMouseLeave,
  };
};
