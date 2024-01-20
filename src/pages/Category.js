import React from "react";

const companyLogos = [
  { id: 1, img: "img/images/company/brand1.png" },
  { id: 2, img: "img/images/company/brand2.png" },
  { id: 3, img: "img/images/company/brand3.png" },
  { id: 4, img: "img/images/company/brand4.png" },
  { id: 5, img: "img/images/company/brand5.png" },
];

const hover = "hover:scale-105 transition-all delay-100";
export const Category = () => {
  return (
    <>
      <div className=" md:mx-28 flex items-center justify-around flex-wrap gap-4 py-5">
        {companyLogos.map((companyLogo) => (
          <div key={companyLogo.id}>
            <img src={companyLogo.img} alt="" />
          </div>
        ))}
      </div>
      <div className="mt-10 md:mx-28">
        <div className="flex  md:flex-row flex-col justify-center items-center gap-5">
          <div className="">
            <img
              className={hover}
              src="/img/images/category/image1.png"
              alt=""
            />
          </div>
          <div className=" grid grid-cols-2  gap-y-6 gap-x-6">
            <img
              className={hover}
              src="/img/images/category/image2.png"
              alt=""
            />
            <img
              className={hover}
              src="/img/images/category/image3.png"
              alt=""
            />
            <img
              className={hover}
              src="/img/images/category/image4.png"
              alt=""
            />
            <img
              className={hover}
              src="/img/images/category/image5.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
