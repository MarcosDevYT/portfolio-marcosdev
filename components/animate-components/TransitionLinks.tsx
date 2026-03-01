"use client";

import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { MouseEvent } from "react";
import { TextReveal } from "./ContainerReveal";
import { useCursorHover } from "@/lib/hooks/useCursorProvider";

interface TransitionLinksProps {
  href: string;
  className?: string;
  title: React.ReactNode;
  delay?: number;
  isImageReveal?: boolean;
  isWithTextReveal?: boolean;
  ref?: React.RefObject<HTMLAnchorElement> | null;
  children?: React.ReactNode;
}

export const TransitionLinks: React.FC<TransitionLinksProps> = ({
  href,
  className,
  isImageReveal,
  isWithTextReveal,
  children,
  title,
  delay = 2,
  ref,
}) => {
  const {
    handleActiveMouseEnter,
    handleLinkMouseEnter,
    handleLinkMouseLeave,
    handleActiveMouseLeave,
  } = useCursorHover();

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
      },
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

  if (isImageReveal) {
    return (
      <Link
        ref={ref}
        className={className}
        href={href}
        onClick={handleNavigation(href)}
        onMouseEnter={handleLinkMouseEnter}
        onMouseLeave={handleLinkMouseLeave}
      >
        {children}
      </Link>
    );
  }

  if (isWithTextReveal)
    return (
      <TextReveal delay={delay}>
        <Link
          className={className}
          href={href}
          onClick={handleNavigation(href)}
          onMouseEnter={handleActiveMouseEnter}
          onMouseLeave={handleActiveMouseLeave}
        >
          {title}
        </Link>
      </TextReveal>
    );

  return (
    <Link
      className={className}
      href={href}
      onClick={handleNavigation(href)}
      onMouseEnter={handleActiveMouseEnter}
      onMouseLeave={handleActiveMouseLeave}
    >
      {title}
    </Link>
  );
};
