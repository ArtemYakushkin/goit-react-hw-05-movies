import styled from "styled-components";

export const List = styled.ul`
    margin: 0 0 40px 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
`;

export const Item = styled.li`
    border: 1px solid #ffffff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 2px 2px 7px 3px rgba(255, 255, 255, 0.2);

    :hover:not(.active),
    :focus-visible:not(.active) {
        border: 1px solid #ff6500;
        box-shadow: 2px 2px 7px 3px rgba(255, 101, 0, 0.2);
    }
` ;

export const Image = styled.img`
    width: 100%;
    height: 440px;
    object-fit: cover;
`;

export const MovieTitle = styled.p`
    margin: 0;
    padding: 10px 0;
    color: #ffffff;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
`;