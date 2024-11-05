import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export type Painting = {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
};

export type Author = {
  id: number;
  name: string;
};

export type Location = {
  id: number;
  location: string;
};


export const fetchPaintings = createAsyncThunk<Painting[], string>(
  'gallery',
  async (q) => {
    const response = await axios.get(`https://test-front.framework.team/paintings?q=${q}`);
    return response.data.map((painting: Painting) => ({
      ...painting,
      imageUrl: `https://test-front.framework.team${painting.imageUrl}`,
    }));
  }
);

export const fetchAuthors = createAsyncThunk<Author[]>(
  'gallery/fetchAuthors',
  async () => {
    const response = await axios.get<Author[]>('https://test-front.framework.team/authors');
    return response.data;
  }
);

export const fetchLocations = createAsyncThunk<Location[]>(
  'gallery/fetchLocations',
  async () => {
    const response = await axios.get<Location[]>('https://test-front.framework.team/locations');
    return response.data;
  }
);

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    paintings: [] as Painting[],
    authors: [] as Author[],
    locations: [] as Location[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPaintings.fulfilled, (state, action) => {
      state.paintings = action.payload;
    });
    builder.addCase(fetchAuthors.fulfilled, (state, action) => {
      state.authors = action.payload;
    });
    builder.addCase(fetchLocations.fulfilled, (state, action) => {
      state.locations = action.payload;
    });
  },
});

export default gallerySlice.reducer;
