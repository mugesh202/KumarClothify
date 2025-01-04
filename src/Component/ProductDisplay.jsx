import { Star } from "lucide-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppConext";

export default function ProductDisplay({ product }) {
  const {addTocart}=useContext(AppContext)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-20 md:gap-10 px-6 md:px-0">
      <div className="flex md:1/2 gap-4">
        <div className="flex flex-col md:h-[500px] gap-4">
          <img src={product.image} alt="" className="md:h-[163px] w-[100px]" />
          <img src={product.image2} alt="" className="md:h-[163px] w-[100px]" />
          <img src={product.image1} alt="" className="md:h-[163px] w-[100px]" />
          <img src={product.image3} alt="" className="md:h-[163px] w-[100px]" />
        </div>
        <div>
          <img src={product.image} alt="" className="md:h-[580px]" />
        </div>
      </div>
      <div className="flex md:1/2 flex-col mt-8 md:mt-0">
        <h1 className="text-[#3d3d3d] text-4xl font-bold">{product.name}</h1>
        <div className="flex items-center gap-1 text-[#1c1c1c] text-lg mt-4">
          <Star fill="red" />
          <Star fill="red" />
          <Star fill="red" />
          <Star fill="red" />
          <Star fill="gray" />
          <p>(122)</p>
        </div>
        <div className="flex gap-5 font-semibold items-center my-5">
          <div className="text-gray-500 line-through text-2xl">
            ${product.old_price}
          </div>
          <div className="text-red-500 text-3xl">${product.new_price}</div>
        </div>
        <div className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          asperiores autem in repellendus aut aliquam mollitia optio deleniti
          minima architecto doloremque vero, ullam soluta aspernatur distinctio.
          Veritatis rem a quaerat?
        </div>
        <div>
        <h1 className="text-2xl text-gray-400 mt-4 font-semibold">Select Size</h1>
        <div className="flex gap-4 items-center my-4">
          <div className="border bg-gray-100 p-4">S</div>
          <div className="border bg-gray-100 p-4">M</div>
          <div className="border bg-gray-100 p-4">L</div>
          <div className="border bg-gray-100 p-4">XL</div>
          <div className="border bg-gray-100 p-4">XXL</div>
        </div>
        <Link to="/cart">
      <button onClick={()=>addTocart(product.id)} className="bg-red-500 text-white px-6 py-3 my-4 w-max">ADD TO CART</button>
      </Link>
      <p><span className="font-semibold">Category : </span>Women, T-shirt, Crop top</p>
      <p><span className="font-semibold">Tags : </span>Modern, Latest</p>
      </div>
      </div>
      
    </div>
  );
}
