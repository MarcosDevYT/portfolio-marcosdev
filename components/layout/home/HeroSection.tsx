"use client";

import { ContainerReveal } from "@/components/ContainerReveal";
import { useCursorHover } from "@/hooks/useCursorProvider";

export const HeroSection = () => {
  const { handleDesapearMouseEnter, handleDesapearMouseLeave } =
    useCursorHover();

  return (
    <section
      data-bgcolor="#ffffff"
      data-textcolor="#070707"
      onMouseEnter={handleDesapearMouseEnter}
      onMouseLeave={handleDesapearMouseLeave}
      className="w-full flex items-end justify-center py-36 px-6 md:px-8 lg:px-10 2xl:px-12 text-center max-w-[1880px] mx-auto relative min-h-screen"
    >
      <div className="font-satoshi font-black flex flex-row relative text-center justify-center items-center">
        <div className="absolute text-lg md:text-2xl -top-6 md:-top-4 left-0 md:left-1">
          <ContainerReveal animateOnScroll={false} delay={2}>
            <span>UN</span>
          </ContainerReveal>
        </div>
        <div className="absolute text-lg md:text-2xl -top-6 md:-top-4 right-0">
          <ContainerReveal animateOnScroll={false} delay={2}>
            <span>MODERNO</span>
          </ContainerReveal>
        </div>
        <ContainerReveal animateOnScroll={false} delay={2}>
          <span className="text-4xl md:text-[6vw]">
            DESARROLLADOR FULL STACK
          </span>
        </ContainerReveal>
      </div>

      <ContainerReveal animateOnScroll={false} delay={2}>
        <h3 className="text-xl text-center md:text-start font-light italic md:max-w-sm w-full absolute bottom-5 left-0 md:left-16">
          Creando interfaces donde cada detalle importa, desde la idea hasta la
          experiencia final.
        </h3>
      </ContainerReveal>
    </section>
  );
};
