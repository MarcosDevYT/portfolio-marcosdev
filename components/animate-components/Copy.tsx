"use client";

import React, { useRef } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface CopyProps {
  text: string;
  className?: string;
  animateOnScroll?: boolean;
  delay?: number;
  blockColor?: string;
  stagger?: number;
  duration?: number;
}

export const Copy = ({
  text,
  className = "",
  animateOnScroll = true,
  delay = 0,
  blockColor = "#000",
  stagger = 0.15,
  duration = 0.75,
}: CopyProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !textRef.current) return;

      const split = new SplitText(textRef.current, {
        type: "lines",
        linesClass: "block-line",
        lineThreshold: 0.1,
      });

      const lines: HTMLElement[] = [];
      const blocks: HTMLDivElement[] = [];

      split.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        // Aseguramos que los bloques y líneas puedan centrarse
        wrapper.className = "block-line-wrapper mx-auto";
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);

        const block = document.createElement("div");
        block.className = "block-revealer";
        block.style.backgroundColor = blockColor;
        wrapper.appendChild(block);

        lines.push(line as HTMLElement);
        blocks.push(block);
      });

      gsap.set(lines, { opacity: 0 });
      gsap.set(blocks, { scaleX: 0, transformOrigin: "left center" });

      const createBlockRevealAnimation = (
        block: HTMLDivElement,
        line: HTMLElement,
        index: number,
      ) => {
        const tl = gsap.timeline({ delay: delay + index * stagger });

        tl.to(block, { scaleX: 1, duration: duration, ease: "power4.inOut" });
        tl.set(line, { opacity: 1 });
        tl.set(block, { transformOrigin: "right center" });
        tl.to(block, { scaleX: 0, duration: duration, ease: "power4.inOut" });

        return tl;
      };

      if (animateOnScroll) {
        blocks.forEach((block, index) => {
          const tl = createBlockRevealAnimation(block, lines[index], index);
          tl.pause();

          ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
            onEnter: () => tl.play(),
          });
        });
      } else {
        blocks.forEach((block, index) => {
          createBlockRevealAnimation(block, lines[index], index);
        });
      }

      return () => {
        split.revert();
      };
    },
    {
      scope: containerRef,
      dependencies: [
        text,
        animateOnScroll,
        delay,
        blockColor,
        stagger,
        duration,
      ],
    },
  );

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <p ref={textRef} className={className}>
        {text}
      </p>
    </div>
  );
};
