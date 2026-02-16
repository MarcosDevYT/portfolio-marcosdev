"use client";

import { ContainerReveal } from "@/components/ContainerReveal";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      data-bgcolor="#ffffff"
      data-textcolor="#070707"
      className="trail-container w-full flex items-end justify-center py-42 px-6 md:px-8 lg:px-10 2xl:px-12 text-center max-w-[1880px] mx-auto relative min-h-[calc(100svh-80px)] overflow-hidden"
    >
      <div className="font-satoshi font-black flex flex-row relative text-center justify-center items-center z-10">
        <div className="absolute text-lg md:text-2xl -top-6 md:-top-7 lg:-top-7 2xl:-top-5 left-0">
          <ContainerReveal animateOnScroll={false} delay={2}>
            <span>UN</span>
          </ContainerReveal>
        </div>
        <div className="absolute text-lg md:text-2xl -top-6 md:-top-7 lg:-top-7 2xl:-top-5 right-0">
          <ContainerReveal animateOnScroll={false} delay={2}>
            <span>MODERNO</span>
          </ContainerReveal>
        </div>
        <ContainerReveal animateOnScroll={false} delay={2}>
          <span className="text-4xl md:text-[5.4vw] lg:text-[5.7vw] 2xl:text-[6vw] w-full">
            DESARROLLADOR FULL STACK
          </span>
        </ContainerReveal>
      </div>

      <div className="absolute bottom-6 w-full z-10 flex flex-col md:flex-row items-center md:items-end md:px-18 justify-center md:justify-between gap-4">
        <ContainerReveal animateOnScroll={false} delay={2}>
          <h3 className="text-lg md:text-xl text-center md:text-start font-light italic md:max-w-sm w-full">
            Creando interfaces donde cada detalle importa, desde la idea hasta
            la experiencia final.
          </h3>
        </ContainerReveal>

        <ContainerReveal animateOnScroll={false} delay={2}>
          <span className="text-lg">
            Scroll <ArrowDown className="inline-flex animate-bounce" />
          </span>
        </ContainerReveal>
      </div>
    </section>
  );
};
