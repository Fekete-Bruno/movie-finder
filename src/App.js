import { useSelector } from "react-redux";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";
import SearchBox from "./components/SearchBox/SearchBox";
import { movieList } from "./features/movies/moviesSlice";

function App() {
  const list = useSelector(movieList);
  console.log(list);
  return (
    <div className="Wrapper">
      <Header />
      <SearchBox />
      <MoviesList />
      <Footer />
    </div>
  );
}

export default App;
