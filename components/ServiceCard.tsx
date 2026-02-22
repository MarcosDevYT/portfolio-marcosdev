"use client";

import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ServiceProps {
  id: number;
  title: string;
  img: string;
  description: string;
}

export const ServiceCard = (props: ServiceProps) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return isDesktop ? <DesktopCard {...props} /> : <MobileCard {...props} />;
};

const DesktopCard = ({ id, title, img, description }: ServiceProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".service-card-image", {
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
    gsap.to(".service-card-image", {
      opacity: 1,
      scale: 1,
      rotate: 15,
      display: "block",
      duration: 0.4,
      ease: "power3.out",
    });
  });

  const onLeave = contextSafe(() => {
    gsap.to(".service-card-image", {
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
      className="text-start flex flex-row gap-12 xl:gap-16 items-center justify-between group text-gray hover:text-foreground h-40 hover:h-52 transition-all duration-300 hover:border-b-2 hover:border-light-gray cursor-pointer"
    >
      <div className="flex flex-row items-center gap-20 w-[380px] xl:w-[420px]">
        <span className="text-2xl font-satoshi">[0{id}]</span>
        <h3 className="text-3xl xl:text-4xl w-64 xl:w-78 font-medium uppercase">
          {title}
        </h3>
      </div>

      <div className="service-card-image relative z-10 min-w-32 xl:min-w-44 2xl:min-w-52 h-24 xl:h-32 2xl:h-36 overflow-hidden rounded-xl border border-light-gray/20 shadow-2xl pointer-events-none">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>

      <p className="text-gray group-hover:text-foreground text-sm xl:text-lg w-[55%] group-hover:w-[45%] transition-all duration-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const MobileCard = ({ id, title, img, description }: ServiceProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(contentRef.current, {
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        duration: 0.5,
        ease: "expo.inOut",
      });
    },
    { dependencies: [isOpen], scope: contentRef },
  );

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="text-start flex flex-col w-full py-8 border-b border-light-gray/20 transition-colors duration-300"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-6">
          <span className="text-xl font-satoshi text-gray">[0{id}]</span>
          <h3
            className={`text-xl font-medium uppercase transition-colors ${isOpen ? "text-foreground" : "text-gray"}`}
          >
            {title}
          </h3>
        </div>
        <span
          className={`text-3xl transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
        >
          +
        </span>
      </div>

      <div ref={contentRef} className="overflow-hidden opacity-0 h-0">
        <div className="pt-8 flex flex-col gap-6">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-light-gray/10">
            <Image src={img} alt={title} fill className="object-cover" />
          </div>
          <p className="text-gray text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};
