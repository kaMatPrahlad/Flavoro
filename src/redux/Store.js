import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CategorySlice from "./CategorySlice";
import SearchSlice from "./slices/SearchSlice";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    //    product: ProductSlice,
    category: CategorySlice,

    search: SearchSlice,
  },
});

export default Store;
