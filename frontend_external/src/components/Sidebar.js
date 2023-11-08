import React, { useState } from "react";
import styled from "styled-components";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaThList,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Container = styled.div`
  background-color: rgb(3, 0, 31);
  height: 100vh;
  color: white;
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Main = styled.div`
  width: 100%;
  padding: 20px;
`;

const SidebarWrapper = styled.div`
  background: #000;
  background-color: rgb(3, 0, 31);
  height: 100vh;
  width: ${(props) => (props.isOpen ? "200px" : "50px")};
  transition: all 0.5s;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 15px;
`;

const Logo = styled.h1`
  font-size: 30px;
  font-family: "Avenir";
  display: ${(props) => (props.isOpen ? "block" : "none")};
  
`;

const BarsIconWrapper = styled.div`
  display: flex;
  font-size: 25px;
  font-family: "Avenir";
  gap: 15px;
  margin-left: ${(props) => (props.isOpen ? "20px" : "0")};
`;

const IconWrapper = styled.div`
  font-size: 20px;
`;

 // Fix this level


const LinkText = styled.div`
 font-size: 25px;
 font-family: "Avenir";
 display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const Link = styled(NavLink)`
    display: flex;
    color: #fff;
    padding: 20px 15px;
    gap: 15px;
    transition: all 0.5s;

    &:hover {
        background: lightskyblue;
        color: #000;
        transition: all 0.5s;
    }

    &.active {
        background: lightskyblue;
        color: #000;
    }
`;

const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px solid #373737;
`;


 

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/videolibrary",
      name: "Library ",
      icon: <FaThList />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    }
  ];

  const menuButtomItem = [
    {
      path: "/settings",
      name: "Settings",
      icon: <FaCog />, 
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <FaSignOutAlt/>,
    }
  ];


  return (
    <>
      <Container>
        <SidebarWrapper isOpen={isOpen}>
          <TopSection>
            <Logo isOpen={isOpen}>MeetIntel</Logo>

            <BarsIconWrapper isOpen={isOpen}>
              <FaBars onClick={toggle} />
            </BarsIconWrapper>
          </TopSection>

          {menuItem.map((item, index) => (
            <Link to={item.path} key={index} activeClassName="active">

              <IconWrapper>{item.icon}</IconWrapper>
              <LinkText isOpen={isOpen}>{item.name}</LinkText>

            </Link>
          ))}
          <Hr />

          {menuButtomItem.map((item, index) => (
            <Link to={item.path} key={index} activeClassName="active">

              <IconWrapper>{item.icon}</IconWrapper>
              <LinkText isOpen={isOpen}>{item.name}</LinkText>

            </Link>
          ))}

         

        </SidebarWrapper>

        
        <Main>{children}</Main>

      </Container>
    </>
  );
};

export default Sidebar;
