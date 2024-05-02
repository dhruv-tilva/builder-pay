import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "../icons";

const FaqCard = ({ title, subTitle, description, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${isOpen ? "open" : ""} accordion-item text-white ${
        !!(id % 2) ? "bg-primary-600" : "bg-ternary"
      }`}
    >
      <div className={`px-4 py-3 accordion-item-header`}>
        <div>
          <span className="font-medium text-xs font-roboto md:text-sm lg:text-base xl:text-lg">
            {title}
          </span>
          <h5 className="font-bold text-base font-roboto md:mt-1 md:text-base lg:text-2xl">
            {subTitle}
          </h5>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-9 h-9 lg:w-12 lg:h-12 rounded-full cursor-pointer flex items-center justify-center text-sm md:text-base lg:text-lg xl:text-2xl font-bold border border-white"
        >
          {isOpen ? (
            <MinusIcon className="w-5 h-5 lg:h-8 lg:w-8" />
          ) : (
            <PlusIcon className="w-5 h-5 lg:h-8 lg:w-8" />
          )}
        </div>
      </div>
      <div className="accordion-item-description-wrapper">
        <div className="accordion-item-description">
          <hr />
          <p className="px-4 py-3 text-xs font-roboto">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
