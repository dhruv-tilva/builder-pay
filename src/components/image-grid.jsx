import React from "react";
import Marquee from "react-fast-marquee";
import Centrivity from "@/assets/images/centrivity.png";
import MongoDB from "@/assets/images/mongodb.png";
import Navistar from "@/assets/images/navistar.png";
import Tesconet from "@/assets/images/tesconet.png";

const ImageGrid = () => {
  return (
    <section className="bg-zinc-800">
      <div className="bg-zinc-800 px-4 py-10 lg:py-20 lg:px-8 xl:px-36 gap-8 max-w-screen-2xl mx-auto 2xl:px-0 flex items-center justify-between flex-wrap">
        <img
          src={Centrivity}
          alt="Centrivity"
          className="w-5/12 md:w-1/5 cursor-pointer"
        />
        <img
          src={MongoDB}
          alt="MongoDB"
          className="w-5/12 md:w-1/5 cursor-pointer"
        />
        <img
          src={Navistar}
          alt="Navistar"
          className="w-5/12 md:w-1/5 cursor-pointer"
        />
        <img
          src={Tesconet}
          alt="Tesconet"
          className="w-5/12 md:w-1/5 cursor-pointer"
        />
      </div>
    </section>
  );
};

export default ImageGrid;
