"use client";

import Link from "next/link";
import { TextReveal } from "@/components/animate-components/ContainerReveal";
import { useCursorHover } from "@/lib/hooks/useCursorProvider";

export default function NotFound() {
  const { handleActiveMouseEnter, handleActiveMouseLeave } = useCursorHover();

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-background">
      {/* Huge Background Text - Inspiration from AboutSection */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 opacity-[0.03] select-none overflow-hidden flex flex-col justify-center">
        <h2 className="text-[30vw] font-black uppercase whitespace-nowrap font-satoshi leading-none tracking-tighter">
          PERDIDO
        </h2>
        <h2 className="text-[30vw] font-black uppercase whitespace-nowrap font-satoshi leading-none tracking-tighter">
          ERROR
        </h2>
      </div>

      {/* Background element / noise - Inspiration from AboutHero */}
      <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <TextReveal delay={0.5} className="mb-2">
          <span className="text-gray uppercase tracking-[0.5em] text-xs md:text-sm font-medium block">
            Error 404
          </span>
        </TextReveal>

        <div className="flex flex-col items-center mb-8">
          <TextReveal delay={0.6}>
            <h1
              className="text-[25vw] md:text-[18vw] leading-[0.8] font-medium tracking-tighter uppercase font-satoshi text-transparent stroke-text"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}
            >
              Upps
            </h1>
          </TextReveal>

          <TextReveal delay={0.7}>
            <h1 className="text-[12vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter uppercase font-satoshi text-white italic relative -mt-4 md:-mt-8">
              No hay nada aquí
              <span className="absolute -top-4 -right-4 md:-top-8 md:-right-8 text-xl md:text-4xl text-gray/40 not-italic font-light">
                *
              </span>
            </h1>
          </TextReveal>
        </div>

        <TextReveal delay={0.8} className="max-w-md mx-auto mb-12">
          <p className="text-gray text-lg md:text-xl font-light leading-relaxed">
            Parece que te has aventurado en un rincón inexistente de mi
            ecosistema digital. No te preocupes, incluso los mejores
            exploradores se pierden a veces.
          </p>
        </TextReveal>

        <TextReveal delay={1}>
          <div className="flex justify-center">
            <Link
              href="/"
              onMouseEnter={handleActiveMouseEnter}
              onMouseLeave={handleActiveMouseLeave}
              className="px-10 py-5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 font-satoshi text-xl flex items-center gap-3 group"
            >
              <span>Volver al Inicio</span>
              <svg
                className="group-hover:-translate-x-1 transition-transform duration-300 rotate-180"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </Link>
          </div>
        </TextReveal>

        {/* Decorative elements - Inspiration from AboutHero */}
        <div className="flex justify-center items-center gap-8 mt-16 text-xs text-gray/30 uppercase tracking-[0.3em]">
          <span>✦ Creatividad</span>
          <span>✦ Código</span>
          <span>✦ Arte</span>
        </div>
      </div>
    </main>
  );
}
