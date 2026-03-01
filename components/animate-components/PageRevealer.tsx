"use client";

import { useRevealer } from "@/lib/hooks/useRevealer";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { usePathname } from "next/navigation";

let isFirstLoad = true;
const initialTimeRevealer = 2.3;
const transitionTimeRevealer = 1.6;

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

const PercentCounter = ({ onComplete }: { onComplete: () => void }) => {
  const [percent, setPercent] = useState(0);

  useGSAP(() => {
    const counter = { val: 0 };
    gsap.to(counter, {
      val: 100,
      duration: 1.5,
      ease: "power3.inOut",
      onUpdate: () => setPercent(Math.round(counter.val)),
      onComplete: onComplete,
    });
  }, []);

  return (
    <div className="percent-counter absolute bottom-12 right-12 text-6xl md:text-8xl font-black font-satoshi text-white/20">
      {percent}%
    </div>
  );
};

const InitialRevealer = () => {
  const [readyToHide, setReadyToHide] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const splitInstances = useRef<SplitText[]>([]);

  useRevealer(initialTimeRevealer);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const h1s = containerRef.current.querySelectorAll("h1.reveal-this");
      const allLines: HTMLElement[] = [];

      h1s.forEach((h1) => {
        const split = new SplitText(h1, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
        });
        splitInstances.current.push(split);
        allLines.push(...(split.lines as HTMLElement[]));

        split.lines.forEach((line) => {
          (line as HTMLElement).style.textAlign = "";
          if (line.parentElement) {
            line.parentElement.style.textAlign = "";
          }
        });
      });

      // Static and visible at start
      gsap.set(allLines, { y: "0%", opacity: 1 });

      return () => {
        splitInstances.current.forEach((s) => s.revert());
        splitInstances.current = [];
      };
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      if (!readyToHide || !containerRef.current) return;

      const allLines: HTMLElement[] = [];
      splitInstances.current.forEach((split) => {
        allLines.push(...(split.lines as HTMLElement[]));
      });

      const elementsToHide =
        containerRef.current.querySelectorAll(".reveal-element");
      const counterEl = containerRef.current.querySelector(".percent-counter");

      const tl = gsap.timeline();

      if (allLines.length > 0) {
        tl.to(
          allLines,
          {
            y: "110%",
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
      <PercentCounter onComplete={() => setReadyToHide(true)} />
    </div>
  );
};

const TransitionRevealer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useRevealer(transitionTimeRevealer);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const h1s = containerRef.current.querySelectorAll("h1.reveal-this");
      const localSplits: SplitText[] = [];
      const allLines: HTMLElement[] = [];

      h1s.forEach((h1) => {
        const split = new SplitText(h1, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
        });
        localSplits.push(split);
        allLines.push(...(split.lines as HTMLElement[]));
      });

      const tl = gsap.timeline();

      // Appear from below
      tl.set(allLines, { y: "110%", opacity: 1 });
      tl.to(allLines, {
        delay: 1,
        y: "0%",
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
      });

      // Disappear upwards before the curtain shrinks
      tl.to(allLines, {
        y: "-110%",
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.in",
        delay: 0.1,
      });

      return () => {
        localSplits.forEach((s) => s.revert());
      };
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className=" w-full h-full flex flex-col items-center justify-center relative px-6 md:px-12"
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
    </div>
  );
};

export const PageRevealer = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (isFirstLoad) {
      isFirstLoad = false;
    }
  }, [pathname]);

  return (
    <div className="revealer">
      {isFirstLoad ? (
        <InitialRevealer />
      ) : (
        <TransitionRevealer key={pathname} />
      )}
    </div>
  );
};
