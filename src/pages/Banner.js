import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import bannerImg from "../banner.png";

export const Banner = () => {
  return (
    <div className=" flex lg:flex-row flex-col items-center  my-10 gap-10 md:mx-28">
      <div className=" px-4 max-w-3xl md:mt-20 order-2  lg:order-1">
        <h1 className=" text-xl md:text-7xl">Collections</h1>
        <h3 className="text-xl md:text-3xl leading-10 my-10 max-w capitalize">
          you can explore ans shop many differnt collection from various barands
          here.
        </h3>
        <button className=" bg-slate-800 text-white text-xl md:text-3xl py-5 px-7 flex gap-4 align-middle">
          <FaShoppingBag />
          Shop Now
        </button>
      </div>
      <div className=" order-1 lg:order-2">
        <img src={bannerImg} className="w-auto" alt="" />
      </div>
    </div>
  );
};
