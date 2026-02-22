import React from "react";

const Container = ({
  children,
  className,
  id,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      id={id}
      className={`w-full flex items-center justify-center py-24 px-4 md:px-8 lg:px-12 2xl:px-16 text-center ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
