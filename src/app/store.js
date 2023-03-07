import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies/moviesSlice";
import movieIdReducer from "../features/movies/moviesById";

export default configureStore({
  reducer: {
    movieId: movieIdReducer,
    movies: moviesReducer,
  },
});
