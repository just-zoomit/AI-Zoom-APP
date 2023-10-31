import React from 'react';
import styled from 'styled-components';
import bodyguard from "../assets/bodyguard.png";
import search from "../assets/search.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: transparent;
  height: 56px;
  
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Adjusted to space between */
  height: 100%;
  padding: 2px 80px;
  gap: 10px;
  margin: 5 10px;
`;

const Search = styled.div`
  flex-grow: 1; /* Allow the search bar to take up available space */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  border: 0.5px solid #ccc;
  border-radius: 3px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  
  
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

function Navbar() {
  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input placeholder="Search library" />
            <img src={search} alt="Title" />
          </Search>
          <Link to="signin" style={{ textDecoration: "none" }}>
          <Button><img src={bodyguard} alt="Title" /> SIGN IN </Button>
          </Link>
          
        </Wrapper>
      </Container>
    </>
  );
}

export default Navbar;
