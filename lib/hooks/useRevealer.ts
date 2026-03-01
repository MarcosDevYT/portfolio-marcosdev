"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

export function useRevealer(delay = 1) {
  useGSAP(
    () => {
      gsap.to(".revealer", {
        scaleY: 0,
        duration: 1.25,
        delay: delay,
        ease: "hop",
        onComplete: () => {
          // Recalculate ScrollTrigger thresholds after view transition and revealer ends
          ScrollTrigger.refresh();
        },
      });
    },
    { dependencies: [delay] },
  );
}
