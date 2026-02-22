"use client";

import Image from "next/image";
import TagsSlider from "./TagsSlider";
import Link from "next/link";
import { useCursorHover } from "@/lib/hooks/useCursorProvider";

interface WorkCardProps {
  title: string;
  description: string;
  tags: string[];
  src: string;
  link: string;
}

export const WorkCard = ({
  title,
  description,
  tags,
  src,
  link,
}: WorkCardProps) => {
  const { handleLinkMouseEnter, handleLinkMouseLeave } = useCursorHover();

  return (
    <article className="h-full w-full flex flex-col items-center justify-center overflow-clip gap-3 md:gap-4">
      <Link
        href={link}
        className="block flex-1 relative w-full h-full rounded-2xl overflow-hidden cursor-none"
        onMouseEnter={handleLinkMouseEnter}
        onMouseLeave={handleLinkMouseLeave}
      >
        <Image src={src} alt={title} fill className="object-cover" />
      </Link>

      <div className="flex flex-col gap-1 md:gap-2 w-full">
        <TagsSlider tags={tags} />

        <div className="flex flex-col items-start justify-start text-start">
          <h3 className="text-2xl md:text-3xl font-medium">{title}</h3>
          <p className=" mt-1 text-sm md:text-base text-gray-500 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};
