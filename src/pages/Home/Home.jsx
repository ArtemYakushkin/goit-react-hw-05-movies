import { useEffect } from "react";
import { useState } from "react";

import movieApi from "services/movieApi";
import MoviesList from "components/MoviesList/MoviesList";

const Home = () => {

    const [trendMovies, setTrendMovies] = useState(null);

    useEffect(() => { 
        movieApi.getTrendingMovies().then(trendMovies => setTrendMovies(trendMovies))
    }, []);

    return (
        <div>
            <h1>Trending today</h1>
            {trendMovies && <MoviesList movies={trendMovies} />}
        </div>
    )
};

export default Home;