"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import NavMenu from "./NavMenu";

import MenuToggle from "../MenuToggle";
import { ScrollButton } from "../animate-components/ScrollButton";
import { useCursorHover } from "@/lib/hooks/useCursorProvider";
import {
  ContainerReveal,
  TextReveal,
} from "../animate-components/ContainerReveal";
import { TransitionLinks } from "../animate-components/TransitionLinks";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { handleActiveMouseEnter, handleActiveMouseLeave } = useCursorHover();

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className="fixed z-20 backdrop-blur-md text-white top-0 left-0 w-full">
        <nav className="font-satoshi-variable relative px-4 md:px-8 lg:px-12 2xl:px-16 flex justify-between items-center w-full h-16 md:h-20 py-3 md:py-4 transition-all">
          <ContainerReveal delay={3.2}>
            <MenuToggle button={toggleMenu} icon={<Menu size={36} />} />
          </ContainerReveal>

          <div
            onMouseEnter={handleActiveMouseEnter}
            onMouseLeave={handleActiveMouseLeave}
            className="absolute top-1/2 left-1/2 -translate-1/2"
          >
            <TransitionLinks
              className="font-medium text-xl md:text-3xl flex flex-col items-center justify-center leading-none"
              delay={3.2}
              href="/"
              isWithTextReveal
              title={
                <>
                  <span>MARCOS</span>
                  <span>MORUA</span>
                </>
              }
            />
          </div>

          <div className="h-full flex flex-row items-center justify-center gap-12">
            <div className="hidden md:block">
              <TextReveal delay={3.2}>
                <h2 className="uppercase flex flex-col items-center text-center justify-center text-2xl leading-6">
                  Trabajando
                  <span className="text-gray">Desde 2024</span>
                </h2>
              </TextReveal>
            </div>

            <ScrollButton
              className="cursor-pointer h-full text-lg md:text-xl font-medium bg-foreground text-background px-5 md:px-8 flex flex-col items-center justify-center"
              sectionId="#contact"
              delay={3.2}
              title="Hablemos"
            />
          </div>
        </nav>
      </header>
      <NavMenu
        handleActiveMouseEnter={handleActiveMouseEnter}
        handleActiveMouseLeave={handleActiveMouseLeave}
        openMenu={openMenu}
        toggleMenu={toggleMenu}
      />
    </>
  );
};

export default Navbar;
