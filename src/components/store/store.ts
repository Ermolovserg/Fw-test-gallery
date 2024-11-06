import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import galleryReducer from "./gallerySlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    gallery: galleryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
