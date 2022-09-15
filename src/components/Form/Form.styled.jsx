import styled from "styled-components";

export const FormMovies = styled.form`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const BtnSearch = styled.button`
    cursor: pointer;
    width: 200px;
    padding: 10px 0;
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
    gap: 10px;
    margin-right: 20px;

    :hover:not(.active),
    :focus-visible:not(.active) {
        color: #ff6500;
        background-color: #ffffff;
        border: 4px solid #ff6500;
    }
`;

export const InputSearch = styled.input`
    width: 100%;
    outline: 0 !important;
    padding: 10px 15px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #ff6500;
    border: 4px solid #ff6500;
    border-radius: 20px;
    background-color: #ffffff;
`;