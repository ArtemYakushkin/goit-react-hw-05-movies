import { Route, Routes } from "react-router-dom";

import Header from "./Header/Header";
import Home from "pages/Home/Home";
import MovieDetails from "pages/MovieDetails/MovieDetails";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<div>Movies</div>} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </>
  );
};

export default App;

