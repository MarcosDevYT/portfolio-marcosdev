import React from "react";

const Container = ({
  children,
  blackBg,
  className,
  id,
}: {
  id?: string;
  children: React.ReactNode;
  blackBg?: boolean;
  className?: string;
}) => {
  return (
    <section
      id={id}
      className={`w-full flex items-center justify-center py-32 px-6 md:px-8 lg:px-10 2xl:px-12 text-center max-w-[1768px] mx-auto ${className}`}
      data-bgcolor={blackBg ? "#070707" : "#ffffff"}
      data-textcolor={blackBg ? "#ffffff" : "#070707"}
    >
      {children}
    </section>
  );
};

export default Container;
