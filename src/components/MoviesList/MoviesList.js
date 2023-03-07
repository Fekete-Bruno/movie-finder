import { List, StandardListItem } from "@ui5/webcomponents-react";
import { useSelector } from "react-redux";
import { movieList } from "../../features/movies/moviesSlice";
import "./MovieList.scss";

function MoviesList() {
  const list = useSelector(movieList);
  console.log(list);
  return (
    <List className="ListWrapper">
      {list ? (
        list.map((movie) => {
          return (
            <StandardListItem
              image={movie.Poster}
              children={movie.Title}
              additionalText={movie.Year}
              key={movie.imdbID}
              onClick={() => alert(movie.imdbID)}
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
