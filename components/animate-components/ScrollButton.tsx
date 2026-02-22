"use client";

import { useLenis } from "lenis/react";
import { TextReveal } from "./ContainerReveal";
import { useCursorHover } from "@/lib/hooks/useCursorProvider";

export function ScrollButton({
  onClick,
  sectionId,
  className,
  delay,
  title,
}: {
  onClick?: () => void;
  sectionId: string;
  className?: string;
  delay: number;
  title: string;
}) {
  const { handleActiveMouseEnter, handleActiveMouseLeave } = useCursorHover();
  const lenis = useLenis();

  const scrollToSection = () => {
    if (onClick) {
      onClick();
    }

    const section = document.querySelector<HTMLElement>(sectionId);
    if (section && lenis) {
      lenis.scrollTo(section);
    }
  };

  return (
    <button
      onClick={scrollToSection}
      className={`${className}`}
      onMouseEnter={handleActiveMouseEnter}
      onMouseLeave={handleActiveMouseLeave}
    >
      <TextReveal delay={delay}>
        <span>{title}</span>
      </TextReveal>
    </button>
  );
}
