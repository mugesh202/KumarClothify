import React, { useContext, useEffect } from "react";
import { AppContext } from "../Context/AppConext";
import { useParams } from "react-router-dom";
import Brand from "./Brand";
import ProductDisplay from "./ProductDisplay";
import DescriptionBox from "./DescriptionBox";
import NewCollections from "./NewCollections";
export default function SingleProduct() {
  const { all_product } = useContext(AppContext);

  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  console.log(product);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  

  return (
    <div className="max-w-7xl mx-auto mb-32 mt-32">
      <Brand product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <NewCollections/>
    </div>
  );
}
