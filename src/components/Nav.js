import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fetchSearchResults } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="" />
        <h1>GamesDB</h1>
      </Logo>
      <form className="search">
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 2rem 5rem;
  text-align: center;
  input {
    width: 30%;
    padding: 0.5rem;
    border: none;
    font-size: 1.5rem;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
    font-weight: bold;
    font-family: "montserrat", sans-serif;
  }
  button {
    font-size: 1.5rem;
    border: none;
    margin-top: 1rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 1rem;
  img {
    width: 2rem;
    height: 2rem;
  }
`;
export default Nav;
