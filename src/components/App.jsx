import { Route, Routes } from "react-router-dom";

import Header from "./Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/movies" element={<div>Movies</div>} />
          {/* <Route path="/movies/:movieId" element={<MovieDetails />} /> */}
      </Routes>
    </>
  );
};

export default App;

