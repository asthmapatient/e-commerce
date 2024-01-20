import React from "react";
import { Cards } from "../components/Cards";

export const Products = ({ setCart, cart }) => {
  const [products, setProducts] = React.useState();
  const [filteredProducts, setFilteredProducts] = React.useState();

  React.useEffect(() => {
    fetch("/productsData.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  // console.log(products);
  const filter = (filterItem) => {
    const filteredItem = products.filter(
      (item) => item.category === filterItem
    );
    setFilteredProducts(filteredItem);
  };

  return (
    <div className=" my-20 md:mx-28">
      <h1 className=" text-center xl:text-5xl md:text-3xl text-2xl my-9 ">
        Products
      </h1>
      <div className="my-4">
        <div className="flex gap-5 flex-wrap">
          <button onClick={() => setFilteredProducts(products)}>
            All Product
          </button>
          <button onClick={() => filter("Dress")}>Dress</button>
          <button onClick={() => filter("Bag")}>Bag</button>
          <button onClick={() => filter("Hoodies")}>Hoodies</button>
          <button onClick={() => filter("Shoe")}>Shoe</button>
          <button onClick={() => filter("Glasses")}>Glasses</button>
        </div>
      </div>
      <div>
        <Cards
          filteredProducts={filteredProducts}
          setCart={setCart}
          cart={cart}
        />
        <div className="flex justify-end mt-5"></div>
      </div>
    </div>
  );
};
