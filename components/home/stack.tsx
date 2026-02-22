"use client";

import { stackItems, stackItemsMobile } from "@/lib/constans/const";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { useEffect, useRef, MouseEvent } from "react";
import { useCursorHover } from "@/lib/hooks/useCursorProvider";
import Container from "../layout/Container";
import { TitleSection } from "../animate-components/TitleSection";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export const StackSection = () => {
  const { handleDesapearMouseEnter, handleDesapearMouseLeave } =
    useCursorHover();

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!titleContainerRef.current) return;
      const h2 = titleContainerRef.current.querySelector("h2");
      if (!h2) return;

      const split = SplitText.create(h2, {
        type: "lines",
        mask: "lines",
        linesClass: "line++",
      }) as any;

      if (split.lines) {
        split.lines.forEach((line: any) => {
          const lineEl = line as HTMLElement;
          lineEl.style.textAlign = "";
          if (lineEl.parentElement) {
            lineEl.parentElement.style.textAlign = "";
          }
        });

        gsap.set(split.lines, { y: "150%" });

        gsap.to(split.lines, {
          y: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: titleContainerRef.current,
            start: "top 95%",
            end: "bottom 40%",
            scrub: 1,
          },
        });
      }

      return () => {
        if (split && typeof split.revert === "function") {
          split.revert();
        }
      };
    },
    { scope: titleContainerRef },
  );

  useEffect(() => {
    const container = containerRef.current;
    const highlight = highlightRef.current;

    if (!container || !highlight) return;

    const gridItems = container.querySelectorAll<HTMLElement>(".grid-item");
    const firstItem = container.querySelector<HTMLElement>(".grid-item");

    // Asigna color a cada grid-item
    gridItems.forEach((item) => {
      item.dataset.color = "#ffffff";
    });

    const moveToElement = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      highlight.style.transform = `translate(${
        rect.left - containerRect.left - 1
      }px, ${rect.top - containerRect.top - 1}px)`;
      highlight.style.width = `${rect.width + 1}px`;
      highlight.style.height = `${rect.height + 1}px`;
      highlight.style.backgroundColor = element.dataset.color || "transparent";
    };

    const moveHighlight = (e: MouseEvent | globalThis.MouseEvent) => {
      const hoveredElements = document.elementsFromPoint(e.clientX, e.clientY);
      const gridElement = hoveredElements.find((el) =>
        el.classList.contains("grid-item"),
      ) as HTMLElement | undefined;

      if (gridElement) moveToElement(gridElement);
    };

    if (firstItem) moveToElement(firstItem);

    container.addEventListener("mousemove", moveHighlight as EventListener);

    return () => {
      container.removeEventListener(
        "mousemove",
        moveHighlight as EventListener,
      );
    };
  }, [isMobile]);

  return (
    <Container className="flex-col">
      <div
        ref={titleContainerRef}
        className="w-full flex flex-col items-center justify-center mb-12 md:mb-0"
      >
        <h2 className="uppercase w-full font-satoshi text-center px-2 text-[17vw] sm:text-9xl md:text-[9rem] lg:text-[12rem] xl:text-[14rem] 2xl:text-[16rem] font-black leading-none cursor-default">
          Stack Moderno
        </h2>
      </div>

      <div className="relative w-full min-h-max md:h-[80vh] flex flex-col justify-center items-center gap-4">
        <h2 className="w-full text-left text-3xl font-satoshi">
          Profesional en
        </h2>

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
                      className=" grid-item group flex flex-col justify-center items-center"
                      key={item.title}
                    >
                      <Icon
                        size={56}
                        className={`relative mix-blend-difference z-2 transition-all duration-200 stroke-white ${
                          item.personalizado && "w-20 h-14 fill-white"
                        } ${item.next && "w-28 h-14"} ${
                          item.fillNone && "fill-none"
                        }`}
                      />
                      <p className="relative mix-blend-difference z-2 mt-2 text-white duration-100 text-sm">
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
            {stackItems.map((row) => {
              const firstRow = row.id === 0;

              return (
                <div
                  className={`grid-row ${firstRow ? "first-row" : ""}`}
                  key={row.id}
                >
                  {row.items.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        className="grid-item group flex flex-col justify-center items-center"
                        key={index}
                      >
                        <Icon
                          size={
                            isDesktop
                              ? firstRow && index === 0
                                ? 124
                                : 48
                              : 48
                          }
                          className={`relative mix-blend-difference text-white  stroke-white z-2 transition-all duration-200  group-hover:stroke-white ${
                            item.personalizado && "w-20 lg:w-24 h-16 lg:h-24"
                          } ${item.next && firstRow ? "w-28 md:w-40 lg:w-52 xl:w-64 h-16 md:h-20" : `${firstRow ? "md:h-24 w-24" : "h-16 w-16 lg:h-20 lg:w-20"}`} ${
                            !item.fillNone &&
                            "fill-white group-hover:fill-white"
                          }`}
                        />
                        <p className="mt-3 mix-blend-difference text-white group-hover:text-white transition-colors duration-100">
                          {item.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
            <div className="highlight" ref={highlightRef} />
          </div>
        )}
      </div>
    </Container>
  );
};
