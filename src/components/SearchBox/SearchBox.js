import { Button, Input } from "@ui5/webcomponents-react";
import "./SearchBox.scss";

function SearchBox() {
  return (
    <div className="SearchBox">
      <Input className="Input" placeholder="Type movie name here..."></Input>
      <Button className="Button">Search</Button>
    </div>
  );
}

export default SearchBox;
