import Container from "@/components/layout/Container";
import { TextReveal } from "@/components/animate-components/ContainerReveal";
import { faqItems } from "@/lib/constans/data";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/seo";

export const FAQSection = () => {
  return (
    <Container className="flex-col gap-8 py-16 w-full relative z-10 items-start text-left">
      <JsonLd data={faqJsonLd(faqItems)} />

      <TextReveal delay={0}>
        <span className="text-sm uppercase tracking-widest text-violet-400 font-medium font-satoshi">
          Preguntas Frecuentes
        </span>
      </TextReveal>

      <div className="w-full flex flex-col divide-y divide-light-gray/20 border-t border-light-gray/20">
        {faqItems.map((item) => (
          <div key={item.question} className="py-6 flex flex-col gap-2">
            <h3 className="text-lg md:text-xl font-medium text-foreground font-satoshi">
              {item.question}
            </h3>
            <p className="text-gray text-sm md:text-base leading-relaxed font-light">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};
