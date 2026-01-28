"use client";

import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { MouseEvent } from "react";
import { ContainerReveal } from "./ContainerReveal";
import { useCursorHover } from "@/hooks/useCursorProvider";

interface TransitionLinksProps {
  href: string;
  className?: string;
  title: string;
}

export const TransitionLinks: React.FC<TransitionLinksProps> = ({
  href,
  className,
  title,
}) => {
  const { handleActiveMouseEnter, handleActiveMouseLeave } = useCursorHover();

  const router = useTransitionRouter();
  const pathname = usePathname();

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
      }
    );
  }

  const handleNavigation =
    (path: string) => (e: MouseEvent<HTMLAnchorElement>) => {
      if (path === pathname) {
        e.preventDefault();
        return;
      }

      router.push(path, {
        onTransitionReady: triggerPageTransition,
      });
    };

  return (
    <ContainerReveal delay={2}>
      <Link
        className={className}
        href={href}
        onClick={handleNavigation(href)}
        onMouseEnter={handleActiveMouseEnter}
        onMouseLeave={handleActiveMouseLeave}
      >
        {title}
      </Link>
    </ContainerReveal>
  );
};
