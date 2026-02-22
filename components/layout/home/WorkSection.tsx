"use client";

import Container from "../Container";
import { TitleSection } from "@/components/TitleSection";
import { Trabajos } from "@/constants/data";
import { WorkCard } from "@/components/WorkCard";
import RevealText from "@/components/RevealText";

export const WorkSection = () => {
  return (
    <Container className="flex-col pb-12" blackBg>
      <TitleSection title="Trabajos" secondTitle="'25" />

      <article className="w-full grid grid-cols-12 py-24 gap-16">
        <div className="col-span-12 h-[500px] md:h-[650px] lg:h-[700px] 2xl:h-[800px]">
          <WorkCard {...Trabajos[0]} />
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-5 h-[500px] xl:h-[550px]">
          <WorkCard {...Trabajos[1]} />
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-7 md:pt-28 h-[500px] md:h-[650px] xl:h-[800px]">
          <WorkCard {...Trabajos[2]} />
        </div>
      </article>

      <div className="pt-8">
        <h3 className="font-light tracking-tight italic font-satoshi text-5xl h-20 overflow-hidden hover:text-violet-400">
          <RevealText
            text={"✦ Más Trabajos ✦"}
            to="/trabajos"
            delayPerLetter={12}
          />
        </h3>
      </div>
    </Container>
  );
};
