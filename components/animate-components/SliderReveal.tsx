"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface SliderRevealProps {
  images: string[];
  intervalDelay?: number;
  className?: string;
  imageClassName?: string;
  width?: number;
  height?: number;
}

export const SliderReveal: React.FC<SliderRevealProps> = ({
  images,
  intervalDelay = 3000,
  className = "",
  imageClassName = "object-cover",
  width = 400,
  height = 300,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevIndexRef = useRef(0);
  const isInitialRender = useRef(true);

  // Rotate through images based on the interval
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, intervalDelay);
    return () => clearInterval(timer);
  }, [images.length, intervalDelay]);

  // Handle the seamless GSAP transition between current and next images
  useGSAP(
    () => {
      if (!containerRef.current) return;

      const slides = gsap.utils.toArray<HTMLElement>(
        ".slider-item",
        containerRef.current,
      );
      if (slides.length <= 1) return;

      // On first load, position the first slide correctly and hide the rest below
      if (isInitialRender.current) {
        gsap.set(slides, { yPercent: 100, zIndex: 0 });
        gsap.set(slides[0], { yPercent: 0, zIndex: 1 });
        isInitialRender.current = false;
        return;
      }

      const currentSlide = slides[currentIndex];
      const prevSlide = slides[prevIndexRef.current];

      if (currentIndex !== prevIndexRef.current) {
        // Place the incoming slide above the outgoing slide
        gsap.set(currentSlide, { zIndex: 2 });
        gsap.set(prevSlide, { zIndex: 1 });

        // Animate incoming slide from below (120% to 0%)
        gsap.fromTo(
          currentSlide,
          { yPercent: 120 },
          { yPercent: 0, duration: 1, ease: "power4.out" },
        );

        // Animate outgoing slide up and out (0% to -120%)
        gsap.fromTo(
          prevSlide,
          { yPercent: 0 },
          {
            yPercent: -120,
            duration: 1,
            ease: "power4.out",
            onComplete: () => {
              // Reset the old slide to the bottom, ready for next use
              gsap.set(prevSlide, { zIndex: 0, yPercent: 120 });
            },
          },
        );

        prevIndexRef.current = currentIndex;
      }
    },
    { dependencies: [currentIndex], scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden  ${className}`}
    >
      {images.map((img, index) => (
        <div
          key={index}
          className="slider-item rounded-2xl overflow-hidden absolute inset-0 w-full h-full"
        >
          <Image
            src={img}
            alt={`Slider image ${index + 1}`}
            width={width}
            height={height}
            className={`w-full h-full ${imageClassName}`}
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
};
