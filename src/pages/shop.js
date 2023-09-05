import React from "react";
import Shopcategories from "../components/shop.js";
import ProductsShop from "../components/productsShop";
const Shop = () => {
 
  return (
    <div className="row">
      {/* <Nav/> */}
      {/* <div className="col-md-3"> */}
          <Shopcategories/>
      {/* </div> */}
      <ProductsShop/>
    </div>
  );
};

export default Shop;
