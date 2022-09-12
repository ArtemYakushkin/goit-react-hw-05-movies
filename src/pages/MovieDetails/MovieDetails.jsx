import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import movieApi from "services/movieApi";
import { IMAGE_URL } from "services/movieApi";
import defaultImage from "../../images/default-image.jpg"

const MovieDetails = () => {

    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();

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
            {movie && (
                <div>
                    <img src={imageUrl} alt={title} />
                    <div>
                        <h2>{title}</h2>
                        <p>User Score: {vote_average * 10}%</p>
                        <p>{overview}</p>
                        <p>{genresMovie}</p>
                    </div>
                </div>
            )}
        </>
    )
};

export default MovieDetails;