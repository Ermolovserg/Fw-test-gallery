import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import searchReducer from "./searchSlice";
import galleryReducer from "./gallereySlice/gallerySlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    gallery: galleryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
