import { AboutHero } from "@/components/layout/about/AboutHero";
import { EducationSection } from "@/components/layout/about/EducationSection";
import { FocusSection } from "@/components/layout/about/FocusSection";
import { MissionSection } from "@/components/layout/home/mission";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mí",
  description:
    "Conoce a Marcos Morua, Desarrollador Full Stack con formación técnica y académica. Especializado en el ecosistema JavaScript moderno, arquitectura limpia y soluciones escalables.",
};

export default function SobreMiPage() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center text-foreground">
        <AboutHero />
        <EducationSection />
        <MissionSection
          text="CONSTRUYO SOLUCIONES ESCALABLES CON ARQUITECTURA LIMPIA. PRIORIZO EL
            RENDIMIENTO Y LA EXPERIENCIA UX."
        />
        <FocusSection />
      </div>
    </>
  );
}
