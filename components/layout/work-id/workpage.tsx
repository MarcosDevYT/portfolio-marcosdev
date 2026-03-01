import Container from "@/components/layout/Container";
import {
  ContainerReveal,
  TextReveal,
} from "@/components/animate-components/ContainerReveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ImageGallery } from "./ImageGallery";

interface WorkPageProps {
  id: number;
  title: string;
  description: string;
  stack: string[];
  fecha: string;
  fechaCompleta: string;
  mainImage: string;
  images: string[];
  link: string;
  markdown: string;
}

export const WorkPage = ({ trabajo }: { trabajo: WorkPageProps }) => {
  return (
    <Container className="container mx-auto flex-col items-start justify-start w-full">
      {/* Hero Section */}
      <div className="w-full flex flex-col gap-6 md:gap-10 my-24">
        <TextReveal delay={2.1}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[7rem] tracking-tighter leading-none font-satoshi font-black uppercase text-white">
            {trabajo.title}
          </h1>
        </TextReveal>

        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-8 border-t border-zinc-800 pt-8 mt-4">
          <div className="flex flex-col items-start text-start max-w-5xl">
            <TextReveal delay={2.1}>
              <p className="text-zinc-400 text-lg md:text-xl">
                {trabajo.description}
              </p>
            </TextReveal>
            <TextReveal delay={2.1}>
              <p className="text-zinc-500 font-mono mt-2 flex items-center gap-2">
                <span className="text-indigo-500">✦</span>
                {trabajo.fechaCompleta}
              </p>
            </TextReveal>
          </div>

          <ContainerReveal delay={2.1}>
            <Link
              href={trabajo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-white text-black px-6 py-4 rounded-full font-medium hover:bg-zinc-200 transition-colors shrink-0"
            >
              Visitar Proyecto
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </ContainerReveal>
        </div>
      </div>

      {/* Stack Tags */}
      <div className="w-full flex flex-wrap gap-2">
        {trabajo.stack.map((tech, index) => (
          <span
            key={index}
            className="px-4 py-2 rounded-full border border-zinc-800 text-zinc-300 text-sm whitespace-nowrap bg-zinc-900/50"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Interactive Image Gallery */}
      <ImageGallery
        title={trabajo.title}
        images={[trabajo.mainImage, ...(trabajo.images || [])]}
      />

      {/* Markdown Description */}
      <div className="w-full text-start max-w-5xl">
        <ReactMarkdown
          components={{
            h1: ({ node: _, ...props }) => (
              <h1
                className="text-3xl md:text-4xl font-black mt-12 mb-6 text-white uppercase"
                {...props}
              />
            ),
            h2: ({ node: _, ...props }) => (
              <h2
                className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-white"
                {...props}
              />
            ),
            h3: ({ node: _, ...props }) => (
              <h3
                className="text-xl md:text-2xl font-bold mt-8 mb-4 text-zinc-100"
                {...props}
              />
            ),
            p: ({ node: _, ...props }) => (
              <p
                className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-6"
                {...props}
              />
            ),
            ul: ({ node: _, ...props }) => (
              <ul
                className="list-disc pl-6 mb-6 text-zinc-300 space-y-2 text-lg md:text-xl"
                {...props}
              />
            ),
            ol: ({ node: _, ...props }) => (
              <ol
                className="list-decimal pl-6 mb-6 text-zinc-300 space-y-2 text-lg md:text-xl"
                {...props}
              />
            ),
            li: ({ node: _, ...props }) => <li className="pl-2" {...props} />,
            a: ({ node: _, ...props }) => (
              <a
                className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors"
                {...props}
              />
            ),
            strong: ({ node: _, ...props }) => (
              <strong className="font-bold text-white" {...props} />
            ),
          }}
        >
          {trabajo.markdown.replace(/^ +/gm, "")}
        </ReactMarkdown>
      </div>
    </Container>
  );
};
