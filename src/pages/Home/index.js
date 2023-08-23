import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBasket} from "shared/store/slice/basketSlice";
import {
  allProductsAsync,
  selProductList,
} from "shared/store/slice/productSlice";
const Home = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const productList = useSelector(selProductList);
  useEffect(() => {
    dispatch(allProductsAsync());
  }, []);
const handleAddBasket=(productItem)=>{
dispatch(addBasket(productItem));
navigate("/basket")
}
  return (
    <div className="flex  gap-3 p-4">
      {productList?.map((product) => {
        const { name, id, created_at, price, image, desc } = product;
        return (
          <div
            key={id}
            className="w-1/3 text-center rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
          >
            <div className="img p-3 flex justify-center">
              <img src={image} alt="" />
            </div>
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
              {name}
            </h5>
            <p className="mb-4 text-base text-neutral-600 ">{desc}</p>
            <p className="text-green-500 ">${price}</p>
            <button
              onClick={() => handleAddBasket(product)}
              className="bg-green-500  p-3 rounded text-white mt-3 hover:bg-red-700"
            >
              Add basket
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
