import React from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import Fooditems from "../components/Fooditems";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CategoryMenu />
      <Fooditems />
      <Cart />
    </div>
  );
};

export default Home;
