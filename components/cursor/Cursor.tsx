"use client";

import gsap from "gsap";
import { useCursorHover } from "@/hooks/useCursorProvider";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const { isDesapear, isActive, isLink } = useCursorHover();

  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const circle = useRef<HTMLDivElement | null>(null);

  const size = isLink ? 120 : isActive ? 120 : 40;

  const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a;

  const manageMouseMove = (e: MouseEvent): void => {
    const { clientX, clientY } = e;

    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const moveCircle = (x: number, y: number): void => {
    if (circle.current) {
      gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
    }
  };

  const animate = (): void => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);

    rafId.current = window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      if (rafId.current) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, [isActive]);

  return (
    <div
      style={{
        width: `${isDesapear ? 0 : size}px`,
        height: `${isDesapear ? 0 : size}px`,
        transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
      }}
      className={`top-0 left-0 fixed bg-white mix-blend-difference rounded-full pointer-events-none z-[50]`}
      ref={circle}
    />
  );
}
