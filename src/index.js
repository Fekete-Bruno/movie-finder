import ReactDOM from "react-dom/client";
import "./reset.scss";
import "./index.scss";
import App from "./App";
import { ThemeProvider } from "@ui5/webcomponents-react/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
