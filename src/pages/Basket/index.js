import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  selBasketList,
} from "shared/store/slice/basketSlice";
import { BsTrash3Fill } from "react-icons/bs";
const Basket = () => {
  const basketList = useSelector(selBasketList);
  const totalPrice = basketList.reduce((sum, acc) => {
    return (sum += acc.price * acc.quantity);
  }, 0);
  const dispatch = useDispatch();
  const handleDelete = (basketItem) => {
    dispatch(removeFromBasket(basketItem));
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {basketList.length === 0 ? (
        <div
          className=" text-center relative py-3 pl-4 pr-10 leading-normal text-red-700 bg-red-100 rounded-lg"
          role="alert"
        >
          <p> Your Basket is empty</p>
          <span className="absolute inset-y-0 right-0 flex items-center mr-4">
            <svg
              className="w-4 h-4 fill-current"
              role="button"
              viewBox="0 0 20 20"
            >
              <path
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
      ) : (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Basket
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                total price : ${totalPrice}
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                &nbsp;
              </th>
            </tr>
          </thead>
          <tbody>
            {basketList?.map((item) => {
              const { name, id, created_at, price, image, quantity } = item;
              return (
                <tr
                  key={id}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    <img className="w-1/6" src={image} alt="" />
                  </th>

                  <td className="px-6 py-4">{name}</td>
                  <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    {price}
                  </td>
                  <td className="px-6 py-4">{quantity}</td>
                  <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    ${price * quantity}
                  </td>
                  <td className="text-center items-center flex justify-center mt-3 ">
                    <div
                      onClick={() => handleDelete(item)}
                      className=" flex justify-center bg-red-500 text-white p-3 w-1/2 rounded-full cursor-pointer"
                    >
                      <BsTrash3Fill />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Basket;
