"use client";

import { stackItems, stackItemsMobile } from "@/constants/conts";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEffect, useRef, MouseEvent } from "react";
import { useCursorHover } from "@/hooks/useCursorProvider";
import Container from "../Container";
import { TitleSection } from "@/components/TitleSection";

export const StackSection = () => {
  const { handleDesapearMouseEnter, handleDesapearMouseLeave } =
    useCursorHover();

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const highlight = highlightRef.current;

    if (!container || !highlight) return;

    const gridItems = container.querySelectorAll<HTMLElement>(".grid-item");
    const firstItem = container.querySelector<HTMLElement>(".grid-item");

    // Asigna color a cada grid-item
    gridItems.forEach((item) => {
      item.dataset.color = "#171717";
    });

    const moveToElement = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      highlight.style.transform = `translate(${
        rect.left - containerRect.left - 1
      }px, ${rect.top - containerRect.top - 1}px)`;
      highlight.style.width = `${rect.width}px`;
      highlight.style.height = `${rect.height}px`;
      highlight.style.backgroundColor = element.dataset.color || "transparent";
    };

    const moveHighlight = (e: MouseEvent | globalThis.MouseEvent) => {
      const hoveredElements = document.elementsFromPoint(e.clientX, e.clientY);
      const gridElement = hoveredElements.find((el) =>
        el.classList.contains("grid-item")
      ) as HTMLElement | undefined;

      if (gridElement) moveToElement(gridElement);
    };

    if (firstItem) moveToElement(firstItem);

    container.addEventListener("mousemove", moveHighlight as EventListener);

    return () => {
      container.removeEventListener(
        "mousemove",
        moveHighlight as EventListener
      );
    };
  }, [isMobile]);

  return (
    <Container>
      <div className="relative w-full min-h-max h-screen flex flex-col justify-center items-center gap-12">
        <TitleSection title="Stack" />

        {isMobile ? (
          <div
            className="grid-stack mobile"
            ref={containerRef}
            onMouseEnter={handleDesapearMouseEnter}
            onMouseLeave={handleDesapearMouseLeave}
          >
            {stackItemsMobile.map((row) => (
              <div className="grid-row" key={row.id}>
                {row.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      className="grid-item group flex flex-col justify-center items-center"
                      key={item.title}
                    >
                      <Icon
                        size={56}
                        className={`relative z-[2] transition-all duration-200 group-hover:fill-white group-hover:stroke-white ${
                          item.personalizado && "w-20 h-14"
                        } ${item.next && "w-28 h-14"} ${
                          item.fillNone && "fill-none"
                        }`}
                      />
                      <p className="mt-2 group-hover:text-white transition-colors duration-100 text-sm">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            ))}
            <div className="highlight" ref={highlightRef} />
          </div>
        ) : (
          <div
            className="grid-stack"
            ref={containerRef}
            onMouseEnter={handleDesapearMouseEnter}
            onMouseLeave={handleDesapearMouseLeave}
          >
            {stackItems.map((row) => (
              <div className="grid-row" key={row.id}>
                {row.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      className="grid-item group flex flex-col justify-center items-center"
                      key={item.title}
                    >
                      <Icon
                        size={isDesktop ? 64 : 48}
                        className={`relative mix-blend-difference text-white  stroke-white z-[2] transition-all duration-200  group-hover:stroke-white ${
                          item.personalizado && "w-20 lg:w-24 h-16"
                        } ${item.next && "w-28 lg:w-32 h-16"} ${
                          !item.fillNone && "fill-white group-hover:fill-white"
                        }`}
                      />
                      <p className="mt-3 mix-blend-difference text-white group-hover:text-white transition-colors duration-100">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            ))}
            <div className="highlight" ref={highlightRef} />
          </div>
        )}
      </div>
    </Container>
  );
};
