"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useCursorHover } from "@/lib/hooks/useCursorProvider";

interface ImageGalleryProps {
  title: string;
  images: string[];
}

export const ImageGallery = ({ title, images }: ImageGalleryProps) => {
  const [activeImage, setActiveImage] = useState(images[0]);
  const { handleActiveMouseEnter, handleActiveMouseLeave } = useCursorHover();

  return (
    <div className="w-full flex flex-col gap-4 my-8">
      {/* Large Image Container */}
      <div className="w-full relative aspect-video rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 transition-all duration-500">
        <Image
          key={activeImage}
          src={activeImage}
          alt={title}
          fill
          className="object-cover animate-in fade-in duration-500"
          priority
        />
      </div>

      {/* Thumbnails Container */}
      {images.length > 1 && (
        <div className="w-full flex gap-3 overflow-x-auto pb-4 snap-x no-scrollbar">
          {images.map((img, index) => (
            <button
              onMouseEnter={handleActiveMouseEnter}
              onMouseLeave={handleActiveMouseLeave}
              key={index}
              onClick={() => setActiveImage(img)}
              className={cn(
                "relative h-20 md:h-28 aspect-video rounded-xl overflow-hidden shrink-0 transition-all duration-300 snap-center border-2",
                activeImage === img
                  ? "border-indigo-500 scale-100 opacity-100"
                  : "border-transparent opacity-50 hover:opacity-100 scale-95",
              )}
            >
              <Image
                src={img}
                alt={`${title} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
