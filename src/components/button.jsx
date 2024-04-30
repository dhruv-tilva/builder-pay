import React from "react";

export const Button = (props) => {
  return (
    <button
      className={`${props.className} bg-primary-600 py-3 px-6 text-white font-medium font-roboto text-sm lg:text-base 2xl:text-xl transition-all duration-200 hover:bg-primary-800 font-medium rounded-lg`}
    >
      {props.children}
    </button>
  );
};
