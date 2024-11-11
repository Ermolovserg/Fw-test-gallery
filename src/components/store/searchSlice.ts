import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  inputValue: string;
}

const initialState: SearchState = {
  inputValue: "",
};

const searchSlice = createSlice({
  name: "Painting title",
  initialState,
  reducers: {
    setInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
    clearInputValue(state) {
      state.inputValue = "";
    },
  },
});

export const { setInputValue, clearInputValue } = searchSlice.actions;
export default searchSlice.reducer;
