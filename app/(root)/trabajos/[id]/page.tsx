import { WorkPage } from "@/components/layout/work-id/workpage";
import { ListaDeTrabajos } from "@/lib/constans/works";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, projectJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return ListaDeTrabajos.map((trabajo) => ({ id: String(trabajo.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const trabajo = ListaDeTrabajos.find((t) => t.id === Number(id));

  if (!trabajo) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: trabajo.title,
    description: trabajo.description,
    alternates: {
      canonical: `/trabajos/${trabajo.id}`,
    },
    openGraph: {
      title: `${trabajo.title} | Marcos Morua`,
      description: trabajo.description,
      images: [
        {
          url: trabajo.mainImage,
          alt: trabajo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: trabajo.title,
      description: trabajo.description,
      images: [trabajo.mainImage],
    },
  };
}

export default async function TrabajoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const trabajo = ListaDeTrabajos.find((t) => t.id === Number(id));

  if (!trabajo) {
    notFound();
  }

  return (
    <>
      <JsonLd data={projectJsonLd(trabajo)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", url: "/" },
          { name: "Trabajos", url: "/trabajos" },
          { name: trabajo.title, url: `/trabajos/${trabajo.id}` },
        ])}
      />
      <WorkPage trabajo={trabajo} />
    </>
  );
}
