import RevealText from "./RevealText";

const LinksAnimation = ({
  open,
  text,
  delay,
  onClick,
  link,
  handleActiveMouseEnter,
  handleActiveMouseLeave,
  className,
}: {
  open: boolean;
  text: string;
  delay: number;
  onClick?: () => void;
  link: string;
  handleActiveMouseEnter: () => void;
  handleActiveMouseLeave: () => void;
  className?: string;
}) => {
  return (
    <li className={`font-satoshi overflow-hidden relative ${className}`}>
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
