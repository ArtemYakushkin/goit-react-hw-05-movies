import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Container } from "./App.styled";

// import MovieDetails from "pages/MovieDetails/MovieDetails";
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";
// import Movies from "pages/Movies/Movies";
// import NotFound from "pages/NotFound/NotFound";
import Header from "./Header/Header";
import Home from "pages/Home/Home";
import Loader from "./Loader/Loader";
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

const App = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
    </Container>
  );
};

export default App;

