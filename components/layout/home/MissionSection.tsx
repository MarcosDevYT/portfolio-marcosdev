"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../Container";
import { useCursorHover } from "@/hooks/useCursorProvider";

gsap.registerPlugin(ScrollTrigger);

export const MissionSection = () => {
  const { handleActiveMouseEnter, handleActiveMouseLeave } = useCursorHover();

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];
    const textElements =
      document.querySelectorAll<HTMLElement>(".animate-text");

    textElements.forEach((textElement) => {
      textElement.setAttribute(
        "data-text",
        textElement.textContent?.trim() || "",
      );

      // === ANIMACIÓN INICIAL: aparece desde abajo ===
      const fromToTrigger = gsap.fromTo(
        textElement,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: textElement,
            start: "top 85%", // empieza a animar cuando entra al viewport
            toggleActions: "play none none reverse",
          },
        },
      );

      // Guardar el trigger de fromTo si existe
      if (fromToTrigger.scrollTrigger) {
        triggers.push(fromToTrigger.scrollTrigger);
      }

      // === EFECTO DE REVELADO CLIP ===
      const clipTrigger = ScrollTrigger.create({
        trigger: textElement,
        start: "top 50%",
        end: "bottom 50%",
        scrub: 1,
        onUpdate: (self) => {
          const clipValue = Math.max(0, 100 - self.progress * 100);
          textElement.style.setProperty("--clip-value", `${clipValue}%`);
        },
      });

      triggers.push(clipTrigger);
    });

    // Limpieza: solo matamos los triggers que creamos
    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Container className="min-h-screen" blackBg>
      <h1
        className="animate-text"
        onMouseEnter={handleActiveMouseEnter}
        onMouseLeave={handleActiveMouseLeave}
      >
        Creo en el poder de lo esencial. Mi misión es transformar necesidades
        reales en experiencias digitales elegantes y eficientes. Menos
        elementos, mejor experiencia, mayor impacto.
      </h1>
    </Container>
  );
};
