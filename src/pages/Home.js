import React from "react";
import { Banner } from "./Banner";
import { Category } from "./Category";
import { Products } from "./Products";
import Collections from "./Collections";
import BestSeller from "./Best-seller";
import Newsletter from "./Newsletter";

export const Home = ({ setCart, cart }) => {
  return (
    <div>
      <Banner />
      <Category />
      <Products setCart={setCart} cart={cart} />
      <Collections />
      <BestSeller />
      <Newsletter />
    </div>
  );
};
