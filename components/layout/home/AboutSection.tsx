import { TitleSection } from "@/components/TitleSection";
import Container from "../Container";
import Image from "next/image";
import { AboutMe } from "@/constants/data";

export const AboutSection = () => {
  return (
    <Container className="flex-col gap-24">
      <TitleSection title="Sobre mi" />

      <div className="flex flex-col lg:flex-row gap-24 justify-center items-center lg:items-start h-full lg:h-[600px]">
        <figure className="relative w-[300px] h-[400px] lg:w-1/2 lg:h-[525px]">
          <Image
            src={"/gsap.svg"}
            alt="Imagen de MarcosDev"
            fill
            objectFit="cover"
          />
        </figure>

        <article className="lg:text-left w-full lg:w-1/2 h-full flex flex-col place-items-center items-center justify-center">
          <h2 className="font-bold text-4xl mb-6 w-full">{AboutMe.title}</h2>

          {AboutMe.description.map((d, i) => (
            <p className="mb-4 font-medium text-xl" key={i}>
              {d}
            </p>
          ))}
        </article>
      </div>
    </Container>
  );
};
