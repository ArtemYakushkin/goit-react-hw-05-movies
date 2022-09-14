import { NavLink, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { List, Image, MovieTitle, Item } from "./MoviesList.styled";

import { IMAGE_URL } from "services/movieApi";
import defaultImage from "../../images/default-image.jpg";

const NavItem = styled(NavLink)`
    text-decoration: none;
`;

const MoviesList = ({ movies }) => {

    const location = useLocation();

    return (
        <List>
            {movies.map(movie => {
                const { id, title, poster_path } = movie;
                const fullImgUrl = `${IMAGE_URL}${poster_path}`;
                const imageUrl = poster_path ? fullImgUrl : defaultImage;
                return (
                    <Item key={id}>
                        <NavItem to={`/movies/${id}`} state={{ from: location }}>
                            <Image src={imageUrl} alt={title} />
                            <MovieTitle>{title}</MovieTitle>
                        </NavItem>
                    </Item>
                )
            })}
        </List>
    );
};

export default MoviesList;

MoviesList.propTypes = {
    movies: PropTypes.array,
};