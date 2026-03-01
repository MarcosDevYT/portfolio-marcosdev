"use client";

import { useState } from "react";

import { TextReveal } from "@/components/animate-components/ContainerReveal";
import { useCursorHover } from "@/lib/hooks/useCursorProvider";

export const AboutHero = () => {
  const [cvStatus, setCvStatus] = useState<
    "idle" | "downloading" | "downloaded"
  >("idle");
  const { handleActiveMouseEnter, handleActiveMouseLeave } = useCursorHover();

  const handleDownloadCV = () => {
    if (cvStatus !== "idle") return;

    setCvStatus("downloading");

    // Simulate link click to download file (pon la ruta real a tu CV aquí)
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/cv-marcos-morua.pdf"; // Modifica si es necesario
      link.download = "cv-marcos-morua.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setCvStatus("downloaded");
    }, 800);
  };

  return (
    <section className="flex flex-col min-h-screen justify-center relative w-full">
      {/* Experimental Full-Screen Top Section */}
      <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden w-full px-6 md:px-12">
        {/* Background element / noise */}
        <div className="absolute inset-0 bg-linear-to-b from-white/7 to-transparent pointer-events-none" />

        <div className="min-h-[450px] flex flex-col items-center justify-center gap-2 md:gap-4 z-10 w-full relative">
          <TextReveal delay={2.1} className="w-full text-center">
            <span className="text-gray uppercase tracking-[0.5em] md:tracking-[1em] text-xs md:text-sm mb-4 block font-medium">
              Software & Interface
            </span>
          </TextReveal>

          {/* Deconstructed Name */}
          <div className="flex flex-col items-center w-full">
            <TextReveal delay={2.2} className="w-full flex justify-center px-2">
              <h1
                className="text-[15vw] md:text-[12vw] leading-[0.8] font-medium tracking-tighter uppercase font-satoshi text-transparent stroke-text"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}
              >
                MARCOS
              </h1>
            </TextReveal>

            <div className="flex items-center justify-center w-full gap-4 md:gap-12 mt-2 md:mt-4">
              <TextReveal delay={2.3}>
                <div className="w-12 md:w-32 h-px bg-white/30 hidden sm:block"></div>
              </TextReveal>

              <TextReveal delay={2.3}>
                <h1 className="text-[16vw] md:text-[14vw] leading-[0.8] font-medium tracking-tighter uppercase font-satoshi text-white italic relative">
                  MORUA
                  {/* Decorative accent */}
                  <span className="absolute -top-6 -right-6 md:-top-12 md:-right-12 text-2xl md:text-5xl text-gray/40 not-italic font-light">
                    *
                  </span>
                </h1>
              </TextReveal>

              <TextReveal delay={2.3}>
                <div className="w-12 md:w-32 h-px bg-white/30 hidden sm:block"></div>
              </TextReveal>
            </div>
          </div>

          <TextReveal delay={2.4} className="w-full text-center mt-4">
            <div className="flex justify-center items-center gap-4 text-xs md:text-sm text-gray uppercase tracking-widest">
              <span>✦ Diseñador ✦</span>
              <span> Programador </span>
              <span>✦ Desarrollador ✦</span>
            </div>
          </TextReveal>
        </div>
      </div>

      {/* Original Content Bottom Area */}
      <div className="w-full px-4 md:px-8 lg:px-12 2xl:px-16">
        <div className="flex flex-col lg:flex-row justify-between w-full gap-12 2xl:gap-16 mt-8 border-t border-light-gray pt-8">
          <TextReveal>
            <div className="flex flex-col items-start gap-0 text-lg md:text-xl text-gray w-full flex-1 font-light leading-normal">
              <p>
                Soy desarrollador{" "}
                <span className="text-white font-medium">Full Stack</span> con
                más de 3 años de experiencia profesional en la creación de
                productos digitales, especializado principalmente en el
                ecosistema JavaScript moderno, con foco en React y Next.js.
              </p>
              <p>
                Actualmente me encuentro cursando la Licenciatura en Informática
                en la Universidad Siglo 21, con el objetivo de fortalecer mi
                base teórica y diseñar sistemas más escalables, estructurados y
                sostenibles a largo plazo.
              </p>
            </div>
          </TextReveal>

          <div className="w-max flex flex-col items-start lg:items-end gap-2 text-left lg:text-right">
            <TextReveal>
              <div className="flex flex-col gap-2 text-sm uppercase tracking-widest text-light-gray">
                <span>✦ Licenciatura en Informática</span>
                <span>✦ React / Next.js / Node.js</span>
              </div>

              <div className="w-full flex lg:justify-end mt-2">
                <button
                  onClick={handleDownloadCV}
                  disabled={cvStatus !== "idle"}
                  onMouseEnter={handleActiveMouseEnter}
                  onMouseLeave={handleActiveMouseLeave}
                  className={`w-max px-8 py-4 rounded-full border flex items-center justify-center gap-3 transition-all duration-300 font-satoshi text-lg
                  ${
                    cvStatus === "downloaded"
                      ? "border-green-500/50 text-green-400 bg-green-500/10 cursor-default"
                      : cvStatus === "downloading"
                        ? "border-white/30 text-white/70 bg-white/5 cursor-wait"
                        : "border-white/20 text-white hover:bg-white hover:text-black cursor-pointer group"
                  }
                `}
                >
                  {cvStatus === "idle" && (
                    <>
                      <span>Descargar CV</span>
                      <svg
                        className="group-hover:translate-y-1 transition-transform duration-300"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                    </>
                  )}
                  {cvStatus === "downloading" && (
                    <>
                      <span>Descargando...</span>
                      <svg
                        className="animate-spin"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                      </svg>
                    </>
                  )}
                  {cvStatus === "downloaded" && (
                    <>
                      <span>CV Descargado</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
