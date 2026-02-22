"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

export default function TagsSlider({ tags }: { tags: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const speedRef = useRef<gsap.core.Tween>(null);

  useGSAP(
    () => {
      // Create infinite loop animation
      speedRef.current = gsap.to(containerRef.current, {
        xPercent: -50,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: containerRef },
  );

  useGSAP(() => {
    if (speedRef.current) {
      // Smoothly adjust timeScale on hover
      gsap.to(speedRef.current, {
        timeScale: isHovered ? 0.5 : 1,
        duration: 0.5,
      });
    }
  }, [isHovered]);

  return (
    <section className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
      <div
        ref={containerRef}
        className="flex flex-none gap-2 pr-2 font-medium cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...tags, ...tags, ...tags, ...tags].map((tag, index) => (
          <div key={index} className="flex items-center">
            <span className="text-nowrap flex items-center justify-center py-1 px-4 rounded-full border-2 border-gray-500 group-hover:border-violet-400 text-gray-500 group-hover:text-violet-400 transition-colors text-base">
              {tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
