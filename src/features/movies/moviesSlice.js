import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
  status: "idle",
  error: null,
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (search) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/api/movies/?search=${search}`
    );
    return response.data;
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      });
  },
});

export const movieList = (state) => state.movies.list;

export default moviesSlice.reducer;
