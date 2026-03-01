"use client";

import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export interface EducationProps {
  id: number;
  proximamente?: boolean;
  title: string;
  img: string;
  description: string;
  institution: string;
  date: string;
}

export const EducationCard = (props: EducationProps) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => setVisible(true), 10);
      return () => clearTimeout(t);
    } else {
      document.body.style.overflow = "";
    }
  }, [isFullscreen]);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVisible(false);
    setTimeout(() => setIsFullscreen(false), 400);
  };

  const handleClick = () => {
    if (props.proximamente) return;
    setIsFullscreen(true);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`w-full ${props.proximamente ? "cursor-default" : "cursor-pointer"}`}
      >
        {isDesktop ? <DesktopCard {...props} /> : <MobileCard {...props} />}
      </div>

      {!props.proximamente && isFullscreen && (
        <div
          className={`mt-20 fixed inset-0 z-10 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-400 ease-in-out cursor-zoom-out ${visible ? "opacity-100" : "opacity-0"}`}
          onClick={handleClose}
        >
          <div
            className={`relative w-[90vw] h-[70vh] md:w-[70vw] md:h-[80vh] rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? "scale-100 translate-y-0" : "scale-90 translate-y-4"}`}
          >
            <Image
              src={props.img}
              alt={props.title}
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white/50 hover:text-white bg-black/50 p-2 rounded-full transition-colors z-10"
              onClick={handleClose}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const DesktopCard = ({
  id,
  title,
  img,
  description,
  institution,
  date,
  proximamente,
}: EducationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".education-card-image", {
        opacity: 0,
        scale: 0.5,
        rotate: 0,
        display: "none",
      });
    },
    { scope: containerRef },
  );

  const { contextSafe } = useGSAP({ scope: containerRef });

  const onEnter = contextSafe(() => {
    gsap.to(".education-card-image", {
      opacity: 1,
      scale: 1,
      rotate: -10,
      display: "flex",
      duration: 0.4,
      ease: "power3.out",
    });
  });

  const onLeave = contextSafe(() => {
    gsap.to(".education-card-image", {
      opacity: 0,
      scale: 0.5,
      rotate: 0,
      display: "none",
      duration: 0.3,
      ease: "power3.in",
    });
  });

  return (
    <div
      ref={containerRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`text-start flex flex-row gap-8 xl:gap-12 items-center justify-between group text-gray hover:text-foreground h-40 hover:h-48 transition-all duration-300 hover:border-b-2 hover:border-light-gray ${proximamente ? "" : ""}`}
    >
      <div className="flex flex-row items-center gap-12 w-[350px] xl:w-[400px]">
        <span className="text-2xl font-satoshi">[0{id}]</span>
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl xl:text-3xl font-medium uppercase group-hover:text-violet-400 transition-colors duration-300 leading-tight">
            {title}
          </h3>
          <span className="text-sm font-light tracking-wide text-gray/80 group-hover:text-gray transition-colors">
            {institution}
          </span>
        </div>
      </div>

      <div className="education-card-image relative z-10 min-w-32 xl:min-w-44 2xl:min-w-52 h-24 xl:h-32 2xl:h-36 overflow-hidden rounded-xl border border-light-gray/20 shadow-2xl pointer-events-none flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm">
        {proximamente ? (
          <div className="w-full h-full flex items-center justify-center p-4">
            <span
              className="text-[3vw] xl:text-[2.5vw] leading-none font-medium tracking-tighter uppercase font-satoshi text-transparent stroke-text text-center"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
            >
              PRÓXIMAMENTE
            </span>
          </div>
        ) : (
          <Image src={img} alt={title} fill className="object-cover" />
        )}
      </div>

      <div className="flex flex-col gap-2 w-[45%] text-right items-end justify-center">
        <span className="text-xs tracking-widest uppercase border border-white/20 px-3 py-1 rounded-full group-hover:border-violet-400/50 group-hover:text-violet-300 transition-colors">
          {date}
        </span>
        <p className="text-gray group-hover:text-foreground/80 text-sm xl:text-base transition-all duration-300 leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  );
};

const MobileCard = ({
  id,
  title,
  img,
  description,
  institution,
  date,
  proximamente,
}: EducationProps) => {
  return (
    <div className="text-start flex flex-col w-full py-8 border-b border-light-gray/20 transition-colors duration-300 relative group">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-medium uppercase text-foreground leading-none">
              {title}
            </h3>
            <span className="text-sm text-gray">
              {institution} • {date}
            </span>
          </div>
          <span className="text-xl font-satoshi text-gray mt-1">[0{id}]</span>
        </div>

        <div className="relative w-full aspect-2/1 rounded-xl overflow-hidden border border-light-gray/10 my-2 bg-zinc-900/50 flex items-center justify-center">
          {proximamente ? (
            <div className="w-full h-full flex items-center justify-center p-6">
              <span
                className="text-[10vw] leading-none font-medium tracking-tighter uppercase font-satoshi text-transparent stroke-text text-center"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
              >
                PRÓXIMAMENTE
              </span>
            </div>
          ) : (
            <>
              <Image src={img} alt={title} fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs uppercase tracking-widest font-medium">
                  Ver En Grande
                </span>
              </div>
            </>
          )}
        </div>

        <p className="text-gray/80 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
