import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  dark: false,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.dark = action.payload;
    },
  },
});

export const { changeTheme } = navigationSlice.actions;
export const selectNavigationState = (state: {
  navigation: typeof initialState;
}) => state.navigation;
export const navigationReducer = navigationSlice.reducer;
