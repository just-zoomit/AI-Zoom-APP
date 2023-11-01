import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  
  color: #3ea6ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding: 10px 20px;
  font-size: 18px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
`;

const Logo = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

function Footer() {
  return (
    <FooterContainer>
      <Links>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Security</a>
      </Links>
      <Logo>
        MeetIntel © All Rights Reserved
      </Logo>
    </FooterContainer>
  );
}

export default Footer;
