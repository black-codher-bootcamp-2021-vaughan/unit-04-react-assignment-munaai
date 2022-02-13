import React from "react";
import Product from "./Product";




 const ProductList = (props) => {

    const { products } = props;
    return products.map((product) => (
      <Product
        title={product.trackName}
        
      />
    ));
};

export default ProductList;