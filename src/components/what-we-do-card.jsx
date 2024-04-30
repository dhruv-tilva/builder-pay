import React from "react";
import Paragraph from "./paragraph";

const WhatWeDoCard = ({ url, title, description }) => {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="w-10 h-10 md:w-14 md:h-14 xl:h-20 xl:w-20 bg-white rounded-xl flex items-center justify-center">
        <img
          src={url}
          alt={title}
          className="w-6 h-6 md:w-9 md:h-9 xl:w-14 xl:h-14"
        />
      </div>
      <h5 className="text-sm mt-7 mb-3 md:text-base lg:text-lg xl:text-xl font-poppins font-semibold text-white">
        {title}
      </h5>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default WhatWeDoCard;
