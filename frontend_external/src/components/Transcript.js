import React from 'react';
import styled from 'styled-components';


function Transcript() {
  const Container = styled.div`
    display: flex;
    justify-content: flex-end; /* Move content to the right side */
    background-color: rgb(3, 0, 31);
    height: 100vh;
    color: white;
    font-size: 14px;
    position: sticky;
    top: 0;
  `;

  const Wrapper = styled.div`
    padding: 18px 65px; /* Fixed a typo in the padding value */
  `;

  const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 35px;
    font-weight: bold;
    margin-bottom: 25px;

    &:hover {
      background-color: #373737;
  `;

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
