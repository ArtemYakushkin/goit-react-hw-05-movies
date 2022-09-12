import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

import { IMAGE_URL } from "services/movieApi";
import defaultImage from "../../images/default-image.jpg"

const MoviesList = ({ movies }) => {

    const location = useLocation();

    return (
        <ul>
            {movies.map(movie => {
                const { id, title, poster_path } = movie;
                const fullImgUrl = `${IMAGE_URL}${poster_path}`;
                const imageUrl = poster_path ? fullImgUrl : defaultImage;
                return (
                    <li key={id}>
                        <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
                            <img src={imageUrl} alt={title} />
                            <p>{title}</p>
                        </Link>
                    </li>
                )
            })}
        </ul>
    );
};

export default MoviesList;

MoviesList.propTypes = {
    movies: PropTypes.array,
};