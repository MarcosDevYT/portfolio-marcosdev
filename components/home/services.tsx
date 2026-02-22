import Container from "../layout/Container";
import { TextReveal } from "../animate-components/ContainerReveal";
import { servicios } from "@/lib/constans/data";
import { ServiceCard } from "../ServiceCard";

export const ServiceSection = () => {
  return (
    <Container className="flex-col gap-16">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 w-full">
        <TextReveal>
          <h2 className="md:text-start text-5xl lg:text-6xl xl:text-8xl font-medium grid">
            <span>MIS</span>
            <span>SERVICIOS</span>
          </h2>
        </TextReveal>

        <TextReveal>
          <p className="md:text-start md:text-lg text-gray w-full md:w-[55%] xl:w-[45%] 2xl:w-[40%]">
            Ofrezco soluciones web personalizadas, desde páginas informativas
            hasta aplicaciones complejas. Me especializo en tecnologías modernas
            y me aseguro de que cada proyecto sea escalable, seguro y optimizado
            para ofrecer la mejor experiencia al usuario.
          </p>
        </TextReveal>
      </div>

      <article>
        {servicios.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </article>
    </Container>
  );
};
