import { ListaDeTrabajos } from "@/lib/constans/works";
import { notFound } from "next/navigation";

import { WorkPage } from "@/components/layout/work-id/workpage";

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
      <WorkPage trabajo={trabajo} />
    </>
  );
}
