import { createSlice } from "@reduxjs/toolkit";
import { fetchPaintings, fetchAuthors, fetchLocations } from "./asyncSlice";
import { GalleryState } from "./types";

const initialState: GalleryState = {
  paintings: [],
  authors: [],
  locations: [],
  totalPages: 0,
  currentPage: 1,
  searchQuery: "",
  loading: false,
  error: null,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPaintings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPaintings.fulfilled, (state, action) => {
        state.paintings = action.payload.paintings;
        state.totalPages = Math.ceil(action.payload.totalCount / 6);
        state.loading = false;
      })
      .addCase(fetchPaintings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error";
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        state.authors = action.payload;
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.locations = action.payload;
      });
  },
});

export const { setSearchQuery, setPage } = gallerySlice.actions;

export default gallerySlice.reducer;
