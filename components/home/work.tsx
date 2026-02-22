"use client";

import RevealText from "../animate-components/RevealText";
import Container from "../layout/Container";
import { TitleSection } from "../animate-components/TitleSection";
import { WorkCard } from "../WorkCard";
import { Trabajos } from "@/lib/constans/data";
import { useCursorHover } from "@/lib/hooks/useCursorProvider";

export const WorkSection = () => {
  const { handleActiveMouseEnter, handleActiveMouseLeave } = useCursorHover();
  return (
    <Container className="flex-col pb-12">
      <TitleSection
        className="text-5xl lg:text-7xl italic"
        height="h-20"
        title="Trabajos"
        secondTitle="'25"
      />

      <article className="w-full grid grid-cols-12 py-12 md:py-24 gap-8 gap-y-12 md:gap-16">
        <div className="col-span-12 h-[400px] sm:h-[450px] md:h-[650px] lg:h-[700px] 2xl:h-[800px]">
          <WorkCard {...Trabajos[0]} />
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-5 h-full flex flex-col gap-8 gap-y-12 md:gap-16">
          <div className="h-[400px] sm:h-[450px] xl:h-[550px]">
            <WorkCard {...Trabajos[1]} />
          </div>

          <div className="h-[400px] sm:h-[450px] xl:h-[550px]">
            <WorkCard {...Trabajos[3]} />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-7 md:pt-28 h-[400px] sm:h-[450px] md:h-[650px] xl:h-[900px]">
          <WorkCard {...Trabajos[2]} />
        </div>
      </article>

      <div className="pt-8">
        <h3
          onMouseEnter={handleActiveMouseEnter}
          onMouseLeave={handleActiveMouseLeave}
          className="font-light tracking-tight italic font-satoshi text-4xl md:text-5xl lg:text-6xl h-20 overflow-hidden hover:text-violet-400"
        >
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
