"use client";

import { useRef } from "react";
import Image from "next/image";
import TagsSlider from "./TagsSlider";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TransitionLinks } from "./animate-components/TransitionLinks";

gsap.registerPlugin(ScrollTrigger);

interface WorkCardProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
  src: string;
  link: string;
}

export const WorkCard = ({
  id,
  title,
  description,
  tags,
  src,
}: WorkCardProps) => {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { yPercent: -15 },
      {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  }, []);

  return (
    <article className="h-full w-full flex flex-col items-center justify-center overflow-clip gap-3 md:gap-4">
      <TransitionLinks
        href={`/trabajos/${id}`}
        ref={containerRef}
        className="block flex-1 relative w-full h-full rounded-2xl overflow-hidden cursor-none"
        isImageReveal
      >
        <Image
          ref={imageRef}
          src={src}
          alt={title}
          fill
          className="object-cover"
        />
      </TransitionLinks>

      <div className="flex flex-col gap-1 md:gap-2 w-full">
        <TagsSlider tags={tags} />

        <div className="flex flex-col items-start justify-start text-start">
          <TransitionLinks
            delay={0}
            href={`/trabajos/${id}`}
            title={title}
            className="text-2xl md:text-3xl font-medium truncate hover:text-violet-400 transition-colors"
          />

          <p className=" mt-1 text-sm md:text-base text-gray-500 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};
