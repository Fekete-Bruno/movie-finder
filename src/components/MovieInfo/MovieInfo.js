import { Button, Card, RatingIndicator } from "@ui5/webcomponents-react";
import { useSelector } from "react-redux";
import "@ui5/webcomponents-icons/dist/heart.js";
import "@ui5/webcomponents-icons/dist/heart-2.js";
import { movieInfo } from "../../features/movies/moviesById";
import "./MovieInfo.scss";
import { useState } from "react";

function MovieInfo() {
  const movie = useSelector(movieInfo);
  const [favorite, setFavorite] = useState(false);
  return (
    <div>
      {movie.Response === "True" ? (
        <Card>
          <div className="InfoWrapper">
            <img alt={movie.Title} src={movie.Poster} />
            <div className="DetailsWrapper">
              <h1>{movie.Title}</h1>
              <p>{movie.Plot}</p>
              <h2>Actors</h2>
              <p>{movie.Actors}</p>
              <h2>Reviews</h2>
              <RatingIndicator max={10} value={Number(movie.Review)} />
              <div>
                <Button
                  icon={favorite ? "heart" : "heart-2"}
                  design="Negative"
                  onClick={() => setFavorite(!favorite)}
                >
                  Favorite
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ) : (
        <></>
      )}
    </div>
  );
}

export default MovieInfo;
