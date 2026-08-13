import { AboutHero } from "@/components/layout/about/AboutHero";
import { EducationSection } from "@/components/layout/about/EducationSection";
import { FocusSection } from "@/components/layout/about/FocusSection";
import { FAQSection } from "@/components/layout/about/FAQSection";
import { MissionSection } from "@/components/layout/home/mission";
import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sobre Mí",
  description:
    "Conoce a Marcos Adrián Morua Pino (Marcos Morua), Desarrollador Full Stack con formación técnica y académica. Especializado en el ecosistema JavaScript moderno, arquitectura limpia y soluciones escalables.",
  alternates: {
    canonical: "/sobre-mi",
  },
};

export const dynamic = "force-static";

export default function SobreMiPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", url: "/" },
          { name: "Sobre mí", url: "/sobre-mi" },
        ])}
      />

      <div className="min-h-screen w-full flex flex-col items-center text-foreground">
        <AboutHero />
        <EducationSection />
        <MissionSection
          text="CONSTRUYO SOLUCIONES ESCALABLES CON ARQUITECTURA LIMPIA. PRIORIZO EL
            RENDIMIENTO Y LA EXPERIENCIA UX."
        />
        <FocusSection />
        <FAQSection />
      </div>
    </>
  );
}
