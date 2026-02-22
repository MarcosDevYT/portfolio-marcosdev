import RevealText from "@/components/animate-components/RevealText";
import { PageRevealer } from "@/components/animate-components/PageRevealer";

export default function TrabajosPage() {
  return (
    <>
      <PageRevealer />

      <div
        className="min-h-screen w-full flex flex-col items-center justify-center"
        data-bgcolor="#ffffff"
        data-textcolor="#070707"
      >
        Hola desde Trabajos
        <RevealText to="/" text="Inicio" />
        <RevealText to="/sobre-mi" text="Sobre mí" />
      </div>
    </>
  );
}
