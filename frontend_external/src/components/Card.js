import React, { useRef, useEffect, useState } from "react";
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
const VideoImg = styled.img``;
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
  const [videos, setVideos] = useState([]);

  const handleApiRequest = () => {
   

    const requestOptions = {
      method: "GET",
  
    };

    fetch(`${process.env.REACT_APP_PUBLIC_ROOT}/api/videos/player`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Success in making GET request:", data);
        setVideos(data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error making GET request:", error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        handleApiRequest();
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    {videos.map((video) => (
      <Container key={video.id}>
        <Link to={`/video/${video.id}`}>
        <Image src={stockimg} />
        <Details>
          <VideoImg src={man} />
          <Texts>
            <Details>
              <div key={video.id}>
              <Title>{video.name}</Title>
              <Info> 500,908 views • {video.duration}</Info>
              </div>
            </Details>
          </Texts>
        </Details>
        </Link>
      </Container>
    ))}
  </>
);
}

export default Card;
