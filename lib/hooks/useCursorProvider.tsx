"use client";
import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from "react";

type CursorContextType = {
  isDesapear: boolean;
  isActive: boolean;
  isLink: boolean;
  handleDesapearMouseEnter: () => void;
  handleDesapearMouseLeave: () => void;
  handleActiveMouseEnter: () => void;
  handleActiveMouseLeave: () => void;
  handleLinkMouseEnter: () => void;
  handleLinkMouseLeave: () => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const [isDesapear, setIsDesapear] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isLink, setIsLink] = useState(false);

  const handleActiveMouseEnter = useCallback(() => setIsActive(true), []);
  const handleActiveMouseLeave = useCallback(() => setIsActive(false), []);
  const handleLinkMouseEnter = useCallback(() => setIsLink(true), []);
  const handleLinkMouseLeave = useCallback(() => setIsLink(false), []);
  const handleDesapearMouseEnter = useCallback(() => setIsDesapear(true), []);
  const handleDesapearMouseLeave = useCallback(() => setIsDesapear(false), []);

  // Desactiva los estados activos al cambiar de ruta
  useEffect(() => {
    if (isDesapear || isActive || isLink) {
      setIsDesapear(false);
      setIsActive(false);
      setIsLink(false);
    }
  }, [pathname]);

  return (
    <CursorContext.Provider
      value={{
        isLink,
        isActive,
        isDesapear,
        handleDesapearMouseEnter,
        handleDesapearMouseLeave,
        handleActiveMouseEnter,
        handleActiveMouseLeave,
        handleLinkMouseEnter,
        handleLinkMouseLeave,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}

export function useCursorHover() {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursorHover debe usarse dentro de <CursorProvider>");
  }
  return context;
}
