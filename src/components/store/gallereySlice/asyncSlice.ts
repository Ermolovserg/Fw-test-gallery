import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  PaintingQueryParams,
  FetchPaintingsResponse,
  Author,
  Location,
  Painting,
} from "./types";

export const fetchPaintings = createAsyncThunk<
  FetchPaintingsResponse,
  PaintingQueryParams
>("gallery/fetchPaintings", async ({ q, page, limit }) => {
  const queryParam = q.trim() ? `&q=${q}` : "";
  const response = await axios.get(
    `https://test-front.framework.team/paintings?_page=${page}&_limit=${limit}${queryParam}`,
  );

  const totalCount = response.headers["x-total-count"];
  return {
    paintings: response.data.map((painting: Painting) => ({
      ...painting,
      imageUrl: `https://test-front.framework.team${painting.imageUrl}`,
    })),
    totalCount: totalCount ? parseInt(totalCount, 10) : 0,
  };
});

export const fetchAuthors = createAsyncThunk<Author[]>(
  "gallery/fetchAuthors",
  async () => {
    const response = await axios.get<Author[]>(
      "https://test-front.framework.team/authors",
    );
    return response.data;
  },
);

export const fetchLocations = createAsyncThunk<Location[]>(
  "gallery/fetchLocations",
  async () => {
    const response = await axios.get<Location[]>(
      "https://test-front.framework.team/locations",
    );
    return response.data;
  },
);
