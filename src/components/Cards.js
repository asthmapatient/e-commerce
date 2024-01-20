import React from "react";

export const Cards = (props) => {
  function addToCart() {
    props.setCart((prevCart) => prevCart + 1);
  }

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 items-center justify-center">
      {props.filteredProducts && props.filteredProducts.length > 0 ? (
        props.filteredProducts.slice(0, 8).map((item) => {
          return (
            <div key={item.id} className="">
              <img
                src={item.image}
                className="hover:scale-105 transition-all delay-100"
                alt=""
              />
              <h5 className="my-3">{item.title}</h5>
              <div className="flex justify-between items-center">
                <span className=" text-gray-400 flex gap-6">
                  {item.category} <h5>$ {item.price} </h5>
                </span>
                <button
                  className=" border bg-amber-300 rounded-xl p-2"
                  onClick={addToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p>No Products available</p>
      )}
    </div>
  );
};
