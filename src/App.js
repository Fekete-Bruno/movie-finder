import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  return (
    <div className="Wrapper">
      <Header />
      <SearchBox />
      <Footer />
    </div>
  );
}

export default App;
