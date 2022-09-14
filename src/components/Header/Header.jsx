import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HeaderList, HeaderItem, HeaderTop } from "./Header.styled";

const NavItem = styled(NavLink)`
    text-decoration: none;
    color: #ffffff;
    font-family: 'Ubuntu', sans-serif;
    font-size: 25px;
    padding: 4px 8px;

    &.active {
        border-bottom: 4px solid #ff6500;
        color: #ff6500;
    }

    :hover:not(.active),
    :focus-visible:not(.active) {
        color: #ff6500;
    }
`;

const Header = () => {
    return (
        <>
            <HeaderTop>
                <HeaderList>
                    <HeaderItem>
                        <NavItem to={`/`}>Home</NavItem>
                    </HeaderItem>
                    <HeaderItem>
                        <NavItem to={`/movies`}>Movies</NavItem>
                    </HeaderItem>
                </HeaderList>
            </HeaderTop>
        </>
    )
};

export default Header;