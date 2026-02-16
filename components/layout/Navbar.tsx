"use client";

import Link from "next/link";
import { TransitionLinks } from "../TransitionLinks";
import { ContainerReveal } from "../ContainerReveal";
import { BiMenuAltRight } from "react-icons/bi";
import { ScrollButton } from "../ScrollButton";

export const Navbar = () => {
  return (
    <header className="header z-50 sticky top-0 left-0 w-full h-20 px-8">
      <nav className="w-full h-full flex items-center justify-between relative">
        <ContainerReveal delay={2}>
          <Link href={"/"} className="font-light text-3xl ">
            MarcosDev
          </Link>
        </ContainerReveal>

        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-1/2 flex-row items-center gap-4">
          <TransitionLinks className="text-xl" href="/" title="Inicio" />
          <TransitionLinks
            className="text-xl"
            href="/sobre-mi"
            title="Sobre mi"
          />
          <TransitionLinks
            className="text-xl"
            href="/trabajos"
            title="Trabajos"
          />
        </div>

        <div className="flex flex-row items-center gap-4">
          <ScrollButton
            className="button px-4"
            sectionId="#contacto"
            title="Hablemos"
            delay={2}
          />

          <ContainerReveal delay={2}>
            <button className="button px-2">
              <BiMenuAltRight size={28} />
            </button>
          </ContainerReveal>
        </div>
      </nav>
    </header>
  );
};
