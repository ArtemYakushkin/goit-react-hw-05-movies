// import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BtnGoBack, DetContainer, ImgContainer, Image, MovieName, Date } from "./MovieDetails.styled";

import movieApi from "services/movieApi";
import { IMAGE_URL } from "services/movieApi";
import defaultImage from "../../images/default-image.jpg"

// const NavItem = styled(NavLink)`
//     cursor: pointer;
// `;

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

    const { title, vote_average, overview, genres, poster_path, release_date } = movie;
    const fullImgUrl = `${IMAGE_URL}${poster_path}`;
    const imageUrl = poster_path ? fullImgUrl : defaultImage;
    const genresMovie = genres.map(item => item.name).join(' ');

    return (
        <>
            <Link to={location?.state?.from ?? '/'}>
                <BtnGoBack type="button">GO BACK</BtnGoBack>
            </Link>
            <DetContainer>
                <ImgContainer>
                    <Image src={imageUrl} alt={title} />
                </ImgContainer>
                <div>
                    <MovieName>{title} <Date>({release_date.slice(0, 4)})</Date></MovieName>
                    <p>User Score: {Math.round(vote_average * 10)}%</p>
                    <p>{overview}</p>
                    <p>{genresMovie}</p>
                </div>
            </DetContainer>
            <ul>
                <li>
                    <NavLink to="cast" state={location.state}>Cast</NavLink>
                </li>
                <li>
                    <NavLink to="reviews" state={location.state}>Reviews</NavLink>
                </li>
            </ul>
            <Outlet/>
        </>
    )
};

export default MovieDetails;