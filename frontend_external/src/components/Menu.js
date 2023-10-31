import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SiteIcon from "../assets/logo.png";
import home from "../assets/home.png";
import videoPlaylist from "../assets/videoPlaylist.png";
import notification from "../assets/notification.png";
import gear from "../assets/gear.png";
import logout from "../assets/logout.png";
import bodyguard from "../assets/bodyguard.png";
import edit from "../assets/edit.png";

function Menu() {
  const Container = styled.div`
    flex: 1;
    background-color: rgb(3, 0, 31);
    height: 100vh;
    color: white;
    font-size: 14px;
    position: sticky;
    top: 0;
  `;

  const Wrapper = styled.div`
    padding: 18px 26ox;
  `;

  const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
  `;


  const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 10px 5px;

    &:hover {
      background-color: #373737;
    }
  `;

  const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid #373737;
  `;

  const Login = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    font-weight: bold;
  `;

  const LinkImg = styled.img`
    @media (max-width: 768px) {
      padding: 5px 10px;
      font-size: 12px;
    }
  `;

  const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 1px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;

    @media (max-width: 768px) {
      padding: 5px 10px;
      font-size: 12px;
    }
  `;

  const Txt = styled.p`
    display: flex;
    align-items: center;
    padding: 5px 20px;
    gap: 5px;
    font-weight: bold;

    @media (max-width: 768px) {
      padding: 5px 10px;
      font-size: 12px;
    }
  `;

  return (
    <>
      <Container>
        <Wrapper>
          <Link to="video/test" style={{ textDecoration: "none" }}>
            <Logo>
              <LinkImg src={SiteIcon} color="white" alt="Title" />
              AI Z-Bot
            </Logo>
          </Link>
        </Wrapper>
        <Item>
          <Link to="/" style={{ textDecoration: "none" }}>
            <LinkImg src={home} color="white" alt="Title" />
          </Link>
          Home
        </Item>

        <Item>
          <Link to="/" style={{ textDecoration: "none" }}>
            <LinkImg src={videoPlaylist} color="white" alt="Title" />
          </Link>
          My Library
        </Item>
        <Item>
          <LinkImg src={notification} color="white" alt="Title" />
          Notification
        </Item>

        <Item>
          <LinkImg src={edit} color="white" alt="Title" />
          Edit Video
        </Item>


        <Hr />

        <Login>
          <Txt> Sign In to like videos and comment. </Txt>

          <Link to="signin" style={{ textDecoration: "none" }}>

            <Button>
              <LinkImg src={bodyguard} color="white" alt="Title" /> SIGN IN
            </Button>

          </Link>
        </Login>

        <Hr />
        <Item>
          <LinkImg src={gear} color="white" alt="Title" />
          Settings
        </Item>
        <Item>
          <LinkImg src={logout} color="white" alt="Title" />
          Logout
        </Item>
      </Container>
    </>
  );
}

export default Menu;
