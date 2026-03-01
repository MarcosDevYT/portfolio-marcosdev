import { TextReveal } from "@/components/animate-components/ContainerReveal";

import { WorkCard } from "@/components/WorkCard";
import { ListaDeTrabajos } from "@/lib/constans/works";
import Container from "@/components/layout/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trabajos Seleccionados",
  description:
    "Explora mis proyectos destacados: desde plataformas SaaS con IA y aplicaciones móviles hasta sistemas de seguros y e-commerce headless.",
};

export const dynamic = "force-static";

export default function TrabajosPage() {
  return (
    <>
      <div
        className="min-h-screen w-full flex flex-col items-center justify-start pt-20"
        data-bgcolor="#ffffff"
        data-textcolor="#070707"
      >
        <Container className="px-4 md:px-4 lg:px-4 xl:px-4 2xl:px-4 flex-col items-start justify-start">
          <TextReveal delay={2.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl uppercase font-black h-10 md:h-12 lg:h-16 2xl:h-20">
              Trabajos Seleccionados
            </h2>
          </TextReveal>

          <article className="p-4 bg-zinc-900 rounded-3xl w-full grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">
            {ListaDeTrabajos.map((trabajo, index) => (
              <div
                key={index}
                className="w-full bg-zinc-950 rounded-3xl p-5 h-[600px] md:h-[650px] flex flex-col"
              >
                <WorkCard
                  id={trabajo.id}
                  title={trabajo.title}
                  description={trabajo.description}
                  tags={trabajo.stack}
                  src={trabajo.mainImage}
                  link={trabajo.link}
                />
              </div>
            ))}
          </article>
        </Container>
      </div>
    </>
  );
}
