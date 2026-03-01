"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

import { X } from "lucide-react";
import { menuItems, socialLinks } from "@/lib/constans/const";
import MenuToggle from "../MenuToggle";
import LinksAnimation from "../animate-components/LinksAnimation";
import { ScrollButton } from "../animate-components/ScrollButton";
import RevealText from "../animate-components/RevealText";

const NavMenu = ({
  openMenu,
  toggleMenu,
  handleActiveMouseEnter,
  handleActiveMouseLeave,
}: {
  openMenu: boolean;
  toggleMenu: () => void;
  handleActiveMouseEnter: () => void;
  handleActiveMouseLeave: () => void;
}) => {
  const [showContainer, setShowContainer] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    if (openMenu) {
      setShowContainer(true);
      setTimeout(() => {
        setShowLinks(true);
      }, 300);
    } else {
      setShowLinks(false);
      setTimeout(() => {
        setShowContainer(false);
      }, 1000);
    }
  }, [openMenu]);

  const handleClose = () => {
    setShowLinks(false);
    setTimeout(() => {
      toggleMenu();
    }, 200);
  };

  return (
    <div
      className={`fixed z-20 ${
        showContainer ? "top-0" : "top-[-150%]"
      } left-0 h-screen w-full bg-neutral-950 transition-all duration-800 ease-[cubic-bezier(0.76, 0, 0.24, 1)]`}
    >
      <nav className="w-full shadow-md">
        <div className="font-satoshi-variable relative px-6 md:px-8 lg:px-12 2xl:px-16 flex justify-between items-center w-full h-20 py-4">
          <MenuToggle button={handleClose} icon={<X size={36} />} />

          <Link
            onMouseEnter={handleActiveMouseEnter}
            onMouseLeave={handleActiveMouseLeave}
            onClick={handleClose}
            className="absolute top-1/2 left-1/2 -translate-1/2"
            href={"/"}
          >
            <h2 className="font-medium text-xl md:text-3xl flex flex-col items-center justify-center leading-none">
              <span>MARCOS</span>
              <span>MORUA</span>
            </h2>
          </Link>

          <div className="h-full flex flex-row items-center justify-center gap-12">
            <div className="hidden md:block">
              <h2 className="uppercase flex flex-col items-center text-center justify-center text-2xl leading-6">
                Trabajando
                <span className="text-gray">Desde 2024</span>
              </h2>
            </div>

            <ScrollButton
              className="cursor-pointer h-full text-lg md:text-xl font-medium bg-foreground text-background px-5 md:px-8 flex flex-col items-center justify-center"
              sectionId="#contact"
              delay={2.1}
              title="Hablemos"
            />
          </div>
        </div>
      </nav>

      <div className="pt-6 px-6 md:px-8 lg:px-12 2xl:px-16 flex flex-col gap-10 lg:flex-row lg:items-end">
        <ul className="flex-1 w-full flex flex-col gap-1 xl:gap-2">
          {menuItems.map((item, index) => (
            <LinksAnimation
              link={item.link}
              key={index}
              open={showLinks}
              text={item.text}
              delay={index * 100}
              onClick={handleClose}
              className={
                "uppercase font-light tracking-tighter text-6xl h-16 lg:text-8xl xl:text-[6.5rem] leading-none lg:h-26"
              }
              handleActiveMouseEnter={handleActiveMouseEnter}
              handleActiveMouseLeave={handleActiveMouseLeave}
            />
          ))}
        </ul>

        <ul className="w-46 lg:w-80 flex flex-col gap-2 lg:pb-3 xl:pb-2">
          <h2 className="mb-2 text-4xl h-11 lg:text-6xl lg:h-17 uppercase leading-none font-satoshi font-light overflow-hidden relative ">
            <span
              className={`w-max cursor-pointer border-b-4 border-white pb-1 absolute transition-all ease-[cubic-bezier(0.76,0,0.24,1)] duration-900 ${
                showLinks ? "translate-y-0" : "translate-y-[130px]"
              }`}
            >
              Mis Redes
            </span>
          </h2>

          {socialLinks.map((item, index) => (
            <LinksAnimation
              key={index}
              link={item.href}
              open={showLinks}
              text={item.title}
              onClick={handleClose}
              delay={index * 100}
              className={
                "font-light tracking-tighter text-3xl h-9 lg:text-5xl lg:h-13 leading-none"
              }
              handleActiveMouseEnter={handleActiveMouseEnter}
              handleActiveMouseLeave={handleActiveMouseLeave}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
