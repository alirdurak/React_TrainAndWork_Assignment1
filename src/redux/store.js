import { configureStore } from "@reduxjs/toolkit";
import CommerceSlice from "./slices/CommerceSlice";
import UserSlice from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    CommerceSlice,
    UserSlice,
  },
});

export default store;
