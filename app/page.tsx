"use client";

import { MissionSection } from "@/components/layout/home/MissionSection";
import { Revealer } from "@/components/Revealer";
import { StackSection } from "@/components/layout/home/StackSection";
import { ContactSection } from "@/components/layout/home/ContactSection";
import { WorkSection } from "@/components/layout/home/WorkSection";
import { HeroSection } from "@/components/layout/home/HeroSection";
import { AboutSection } from "@/components/layout/home/AboutSection";
import Cursor from "@/components/cursor/Cursor";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Revealer />

      <Cursor />

      <main>
        <HeroSection />

        <MissionSection />

        <AboutSection />

        <WorkSection />

        <StackSection />

        <ContactSection />
      </main>
    </>
  );
}
