"use client";

import Container from "../Container";
import { TitleSection } from "@/components/TitleSection";
import { Trabajos } from "@/constants/data";
import { WorkCard } from "@/components/WorkCard";

export const WorkSection = () => {
  return (
    <Container className="flex-col" blackBg>
      <TitleSection title="Trabajos" secondTitle="'25" />

      <article className="w-full grid grid-cols-12 py-24">
        <WorkCard {...Trabajos[0]} />
        <WorkCard {...Trabajos[1]} />
        <WorkCard {...Trabajos[2]} />
      </article>
    </Container>
  );
};
