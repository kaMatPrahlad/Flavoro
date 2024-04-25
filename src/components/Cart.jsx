import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, SetActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);

  //Reduce Method to get total amount and total qty
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.price * item.qty,
    0
  );
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 lg:w-[20vw] bg-white w-full p-5 h-full mb-3  ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="tet-xl font-bold text-gray-600 ">My Order</span>
          <IoMdClose
            onClick={() => SetActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return (
              <ItemCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                qty={item.qty}
              />
            );
          })
        ) : (
          <h1 className="text-center text-xl font-bold text-gray-800  ">
            Your cart is empty!
          </h1>
        )}

        <div className="absolute bottom-0">
          <h1 className="font-semibold text-gray-800">Items :{totalQty} </h1>
          <h1 className="font-semibold text-gray-800">
            Total Amount :{totalPrice}
          </h1>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={() => navigate("/success")}
            className=" bg-green-500  font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5"
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => SetActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl
         p-3 fixed bottom-10 right-4  ${
           totalQty > 0 && "animate-bounce delay-500 transition-all"
         }`}
      />
    </>
  );
};

export default Cart;
