"use client";

import { useCursorHover } from "@/hooks/useCursorProvider";
import { useLenis } from "lenis/react";
import { ContainerReveal } from "./ContainerReveal";

export function ScrollButton({
  sectionId,
  className,
  delay,
  title,
}: {
  sectionId: string;
  className?: string;
  delay: number;
  title: string;
}) {
  const { handleActiveMouseEnter, handleActiveMouseLeave } = useCursorHover();
  const lenis = useLenis();

  const scrollToSection = () => {
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
      <ContainerReveal delay={delay}>
        <span className="text-base">{title}</span>
      </ContainerReveal>
    </button>
  );
}
