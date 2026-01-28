"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

const MainScrollerTrigger = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    // Función para crear los ScrollTriggers de color
    const createColorTriggers = () => {
      const sectionColor =
        document.querySelectorAll<HTMLElement>("[data-bgcolor]");

      sectionColor.forEach((colorSection, i) => {
        const prevBgColor = i === 0 ? "" : sectionColor[i - 1].dataset.bgcolor!;
        const prevTextColor =
          i === 0 ? "" : sectionColor[i - 1].dataset.textcolor!;

        ScrollTrigger.create({
          id: `bgcolor-trigger-${i}`, // ID único para este trigger
          trigger: colorSection,
          start: "top 50%",
          onEnter: () => {
            gsap.to(".main", {
              backgroundColor: colorSection.dataset.bgcolor,
              color: colorSection.dataset.textcolor,
              overwrite: "auto",
            });
          },
          onLeaveBack: () => {
            gsap.to(".main", {
              backgroundColor: prevBgColor,
              color: prevTextColor,
              overwrite: "auto",
            });
          },
        });
      });

      ScrollTrigger.refresh();
    };

    // Primero limpiamos solo los triggers de color existentes
    ScrollTrigger.getAll()
      .filter((trigger) =>
        trigger.vars.id?.toString().startsWith("bgcolor-trigger"),
      )
      .forEach((trigger) => trigger.kill());

    // Delay para esperar a que el DOM se actualice
    const timeoutId = setTimeout(createColorTriggers, 150);

    return () => {
      clearTimeout(timeoutId);
      // Solo matamos los triggers de color, no todos
      ScrollTrigger.getAll()
        .filter((trigger) =>
          trigger.vars.id?.toString().startsWith("bgcolor-trigger"),
        )
        .forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return (
    <div className="main">
      <Navbar />

      {children}
    </div>
  );
};

export default MainScrollerTrigger;
