import React from "react";

const SubTitle = ({ children, className }) => {
  return (
    <h4
      className={`${className} font-poppins font-semibold text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl`}
    >
      {children}
    </h4>
  );
};

export default SubTitle;
