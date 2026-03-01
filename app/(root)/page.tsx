import { AboutSection } from "@/components/layout/home/about";
import { HeroSection } from "@/components/layout/home/hero";
import { MissionSection } from "@/components/layout/home/mission";
import { ServiceSection } from "@/components/layout/home/services";
import { StackSection } from "@/components/layout/home/stack";
import { WorkSection } from "@/components/layout/home/work";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marcos Morua | Desarrollador Full Stack & MVP Builder",
  description:
    "Especialista en desarrollo de productos digitales, MVPs y aplicaciones web escalables utilizando Next.js, React y TypeScript. Más de 3 años de experiencia transformando ideas en realidades digitales.",
};

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection text="TRANSFORMANDO LO ESENCIAL EN EXPERIENCIAS DIGITALES ELEGANTES. MENOS RUIDO, MAYOR IMPACTO." />
      <AboutSection />
      <WorkSection />
      <ServiceSection />
      <StackSection />
    </>
  );
}
