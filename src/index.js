import ReactDOM from "react-dom/client";
import "./reset.scss";
import "./index.scss";
import App from "./App";
import { ThemeProvider } from "@ui5/webcomponents-react/";
import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);
