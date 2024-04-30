import React from "react";
import LogoImage from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <img
      className="cursor-pointer 2xl:w-72 2xl:h-16"
      src={LogoImage}
      alt="Builder Pay"
    />
  );
};

export default Logo;
