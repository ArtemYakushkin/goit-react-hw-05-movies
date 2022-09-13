import Form from "components/Form/Form";
import { useEffect } from "react";
import { useState } from "react";
import movieApi from "services/movieApi";
import MoviesList from "components/MoviesList/MoviesList";

const Movies = () => { 

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        if (!query) {
            return;
        };

        movieApi.getSearchMovies(query)
            .then(movies => {
                setMovies(movies);
            }).catch(error => {
                console.log(error.message)});
    
    }, [query]);

    

    const handleSearchSubmit = query => {
        setQuery(query);
        setMovies([]);
    };

    return (
        <header>
            <Form onSubmit={handleSearchSubmit} />
            {movies && <MoviesList movies={movies} />}
        </header>
    )
};

export default Movies;