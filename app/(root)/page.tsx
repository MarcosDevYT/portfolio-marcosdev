import { StackSection } from "@/components/home/stack";
import { HeroSection } from "@/components/home/hero";
import { WorkSection } from "@/components/home/work";
import { ServiceSection } from "@/components/home/services";
import { MissionSection } from "@/components/home/mission";
import { AboutSection } from "@/components/home/about";
import { PageRevealer } from "@/components/animate-components/PageRevealer";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <PageRevealer />

      <HeroSection />
      <MissionSection />
      <AboutSection />
      <WorkSection />
      <ServiceSection />
      <StackSection />
    </>
  );
}
