"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

import { X } from "lucide-react";
import { menuItems } from "@/lib/constans/const";
import MenuToggle from "../MenuToggle";
import LinksAnimation from "../animate-components/LinksAnimation";
import { ScrollButton } from "../animate-components/ScrollButton";

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
      className={`fixed z-10 ${
        showContainer ? "top-0" : "top-[-150%]"
      } left-0 h-screen w-full bg-neutral-950 transition-all duration-800 ease-[cubic-bezier(0.76, 0, 0.24, 1)]`}
    >
      <nav className="w-full shadow-md">
        <div className="font-satoshi-variable relative px-6 md:px-8 lg:px-12 2xl:px-16 flex justify-between items-center w-full h-20 py-4">
          <MenuToggle button={handleClose} icon={<X size={36} />} />

          <Link
            onMouseEnter={handleActiveMouseEnter}
            onMouseLeave={handleActiveMouseLeave}
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
      <ul className="pt-12 px-6 md:px-8 lg:px-12 2xl:px-16 flex flex-col gap-4">
        {menuItems.map((item, index) => (
          <LinksAnimation
            link={item.link}
            key={index}
            open={showLinks}
            text={item.text}
            delay={index * 100}
            onClick={handleClose}
            handleActiveMouseEnter={handleActiveMouseEnter}
            handleActiveMouseLeave={handleActiveMouseLeave}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
