import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../Theme";
import { Link } from "react-router-dom";
import { Burger } from "../Burger/Burger";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

export const Navbar = (props) => {
  const [showLinks, setShowLinks] = useState(false);

  const { width } = useWindowDimensions();

  useEffect(()=>{
    if(width > 650){
      setShowLinks(false)
    }
  },[width])

  return (
    <StyledNav>
      <LeftContainer open={showLinks}>
        <LinksWrapper>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
          <StyledLink to="/about-us">About us</StyledLink>
        </LinksWrapper>
        {width <= 650 ? (
          <Burger show={showLinks} toggleShow={setShowLinks} />
        ) : null}
      </LeftContainer>
      <RightContainer>
        <StyledLink to="/register">Register</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </RightContainer>
    </StyledNav>
  );
};
const openedNavStyle = css`
  position: absolute;
  left: 0px;
  top: 80px;
  height: 230px;
  max-height: 230px;
  width: 100%;
  background-color: ${theme.primary};
  display: flex;
  flex-direction: column;
  align-items:center;
`;

const StyledNav = styled.nav`
  height: 80px;
  width: 100vw;
  background: ${theme.primary};
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
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

const LinksWrapper = styled.div``;

const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: left;
  align-items: center;

  ${LinksWrapper} {
    max-height: 80px;
    @media only screen and (max-width: 650px) {
      ${(props) => (props.open ? openedNavStyle : "")}
    }
  }
  ${StyledLink} {
    @media only screen and (max-width: 650px) {
      display: ${(props) => (props.open ? "flex" : "none")};
      margin-bottom: 15px;
    }
  }
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
`;
