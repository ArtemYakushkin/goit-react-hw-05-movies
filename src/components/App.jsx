import { Route, Routes } from "react-router-dom";

import Header from "./Header/Header";
import Home from "pages/Home/Home";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import Movies from "pages/Movies/Movies";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
      </Routes>
    </>
  );
};

export default App;

