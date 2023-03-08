import { useSelector } from "react-redux";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import MoviesList from "./components/MoviesList/MoviesList";
import SearchBox from "./components/SearchBox/SearchBox";
import { movieList } from "./features/movies/moviesSlice";

function App() {
  const list = useSelector(movieList);
  console.log(list.length);
  return (
    <div className="Wrapper">
      <Header />
      <SearchBox />
      {list.length !== 0 || !list ? <MoviesList /> : <MovieInfo />}
      <Footer />
    </div>
  );
}

export default App;
