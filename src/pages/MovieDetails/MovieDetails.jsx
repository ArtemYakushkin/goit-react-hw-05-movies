import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsListNested } from "react-icons/bs";
import { BtnGoBack, DetContainer, ImgContainer, Image, MovieName, Date, Paragraph, Descr, Overview, AdditionalList, Item } from "./MovieDetails.styled";

import movieApi from "services/movieApi";
import { IMAGE_URL } from "services/movieApi";
import defaultImage from "../../images/default-image.jpg"

const NavItem = styled(NavLink)`
    cursor: pointer;
    text-decoration: none;
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    width: 500px;
    padding: 10px 0;
    margin-bottom: 20px;
    border: 4px solid #ffffff;
    border-radius: 20px;
    background-color: #ff6500;
    text-align: center;
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    &.active {
        border: 4px solid #ff6500;
        background-color: #ffffff;
        color: #ff6500;
    }

    :hover:not(.active),
    :focus-visible:not(.active) {
        border: 4px solid #ff6500;
        background-color: #ffffff;
        color: #ff6500;
    }
`;

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
                <BtnGoBack type="button">
                    <AiOutlineArrowLeft size={28}/>
                </BtnGoBack>
            </Link>
            <DetContainer>
                <ImgContainer>
                    <Image src={imageUrl} alt={title} />
                </ImgContainer>
                <div>
                    <MovieName>{title} <Date>({release_date.slice(0, 4)})</Date></MovieName>
                    <Paragraph>User Score: <Descr>{Math.round(vote_average * 10)}%</Descr></Paragraph>
                    <Overview>{overview}</Overview>
                    <Paragraph>Genres: <Descr>{genresMovie}</Descr></Paragraph>
                </div>
            </DetContainer>
            <AdditionalList>
                <Item>
                    <NavItem to="cast" state={location.state}>
                        <BiUser size={20}/>
                        CAST
                    </NavItem>
                </Item>
                <Item>
                    <NavItem to="reviews" state={location.state}>
                        <BsListNested size={20}/>
                        REVIEWS
                    </NavItem>
                </Item>
            </AdditionalList>
            <Outlet/>
        </>
    )
};

export default MovieDetails;