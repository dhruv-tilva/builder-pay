import React from "react";

const Paragraph = ({ children, className }) => {
  return (
    <p
      className={`${className} text-secondary-400 text-xs font-roboto font-normal md:text-sm lg:text-base 2xl:text-lg`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
