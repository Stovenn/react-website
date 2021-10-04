import React, {useState} from "react";
import styled from "styled-components";
import { theme } from "../../Theme";
import { Link } from "react-router-dom";
import { Burger } from "../Burger/Burger";

export const Navbar = (props) => {
    const [showLinks, setShowLinks] = useState(false)
  return (
    <StyledNav>
      <LeftContainer>
      <Burger />
      <Logo>My logo</Logo>
        <LinksWrapper>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
          <StyledLink to="/about-us">About us</StyledLink>
        </LinksWrapper>
      </LeftContainer>
      <RightContainer>
            <StyledLink to="/register">Register</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
      </RightContainer>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  height: 80px;
  width: 100vw;
  background: ${theme.primary};
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;

`;

const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: left;
  align-items: center;
`;
const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 25px;
`;

const Logo = styled.div`
font-size: 1.2rem;
color: ${theme.secondary};
letter-spacing: 1.2px;
margin: 0 25px;
`

const LinksWrapper = styled.div`
  max-height: 80px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${theme.white};
  font-size: 1.1rem;
  margin-left: 10px;

  &:hover {
    color: red;
  }

  @media only screen and (min-width: 750px) {
      font-size: 20px;
  }

`;
