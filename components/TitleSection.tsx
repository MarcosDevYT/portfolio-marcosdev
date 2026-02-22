import { ContainerReveal } from "./ContainerReveal";

export const TitleSection = ({
  title,
  secondTitle,
}: {
  title: string;
  secondTitle?: string;
}) => {
  return (
    <>
      {secondTitle ? (
        <h2 className="w-full text-7xl italic font-satoshi font-light flex flex-col md:flex-row items-center gap-6 justify-between">
          <ContainerReveal className="text-7xl h-20 px-2">
            <span>{title}</span>
          </ContainerReveal>

          <ContainerReveal className="text-7xl h-20 px-2">
            <span>{secondTitle}</span>
          </ContainerReveal>
        </h2>
      ) : (
        <ContainerReveal className="w-full font-satoshi text-7xl h-20 italic text-center font-light px-2">
          <h2>{title}</h2>
        </ContainerReveal>
      )}
    </>
  );
};
