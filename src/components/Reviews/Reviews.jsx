import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ListReviews, ItemReviews, NoData } from "./Reviews.styled";
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
                <ListReviews>
                    {movieReviews.map(item => (
                        <ItemReviews key={item.id}>
                            <ReviewsItem reviews={item} />
                        </ItemReviews>
                    ))}
                </ListReviews>
            ) : (
                <NoData>No data</NoData>
            )}
        </div>
    )
};

export default Reviews;