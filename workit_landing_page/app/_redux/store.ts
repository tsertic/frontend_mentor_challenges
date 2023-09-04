import { configureStore } from "@reduxjs/toolkit";
import { navigationReducer } from "./slices/navigation.slice";
export default configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});
