import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouriteCourses: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFavourite(state, action) {
      const isExistInFavouriteCoursesList = state.favouriteCourses.some(
        (id) => action.payload === id
      );
      if (!isExistInFavouriteCoursesList) {
        state.favouriteCourses.push(action.payload);
      }
    },
    removeFromFavourite(state, action) {
      state.favouriteCourses = state.favouriteCourses.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const { addToFavourite, removeFromFavourite } = favouriteSlice.actions;

export default favouriteSlice;
