import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  info: {},
  status: "idle",
  error: null,
};

export const fetchId = createAsyncThunk("movies/fetchId", async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/movies/${id}`
  );
  return response.data;
});

export const movieId = createSlice({
  name: "movieId",
  initialState,
  reducers: {
    eraseInfo(state) {
      state.info = {};
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchId.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.info = action.payload;
      });
  },
});

export const { eraseInfo } = movieId.actions;

export const movieInfo = (state) => state.movieId.info;

export default movieId.reducer;
