import React from "react";
import styled from "styled-components";
import stockimg from "../assets/stockimg.jpeg";
import man from "../assets/man.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 370px;
  margin-bottom: 45px;
  cursor: pointer;
  padding: 20px;
`;
const Image = styled.img`
  width: 100%;
  height: 200px;
  background-color: #999;
`;
const Details = styled.div`
  padding: 15px;
  display: flex;
  gap: 10px;
  margin-top: 8px;
`;
const Texts = styled.div``;
const VideoImg = styled.img``
const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #030303;
  `;
const Info = styled.div`
  font-size: 14px;
  color: #606060;
  `;

function Card() {
  return (
    <Link to="video/test" style={{textDecoration: "none"}}> 
    <Container>
      {" "}
      <Image src={stockimg} />
      <Details>
        <VideoImg src={ man } />
        <Texts>
          <Title> Test Video </Title>
          <Info> 500,908 view * 1 day ago</Info>
        </Texts>
      </Details>
    </Container>
    </Link>
  );
}

export default Card;
