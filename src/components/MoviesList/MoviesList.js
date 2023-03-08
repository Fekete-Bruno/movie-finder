import { List, StandardListItem } from "@ui5/webcomponents-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchId } from "../../features/movies/moviesById";
import { eraseList, movieList } from "../../features/movies/moviesSlice";
import "./MovieList.scss";

function MoviesList() {
  const list = useSelector(movieList);
  const dispatch = useDispatch();
  console.log(list);
  return (
    <List className="ListWrapper">
      {list.length !== 0 ? (
        list.map((movie) => {
          return (
            <StandardListItem
              image={movie.Poster}
              children={movie.Title}
              additionalText={movie.Year}
              key={movie.imdbID}
              onClick={() => {
                dispatch(eraseList());
                dispatch(fetchId(movie.imdbID));
              }}
            />
          );
        })
      ) : (
        <StandardListItem children="No movies found... Try again!" />
      )}
    </List>
  );
}

export default MoviesList;
