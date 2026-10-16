import { configureStore } from "@reduxjs/toolkit";
import userServerSlice from "../slices/userServerSlice";

const store = configureStore({
  reducer: {
    userServer: userServerSlice,
  },
});

export default store;
