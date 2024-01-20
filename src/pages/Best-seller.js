import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BestSeller = () => {
  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    fetch("/productsData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const bestSellers = products.filter((item) => item.status === "Best Selers");
  console.log(bestSellers);

  return (
    <div className=" my-20 md:mx-28">
      <h1 className=" text-center xl:text-5xl md:text-3xl text-2xl my-9 ">
        Best Sellers
      </h1>
      <p className="text-black text-center text-xl capitalize md:w-2/3 mx-auto mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu
        nunc, fermentum quis sapien in, placerat scelerisque risus. Class aptent
        taciti sociosqu ad litora torquent per
      </p>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {bestSellers.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                className="hover:scale-105 transition-all delay-100"
                alt=""
              />
              <h5 className="my-3">{item.title}</h5>
              <div className="flex justify-between">
                <span className=" text-gray-400"> {item.category} </span>
                <h5>$ {item.price} </h5>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BestSeller;
