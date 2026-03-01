"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { ListaDeTrabajos } from "@/lib/constans/works";
import Container from "@/components/layout/Container";
import {
  TextReveal,
  ContainerReveal,
} from "@/components/animate-components/ContainerReveal";
import { SliderReveal } from "@/components/animate-components/SliderReveal";

export const HeroSection = () => {
  const figureRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!figureRef.current) return;

      gsap.set(figureRef.current, {
        clipPath: "inset(100% 0 0 0)",
      });

      gsap.to(figureRef.current, {
        clipPath: "inset(0% 0 0 0)",
        duration: 2,
        ease: "expo.inOut",
        delay: 2.2,
      });
    },
    { scope: figureRef },
  );

  return (
    <Container className="h-screen md:h-[120vh] pt-20 md:pt-28 overflow-clip">
      <article className="pb-28 md:pb-10 xl:pb-24 2xl:pb-28 h-full flex flex-col justify-between w-full">
        <div className="flex justify-between md:hidden">
          <Link href={"/trabajos"}>
            <TextReveal delay={3.1}>
              <h2 className="h-12 text-3xl italic font-satoshi">Trabajos</h2>
            </TextReveal>
          </Link>

          <TextReveal delay={3.1}>
            <h2 className="uppercase font-satoshi flex flex-col items-center text-center justify-center text-xl leading-6">
              Trabajando
              <span className="text-gray">Desde 2024</span>
            </h2>
          </TextReveal>
        </div>

        <div className="hidden md:flex flex-col items-start">
          <Link href="/trabajos" className="group">
            <TextReveal delay={3.1}>
              <h2 className="text-start h-12 text-3xl md:text-4xl italic font-satoshi group-hover:text-indigo-400 transition-colors">
                Trabajos
              </h2>
            </TextReveal>

            <ContainerReveal delay={3.1}>
              <div className="relative mt-2">
                <SliderReveal
                  images={ListaDeTrabajos.map((t) => t.mainImage)}
                  intervalDelay={3000}
                  className="aspect-video w-60 h-32 md:w-80 md:h-44 rounded-2xl"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-black/30 z-10 group-hover:bg-black/0 transition-colors duration-300 pointer-events-none rounded-2xl" />
              </div>
            </ContainerReveal>
          </Link>
        </div>

        <TextReveal delay={2.9}>
          <h1 className="font-satoshi flex flex-col items-center text-center md:items-start md:text-start text-[6vh] lg:text-[10vh] xl:text-[13vh] 2xl:text-[15vh] xl:leading-none">
            <span>PROGRAMADOR</span>
            <span>FULL STACK</span>
          </h1>
        </TextReveal>
      </article>

      <figure
        ref={figureRef}
        className="md:hidden absolute top-1/2 left-1/2 -z-1 -translate-1/2 w-[60%] h-[70%] pt-24 md:pr-8 lg:pr-12 2xl:pr-16"
      >
        <div className="relative h-full w-full">
          <Image
            src={"/about.jpg"}
            alt="Imagen de Marcos"
            className="object-cover object-[50%_80%]"
            fill
          />
          <div className="absolute inset-0 bg-black/30 z-1 pointer-events-none" />
          <div className="bg-crop-esquinas absolute inset-0 z-2 pointer-events-none" />
        </div>
      </figure>

      <figure
        ref={figureRef}
        className="hero-img hidden md:block absolute top-0 right-0 -z-1 w-[40%] pt-28 pr-4 md:pr-8 lg:pr-12 2xl:pr-16"
      >
        <div className="relative h-full w-full">
          <Image
            src={"/about.jpg"}
            alt="Imagen de Marcos"
            className="object-cover object-[50%_80%]"
            fill
          />
          <div className="absolute inset-0 bg-black/30 z-1 pointer-events-none" />
          <div className="bg-crop-esquinas absolute inset-0 z-2 pointer-events-none" />
        </div>
      </figure>
    </Container>
  );
};
