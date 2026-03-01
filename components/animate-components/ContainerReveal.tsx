"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface TextRevealProps {
  children: React.ReactElement | React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  className?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  animateOnScroll = true,
  delay = 0,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const elementRef = useRef<HTMLElement[]>([]);
  const splitRef = useRef<SplitText[]>([]);
  const lines = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      splitRef.current = [];
      elementRef.current = [];
      lines.current = [];

      let elements: HTMLElement[] = [];
      let scrollTriggerInstance: ScrollTrigger | null = null;

      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children) as HTMLElement[];
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        elementRef.current.push(element);

        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: `line++ ${className}`,
        }) as SplitText;

        splitRef.current.push(split);

        const computedStyle = window.getComputedStyle(element);
        const textIndent = computedStyle.textIndent;

        if (textIndent && textIndent !== "0px") {
          if (split.lines.length > 0) {
            (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
          }
          element.style.textIndent = "0";
        }

        // Eliminar el estilo inline text-align para que las clases responsive funcionen
        split.lines.forEach((line) => {
          const lineEl = line as HTMLElement;
          lineEl.style.textAlign = "";
          // También eliminar del mask (elemento padre con overflow:clip)
          if (lineEl.parentElement) {
            lineEl.parentElement.style.textAlign = "";
          }
        });

        lines.current.push(...(split.lines as HTMLElement[]));
      });

      gsap.set(lines.current, { y: "100%" });

      const animationProps = {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: delay,
      };

      if (animateOnScroll) {
        const tween = gsap.to(lines.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        });
        scrollTriggerInstance = tween.scrollTrigger || null;
      } else {
        gsap.to(lines.current, animationProps);
      }

      return () => {
        // Limpiar el ScrollTrigger específico si existe
        if (scrollTriggerInstance) {
          scrollTriggerInstance.kill();
        }
        // Revertir los SplitText
        splitRef.current.forEach((split) => {
          if (split && typeof split.revert === "function") {
            split.revert();
          }
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay],
    },
  );

  // Si solo hay un hijo, lo clonamos para pasarle la ref directamente
  if (React.Children.count(children) === 1 && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement, {
      ref: containerRef,
    });
  }

  // Si hay varios hijos, los envolvemos en un div
  return (
    <div ref={containerRef} data-copy-wrapper="true" className="w-full">
      {children}
    </div>
  );
};

interface ContainerRevealProps {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  className?: string;
}

export const ContainerReveal: React.FC<ContainerRevealProps> = ({
  children,
  animateOnScroll = true,
  delay = 0,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const childrenToAnimate = containerRef.current.children;

      gsap.set(childrenToAnimate, { yPercent: 100 });

      const animationProps = {
        yPercent: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: delay,
      };

      let scrollTriggerInstance: ScrollTrigger | null = null;

      const timeoutId = setTimeout(() => {
        if (animateOnScroll) {
          const tween = gsap.to(childrenToAnimate, {
            ...animationProps,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              once: true,
            },
          });
          scrollTriggerInstance = tween.scrollTrigger || null;
        } else {
          gsap.to(childrenToAnimate, animationProps);
        }
      }, 150);

      return () => {
        clearTimeout(timeoutId);
        if (scrollTriggerInstance) {
          scrollTriggerInstance.kill();
        }
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay],
    },
  );

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
};
