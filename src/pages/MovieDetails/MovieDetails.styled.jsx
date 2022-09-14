import styled from "styled-components";

export const BtnGoBack = styled.button`
    cursor: pointer;
    width: 100%;
    padding: 10px 0;
    margin-bottom: 20px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    border: 4px solid #ffffff;
    border-radius: 20px;
    background-color: #ff6500;

    :hover:not(.active),
    :focus-visible:not(.active) {
        color: #ff6500;
        background-color: #ffffff;
        border: 4px solid #ff6500;
    }
`;

export const DetContainer = styled.div`
    padding: 20px;
    border: 1px solid #ffffff;
    box-shadow: 2px 2px 7px 3px rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    display: flex;
    gap: 40px;
`;

export const ImgContainer = styled.div`
    min-width: 350px;
    height: 530px;
    border: 1px solid #ffffff;
    border-radius: 10px;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const MovieName = styled.h2`
    margin: 0 0 15px 0;
    font-family: 'Ubuntu', sans-serif;
    font-size: 30px;
    font-weight: 800;
    color: #ffffff;
`;

export const Date = styled.span`
    font-weight: 400;
`;