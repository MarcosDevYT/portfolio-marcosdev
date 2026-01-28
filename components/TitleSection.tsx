import { ContainerReveal } from "./ContainerReveal";

export const TitleSection = ({
  title,
  secondTitle,
}: {
  title: string;
  secondTitle?: string;
}) => {
  return (
    <ContainerReveal>
      {secondTitle ? (
        <div className="min-w-full ">
          <h2 className="text-7xl italic font-light flex flex-row items-center justify-between">
            <span>{title}</span>

            <span>{secondTitle}</span>
          </h2>
        </div>
      ) : (
        <h2 className="w-full text-7xl italic text-center font-light">
          {title}
        </h2>
      )}
    </ContainerReveal>
  );
};
