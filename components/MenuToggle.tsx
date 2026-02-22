import { useCursorHover } from "@/lib/hooks/useCursorProvider";

const MenuToggle = ({
  button,
  icon,
}: {
  button: () => void;
  icon: React.ReactNode;
}) => {
  const { handleActiveMouseEnter, handleActiveMouseLeave } = useCursorHover();

  return (
    <button
      onMouseEnter={handleActiveMouseEnter}
      onMouseLeave={handleActiveMouseLeave}
      className="cursor-pointer"
      onClick={button}
    >
      {icon}
    </button>
  );
};

export default MenuToggle;
