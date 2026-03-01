"use client";

import Image from "next/image";
import { useCursorHover } from "@/lib/hooks/useCursorProvider";
import Container from "@/components/layout/Container";
import { TitleSection } from "@/components/animate-components/TitleSection";
import RevealText from "@/components/animate-components/RevealText";

export const AboutSection = () => {
  const { handleActiveMouseEnter, handleActiveMouseLeave } = useCursorHover();

  return (
    <Container className="flex-col pt-12 md:pt-24 pb-24 gap-16 md:gap-24 relative overflow-x-hidden w-full">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center z-10 gap-2 md:gap-6">
        <TitleSection
          className="text-6xl lg:text-8xl px-2 italic items-end gap-6 justify-start text-left"
          height="h-14 lg:h-24"
          title="Sobre Mí"
        />

        <div className="flex flex-col items-center sm:items-end gap-2 text-gray uppercase tracking-widest text-sm mb-4 md:mb-6">
          <span>
            <span className="hidden sm:inline">✦ </span>Portfolio 2024
          </span>
          <span>Puerto Madryn, Chubut, Arg</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative w-full items-stretch">
        {/* Columna Izquierda: Texto */}
        <div className="lg:col-span-4 flex flex-col gap-4 z-10 pt-4 md:pt-0 pointer-events-none text-left order-2 lg:order-1 self-center">
          <p className="text-xl md:text-3xl lg:text-2xl xl:text-3xl tracking-tight font-light leading-snug text-gray">
            Desarrollador{" "}
            <span className="text-white font-medium">Full Stack</span> con
            visión estratégica, construyendo{" "}
            <span className="text-white font-medium italic">
              productos escalables
            </span>{" "}
            orientados a resultados.
          </p>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-gray md:w-[95%]">
            <p>
              Con más de 3 años de experiencia en el ecosistema JavaScript
              moderno, me dedico a crear mucho más que interfaces estéticas. Mi
              formación académica como Licenciado en Informática me permite
              aplicar bases sólidas de arquitectura a problemas reales.
            </p>
            <p>
              Construyo desde ecosistemas E-Commerce hasta plataformas SaaS
              escalables, priorizando en cada línea el rendimiento, una
              excelente experiencia de usuario y el cumplimiento de los
              objetivos de tu negocio.
            </p>
          </div>
        </div>

        {/* Columna Centro: Imagen y Símbolo */}
        <div className="lg:col-span-4 relative w-full flex justify-center order-1 lg:order-2 self-center">
          <div className="relative h-[400px] md:h-[500px] w-full max-w-[320px] md:max-w-[380px] aspect-4/5 mx-auto overflow-hidden rounded-sm group shadow-2xl">
            <Image
              src="/about.jpg"
              alt="Marcos - Desarrollador y Diseñador"
              fill
              className="object-cover object-[50%_80%] grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-black/20 z-1 pointer-events-none group-hover:bg-black/0 transition-colors duration-500" />
          </div>
          {/* Símbolo "Creative Developer" (contenido dentro de la imagen) */}
          <div className="absolute -bottom-12 left-1/4 lg:-left-4 z-20 pointer-events-none">
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-black/40 overflow-hidden">
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-center -rotate-12 text-white font-medium">
                Creative
                <br />
                Developer
              </p>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Contenido Extra y CTA */}
        <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end h-full order-3 z-10 pt-0 self-center lg:min-h-[500px] lg:py-4">
          {/* Contenido Superior para llenar espacio */}
          <div className="flex flex-col gap-6 items-start lg:items-end text-left lg:text-right w-full">
            <div className="hidden lg:block w-px h-16 bg-white/30 mb-2" />
            <p className="text-gray text-sm md:text-base leading-relaxed lg:max-w-[280px]">
              Mi enfoque combina la precisión técnica con el diseño funcional,
              asegurando que cada proyecto no solo se vea bien, sino que rinda
              de manera excepcional.
            </p>
            <div className="flex flex-col gap-2 mt-2 text-sm text-light-gray uppercase tracking-widest">
              <span>+ Frontend & Backend</span>
              <span>+ Arquitectura UI/UX</span>
              <span>+ Performance Ops</span>
            </div>
          </div>

          {/* CTA "Conóceme más" */}
          <div className="flex flex-col gap-3 md:gap-4 items-start lg:items-end w-full mt-16 lg:mt-0">
            <span className="text-sm uppercase tracking-widest text-gray mb-1">
              Descubre mi historia
            </span>
            <div
              onMouseEnter={handleActiveMouseEnter}
              onMouseLeave={handleActiveMouseLeave}
              className="font-light tracking-tight italic font-satoshi text-4xl xl:text-6xl h-10 xl:h-16 overflow-hidden lg:text-right hover:text-violet-400 group cursor-pointer transition-colors duration-300 w-full flex justify-start lg:justify-end"
            >
              <RevealText
                text={"Conóceme más ↗"}
                to="/sobre-mi"
                delayPerLetter={12}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Huge Background Text */}
      <div className="absolute top-[65%] lg:top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] lg:w-full text-center pointer-events-none z-0 opacity-[0.05] select-none overflow-hidden flex flex-col justify-center">
        <h2 className="text-[25vw] lg:text-[18vw] font-black uppercase whitespace-nowrap font-satoshi leading-none tracking-tighter">
          CÓDIGO
        </h2>
        <h2 className="text-[25vw] lg:text-[18vw] font-black uppercase whitespace-nowrap font-satoshi leading-none tracking-tighter">
          & ARTE
        </h2>
      </div>
    </Container>
  );
};
