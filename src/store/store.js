import { configureStore } from "@reduxjs/toolkit";

import authSlice from "../features/auth/auth-slice";
import favouriteSlice from "../features/course/favorite-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    favourite: favouriteSlice.reducer,
  },
});

export default store;
