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
        <h2 className="w-full text-7xl italic font-light flex flex-col md:flex-row items-center gap-6 justify-between">
          <ContainerReveal>
            <span>{title}</span>
          </ContainerReveal>

          <ContainerReveal>
            <span>{secondTitle}</span>
          </ContainerReveal>
        </h2>
      ) : (
        <ContainerReveal>
          <h2 className="w-full text-7xl italic text-center font-light">
            {title}
          </h2>
        </ContainerReveal>
      )}
    </>
  );
};
