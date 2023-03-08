import { Button, Input } from "@ui5/webcomponents-react";
import { useState } from "react";
import "@ui5/webcomponents-icons/dist/search.js";
import { useDispatch } from "react-redux";
import { eraseInfo } from "../../features/movies/moviesById";
import { fetchMovies } from "../../features/movies/moviesSlice";
import "./SearchBox.scss";

function SearchBox() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const searchParams = text.trim() || "";
  function handleSearch() {
    dispatch(eraseInfo);
    dispatch(fetchMovies(searchParams));
  }
  return (
    <div className="SearchBox">
      <Input
        value={text}
        onInput={(e) => setText(e.target.value)}
        onChange={() => handleSearch()}
        className="Input"
        placeholder="Type movie name here..."
      ></Input>
      <Button icon="search" onClick={() => handleSearch()} className="Button" />
    </div>
  );
}

export default SearchBox;
