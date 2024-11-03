import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouriteCourses: [],
  favouriteCoursesIds: [],
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
        state?.favouriteCourses?.push(action.payload);
        state?.favouriteCoursesIds?.push(action.payload);
      }
    },
    setFavouriteCourses(state, action) {
      state.favouriteCoursesIds = action.payload;
    },
    removeFromFavourite(state, action) {
      state.favouriteCourses = state.favouriteCourses.filter(
        (id) => id !== action.payload
      );
      state.favouriteCoursesIds = state.favouriteCoursesIds.filter(
        (id) => id !== action.payload
      );
    },
    clearFavouriteCourseList(state, action) {
      state.favouriteCourses = [];
    },
  },
});

export const {
  addToFavourite,
  removeFromFavourite,
  clearFavouriteCourseList,
  setFavouriteCourses,
} = favouriteSlice.actions;

export default favouriteSlice;
