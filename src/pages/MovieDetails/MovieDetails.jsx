import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import movieApi from "services/movieApi";
import { IMAGE_URL } from "services/movieApi";
import defaultImage from "../../images/default-image.jpg"

const MovieDetails = () => {

    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();

    useEffect(() => {
        movieApi.getMovie(movieId).then(movie => setMovie(movie))
    }, [movieId]);

    if (!movie) {
        return null;
    }

    const { title, vote_average, overview, genres, poster_path } = movie;
    const fullImgUrl = `${IMAGE_URL}${poster_path}`;
    const imageUrl = poster_path ? fullImgUrl : defaultImage;
    const genresMovie = genres.map(item => item.name).join(' ');

    return (
        <>
            <Link to={location?.state?.from ?? '/'}>
                <button type="button">GO BACK</button>
            </Link>
            <div>
                <img src={imageUrl} alt={title} />
                <div>
                    <h2>{title}</h2>
                    <p>User Score: {Math.round(vote_average * 10)}%</p>
                    <p>{overview}</p>
                    <p>{genresMovie}</p>
                </div>
            </div>
            <ul>
                <li>
                    <Link to="cast" state={location.state}>Cast</Link>
                </li>
                <li>
                    <Link to="reviews" state={location.state}>Reviews</Link>
                </li>
            </ul>
            <Outlet/>
        </>
    )
};

export default MovieDetails;