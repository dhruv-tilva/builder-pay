import React, { useState, useEffect } from "react";

const NumberAnimation = ({ number, title, unit = "" }) => {
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayNumber((displayNumber) => {
        if (displayNumber < number) {
          return displayNumber + 1;
        } else {
          clearInterval(interval);
          return number;
        }
      });
    }, 1);

    return () => clearInterval(interval);
  }, [number]);

  return (
    <div>
      <h6 className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-white">
        {displayNumber + unit}
      </h6>
      <span className="font-roboto font-normal text-secondary-200 whitespace-nowrap inline-block mt-2 lg:mt-4 text-xs md:text-sm lg:text-base 2xl:text-lg">
        {title}
      </span>
    </div>
  );
};

export default NumberAnimation;
