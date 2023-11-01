import React from 'react';
import styled from 'styled-components';
import fakeTranscript from './fakeTranscript';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
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

const TranscriptText = styled.p`
  font-size: 16px;
  color: white; /* Set the text color to white */
`;

function Transcript() {
  return (
    <>
      <Container>
        <Wrapper>
          <Logo>
            Zoom Mtg AI Transcript
          </Logo>
          <div>
            {fakeTranscript.map((line, index) => (
             
              <TranscriptText key={index}>
              <br />
                <span>{line.time}:</span> {line.text}
                
              </TranscriptText>
            ))}
          </div>
        </Wrapper>
      </Container>
    </>
  );
}

export default Transcript;
