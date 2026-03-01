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

export const PageRevealer = () => {
  const [show] = useState(isFirstLoad);
  const [percent, setPercent] = useState(0);
  const [readyToHide, setReadyToHide] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const splitInstances = useRef<SplitText[]>([]);

  useEffect(() => {
    if (isFirstLoad) {
      isFirstLoad = false;
    }
  }, []);

  // Delay the main reveal until the counter (1.5s) and text hide (0.8s) are done.
  useRevealer(show ? 2.3 : 0);

  useGSAP(
    () => {
      if (!containerRef.current || !show) return;

      // Split the name headings
      const h1s = containerRef.current.querySelectorAll("h1.reveal-this");
      h1s.forEach((h1) => {
        const split = new SplitText(h1, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
        });
        splitInstances.current.push(split);

        // Ensure they are centered/correctly styled (SplitText can sometimes mess with text-align)
        split.lines.forEach((line) => {
          (line as HTMLElement).style.textAlign = "";
          if (line.parentElement) {
            line.parentElement.style.textAlign = "";
          }
        });
      });

      // 1. Animate percentage from 0 to 100
      const counter = { val: 0 };
      gsap.to(counter, {
        val: 100,
        duration: 1.5,
        ease: "power3.inOut",
        onUpdate: () => setPercent(Math.round(counter.val)),
        onComplete: () => {
          setReadyToHide(true);
        },
      });

      return () => {
        splitInstances.current.forEach((s) => s.revert());
        splitInstances.current = [];
      };
    },
    { scope: containerRef, dependencies: [show] },
  );

  useGSAP(
    () => {
      if (!readyToHide || !containerRef.current) return;

      // Gather all lines from our split instances
      const allLines: HTMLElement[] = [];
      splitInstances.current.forEach((split) => {
        allLines.push(...(split.lines as HTMLElement[]));
      });

      const counterEl = containerRef.current.querySelector(".percent-counter");
      const elementsToHide =
        containerRef.current.querySelectorAll(".reveal-element");

      const tl = gsap.timeline();

      if (allLines.length > 0) {
        tl.to(
          allLines,
          {
            y: "110%", // A bit more than 100 to ensure full hide
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.inOut",
          },
          0,
        );
      }

      if (elementsToHide.length > 0) {
        tl.to(
          elementsToHide,
          {
            y: "110%",
            opacity: 0,
            duration: 0.6,
            ease: "power3.inOut",
          },
          0.1,
        );
      }

      if (counterEl) {
        tl.to(
          counterEl,
          {
            y: "110%",
            opacity: 0,
            duration: 0.8,
            ease: "power3.inOut",
          },
          0,
        );
      }
    },
    { scope: containerRef, dependencies: [readyToHide] },
  );

  return (
    <div className="revealer">
      {show && (
        <div
          ref={containerRef}
          className="w-full h-full flex flex-col items-center justify-center relative px-6 md:px-12"
        >
          <div className="flex flex-col items-center w-full">
            <h1
              className="reveal-this text-[15vw] md:text-[12vw] leading-[0.8] font-medium tracking-tighter uppercase font-satoshi text-transparent stroke-text text-center w-full px-4"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}
            >
              MARCOS
            </h1>

            <div className="flex items-center justify-center w-full gap-4 md:gap-12 mt-2 md:mt-4">
              <div className="reveal-element w-12 md:w-32 h-px bg-white/30 hidden sm:block"></div>

              <h1 className="reveal-this text-[16vw] md:text-[14vw] leading-[0.8] font-medium tracking-tighter uppercase font-satoshi text-white italic relative">
                MORUA
              </h1>

              <div className="reveal-element w-12 md:w-32 h-px bg-white/30 hidden sm:block"></div>
            </div>
          </div>

          <div className="percent-counter absolute bottom-12 right-12 text-6xl md:text-8xl font-black font-satoshi text-white/20">
            {percent}%
          </div>
        </div>
      )}
    </div>
  );
};
