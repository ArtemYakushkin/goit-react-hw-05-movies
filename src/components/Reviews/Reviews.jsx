import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import movieApi from "services/movieApi";
import ReviewsItem from "components/ReviewsItem/ReviewsItem";

const Reviews = () => {

    const [movieReviews, setMovieReviews] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        movieApi.getReviews(movieId).then(data => setMovieReviews(data.results))
    }, [movieId]);

    return (
        <div>
            {movieReviews && movieReviews.length ? (
                <ul>
                    {movieReviews.map(item => (
                        <li key={item.id}>
                            <ReviewsItem reviews={item} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No data</p>
            )}
        </div>
    )
};

export default Reviews;