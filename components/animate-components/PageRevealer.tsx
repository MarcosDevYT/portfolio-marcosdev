"use client";

import { useRevealer } from "@/lib/hooks/useRevealer";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

let isFirstLoad = true;

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

export const PageRevealer = ({ textDelay = 0.2 }: { textDelay?: number }) => {
  const [show] = useState(isFirstLoad);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFirstLoad) {
      isFirstLoad = false;
    }
  }, []);

  useRevealer();

  useGSAP(
    () => {
      if (!textContainerRef.current) return;

      const texts = textContainerRef.current.querySelectorAll("p");
      if (texts.length === 0) return;

      const split = SplitText.create(texts, {
        type: "lines",
        mask: "lines",
        linesClass: "line++",
      });

      const splitInstance = split as { lines?: unknown[]; revert: () => void };

      if (splitInstance.lines) {
        splitInstance.lines.forEach((line: unknown) => {
          const lineEl = line as HTMLElement;
          lineEl.style.textAlign = "";
          if (lineEl.parentElement) {
            lineEl.parentElement.style.textAlign = "";
          }
        });

        // Ocultar texto tirándolo hacia abajo
        gsap.to(splitInstance.lines, {
          y: "150%",
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.inOut",
          delay: textDelay,
        });
      }

      return () => {
        if (splitInstance && typeof splitInstance.revert === "function") {
          splitInstance.revert();
        }
      };
    },
    { scope: textContainerRef, dependencies: [textDelay] },
  );

  return (
    <div className="revealer">
      {show && (
        <div
          ref={textContainerRef}
          className="w-full h-full flex flex-col items-center justify-center"
        >
          <p className="text-5xl font-satoshi font-medium">Marcos</p>
          <p className="text-5xl font-satoshi font-medium">Morua</p>
        </div>
      )}
    </div>
  );
};
