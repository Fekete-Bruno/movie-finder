import { Icon } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/projector.js";
import "./Header.scss";

function Header() {
  return (
    <div className="Header" onClick={() => window.location.reload()}>
      Movie Finder
      <Icon name="projector" design="Contrast" className="projector" />
    </div>
  );
}

export default Header;
