import styled from "styled-components";

export const ActorsList = styled.ul`
    margin: 0 0 40px 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
`;

export const ActorsItem = styled.li`
    border: 1px solid #ffffff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 2px 2px 7px 3px rgba(255, 255, 255, 0.2);
` ;

export const NoData = styled.p`
    margin: 0;
    padding: 30px;
    color: #ffffff;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    text-decoration: underline;
`;

