"use client";

import Container from "@/components/layout/Container";
import { TextReveal } from "@/components/animate-components/ContainerReveal";
import { EducationCard } from "./EducationCard";
import { educationData } from "@/lib/constans/data";

export const EducationSection = () => {
  return (
    <Container className="flex-col gap-12 md:gap-16 py-16 w-full relative z-10">
      <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-4 w-full border-b border-light-gray/20 pb-8">
        <div className="flex flex-col gap-2">
          <TextReveal delay={0}>
            <span className="text-center md:text-start text-sm uppercase tracking-widest text-violet-400 font-medium font-satoshi">
              Background
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-center md:text-start text-[6vw] lg:text-6xl xl:text-7xl font-medium tracking-tighter uppercase font-satoshi leading-none max-w-md text-foreground">
              FORMACIÓN ACADÉMICA
            </h2>
          </TextReveal>
        </div>

        <TextReveal delay={0.2}>
          <p className="text-gray text-base md:text-lg lg:text-xl max-w-md text-center md:text-right font-light leading-relaxed">
            Una base teórica sólida combinada con aprendizaje práctico continuo,
            garantizando la escalabilidad y calidad de cada proyecto.
          </p>
        </TextReveal>
      </div>

      <article className="flex flex-col w-full group/list">
        {educationData.map((item) => (
          <EducationCard key={item.id} {...item} />
        ))}
      </article>
    </Container>
  );
};
