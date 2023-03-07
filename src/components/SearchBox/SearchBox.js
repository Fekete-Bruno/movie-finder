import { Button, Input } from "@ui5/webcomponents-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../features/movies/moviesSlice";
import "./SearchBox.scss";

function SearchBox() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const searchParams = text.trim() || "";
  return (
    <div className="SearchBox">
      <Input
        value={text}
        onInput={(e) => setText(e.target.value)}
        onChange={() => dispatch(fetchMovies(searchParams))}
        className="Input"
        placeholder="Type movie name here..."
      ></Input>
      <Button
        onClick={() => dispatch(fetchMovies(searchParams))}
        className="Button"
      >
        Search
      </Button>
    </div>
  );
}

export default SearchBox;
