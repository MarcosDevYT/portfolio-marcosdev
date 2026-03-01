import { Copy } from "@/components/animate-components/Copy";

interface MissionSectionProps {
  text?: string;
  blockColor?: string;
}

export const MissionSection = ({
  text = "",
  blockColor = "#fff",
}: MissionSectionProps) => {
  return (
    <section className="relative w-full shrink-0 h-svh flex justify-center items-center overflow-hidden py-24 px-8">
      <Copy
        text={text}
        blockColor={blockColor}
        className="uppercase font-medium leading-none tracking-[-0.1rem] text-[3rem] text-center w-full lg:text-[5rem] lg:w-[80%] 2xl:text-[6rem] 2xl:w-[88%]"
      />
    </section>
  );
};
