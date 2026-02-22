"use client";

import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { MouseEvent } from "react";
import Link from "next/link";

const RevealText = ({
  to,
  text,
  delayPerLetter = 30,
}: {
  to: string;
  text: string;
  delayPerLetter?: number;
}) => {
  const letters = text.split("");
  const router = useTransitionRouter();
  const pathname = usePathname();
  const lenis = useLenis();

  function triggerPageTransition() {
    document.documentElement.animate(
      [
        { clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)" },
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
      ],
      {
        duration: 2000,
        easing: "cubic-bezier(0.9, 0, 0.1, 1)",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  }

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const isExternal = to.startsWith("http");
    if (isExternal) return;

    e.preventDefault();

    if (to.startsWith("#")) {
      const section = document.querySelector<HTMLElement>(to);
      if (section && lenis) {
        lenis.scrollTo(section);
      }
    } else {
      if (to === pathname) return;

      router.push(to, {
        onTransitionReady: triggerPageTransition,
      });

      setTimeout(() => {
        lenis?.scrollTo(0);
      }, 500);
    }
  };

  const isExternal = to.startsWith("http");

  return (
    <Link
      href={to}
      onClick={handleClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="relative inline-block group overflow-hidden cursor-pointer"
    >
      <div className="block">
        {letters.map((letter: string, index: number) => (
          <span
            key={`top-${index}`}
            style={{ transitionDelay: `${index * delayPerLetter}ms` }}
            className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.024,1)] translate-y-0 group-hover:translate-y-[-110%]"
          >
            {letter === " " ? "\xa0" : letter}
          </span>
        ))}
      </div>
      <div className="block">
        {letters.map((letter: string, index: number) => (
          <span
            key={`bottom-${index}`}
            style={{ transitionDelay: `${index * delayPerLetter}ms` }}
            className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.024,1)] translate-y-full group-hover:-translate-y-full"
          >
            {letter === " " ? "\xa0" : letter}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default RevealText;
