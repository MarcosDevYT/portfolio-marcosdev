import RevealText from "./RevealText";

const LinksAnimation = ({
  open,
  text,
  delay,
  onClick,
  link,
  handleActiveMouseEnter,
  handleActiveMouseLeave,
}: {
  open: boolean;
  text: string;
  delay: number;
  onClick: () => void;
  link: string;
  handleActiveMouseEnter: () => void;
  handleActiveMouseLeave: () => void;
}) => {
  return (
    <li className="font-satoshi uppercase font-light tracking-tighter text-6xl h-16 md:text-8xl xl:text-[7rem] md:h-27 xl:h-30 overflow-hidden relative">
      <span
        onClick={onClick}
        onMouseEnter={handleActiveMouseEnter}
        onMouseLeave={handleActiveMouseLeave}
        style={{ transitionDelay: `${delay}ms` }}
        className={`w-max cursor-pointer absolute transition-all ease-[cubic-bezier(0.76,0,0.24,1)] duration-900 ${
          open ? "translate-y-0" : "translate-y-[130px]"
        }`}
      >
        <RevealText text={text} to={link} delayPerLetter={30} />
      </span>
    </li>
  );
};

export default LinksAnimation;
