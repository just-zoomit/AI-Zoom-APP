import React from 'react';
import styled from 'styled-components';

// Define your styled components outside of the functional component

const Container = styled.div`
  display: flex;
  justify-content: flex-start; /* Changed from flex-end to flex-start */
  background-color: rgb(3, 0, 31);
  height: 100vh;
  color: white;
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 65px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  font-weight: bold;
  margin-bottom: 25px;

  &:hover {
    background-color: #373737;
  }
`;


function Transcript() {
  return (
    <>
      <Container>
        <Wrapper>
          <Logo>
            Zoom Mtg AI Transcript
          </Logo>
        </Wrapper>
      </Container>
    </>
  );
}

export default Transcript;
