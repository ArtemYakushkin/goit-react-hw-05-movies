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
    display: flex;
    justify-content: center;
    align-items: center;

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
    margin-bottom: 20px;
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
    margin: 0 0 40px 0;
    font-family: 'Ubuntu', sans-serif;
    font-size: 30px;
    font-weight: 800;
    color: #ffffff;
`;

export const Date = styled.span`
    font-weight: 400;
`;

export const Paragraph = styled.p`
    margin: 0 0 40px 0;
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
    font-weight: 800;
    color: #ffffff;
`;

export const Descr = styled.span`
    font-weight: 400;
`;

export const Overview = styled.p`
    margin: 0 0 40px 0;
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 2;
    color: #ffffff;
`;

export const AdditionalList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
`;

export const Item = styled.li`
  
`;