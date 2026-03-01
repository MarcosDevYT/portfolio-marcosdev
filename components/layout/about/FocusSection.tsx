"use client";

import { focusCards } from "@/lib/constans/data";
import { ContainerReveal } from "@/components/animate-components/ContainerReveal";

export const FocusSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <ContainerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl z-10 mt-8 lg:mt-12 text-left">
        {focusCards.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group"
          >
            <span className="text-sm font-satoshi text-violet-400/80 group-hover:text-violet-400 transition-colors">
              [{item.id}]
            </span>

            <h3 className="text-xl md:text-2xl font-medium text-white/90 font-satoshi tracking-tight leading-none group-hover:-translate-y-0.5 transition-transform">
              {item.title}
            </h3>

            <p className="text-sm md:text-base text-gray leading-relaxed font-light">
              {item.desc}
            </p>
          </div>
        ))}
      </ContainerReveal>

      <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 max-w-5xl w-full flex flex-col items-center text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-linear-to-br from-violet-500/15 to-transparent z-0 pointer-events-none" />

        <h3 className="text-2xl lg:text-4xl italic font-light z-10 relative mb-6">
          Evolución profesional constante
        </h3>

        <p className="max-w-3xl text-gray text-base md:text-lg font-light leading-relaxed z-10 relative">
          Busco participar en proyectos y equipos donde pueda aportar valor en
          la construcción de soluciones sólidas, asumiendo mayor responsabilidad
          técnica y escalando mis habilidades dentro del software moderno.
        </p>
      </div>
    </div>
  );
};
