import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import movieApi from "services/movieApi";
import Form from "components/Form/Form";
import MoviesList from "components/MoviesList/MoviesList";


const Movies = () => { 

    // const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.get('query') || '');

    useEffect(() => {

        if (!search) {
            return;
        };

        movieApi.getSearchMovies(search)
            .then(movies => {
                setMovies(movies);
            }).catch(error => {
                console.log(error.message)});
    
    }, [search]);

    

    const handleSearchSubmit = (search, query) => {
        setSearch(search);
        setMovies([]);
        setSearchParams({query: search});
    };

    return (
        <header>
            <Form onSubmit={handleSearchSubmit} />
            {movies && <MoviesList movies={movies} />}
        </header>
    )
};

export default Movies;