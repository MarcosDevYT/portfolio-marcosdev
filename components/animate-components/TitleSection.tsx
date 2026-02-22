import { TextReveal } from "./ContainerReveal";

export const TitleSection = ({
  title,
  secondTitle,
  className,
  height,
}: {
  title: string;
  secondTitle?: string;
  className?: string;
  height?: string;
}) => {
  return (
    <>
      {secondTitle ? (
        <h2
          className={`w-full font-satoshi flex flex-row items-center gap-6 justify-between ${className}`}
        >
          <TextReveal className={`px-2 ${height}`}>
            <span>{title}</span>
          </TextReveal>

          <TextReveal className={`px-2 ${height}`}>
            <span>{secondTitle}</span>
          </TextReveal>
        </h2>
      ) : (
        <TextReveal
          className={`w-full font-satoshi text-center px-2 ${height} ${className}`}
        >
          <h2>{title}</h2>
        </TextReveal>
      )}
    </>
  );
};
