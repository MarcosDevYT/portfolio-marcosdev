import { AboutSection } from "@/components/layout/home/about";
import { HeroSection } from "@/components/layout/home/hero";
import { MissionSection } from "@/components/layout/home/mission";
import { ServiceSection } from "@/components/layout/home/services";
import { StackSection } from "@/components/layout/home/stack";
import { WorkSection } from "@/components/layout/home/work";

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
