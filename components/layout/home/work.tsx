"use client";

import RevealText from "@/components/animate-components/RevealText";
import Container from "@/components/layout/Container";
import { TitleSection } from "@/components/animate-components/TitleSection";
import { WorkCard } from "@/components/WorkCard";
import { SelectedWorks } from "@/lib/constans/data";
import { useCursorHover } from "@/lib/hooks/useCursorProvider";

export const WorkSection = () => {
  const { handleActiveMouseEnter, handleActiveMouseLeave } = useCursorHover();
  return (
    <Container className="flex-col pb-12">
      <TitleSection
        className="text-5xl lg:text-7xl italic items-center gap-6 justify-between text-center"
        height="h-20"
        title="Trabajos"
        secondTitle="'25"
      />

      <article className="w-full grid grid-cols-12 py-12 md:py-24 gap-8 gap-y-12 md:gap-16">
        <div className="col-span-12 h-100 sm:h-112.5 md:h-162.5 lg:h-175 2xl:h-200">
          <WorkCard {...SelectedWorks[0]} />
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-5 h-full flex flex-col gap-8 gap-y-12 md:gap-16">
          <div className="h-100 sm:h-112.5 xl:h-137.5">
            <WorkCard {...SelectedWorks[1]} />
          </div>

          <div className="h-100 sm:h-112.5 xl:h-137.5">
            <WorkCard {...SelectedWorks[3]} />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-7 md:pt-28 h-100 sm:h-112.5 md:h-162.5 xl:h-225">
          <WorkCard {...SelectedWorks[2]} />
        </div>
      </article>

      <div className="pt-8">
        <h3
          onMouseEnter={handleActiveMouseEnter}
          onMouseLeave={handleActiveMouseLeave}
          className="font-light tracking-tight italic font-satoshi text-4xl md:text-5xl lg:text-6xl h-20 overflow-hidden hover:text-violet-400"
        >
          <RevealText
            text={"Más Trabajos"}
            to="/trabajos"
            delayPerLetter={12}
          />
        </h3>
      </div>
    </Container>
  );
};
