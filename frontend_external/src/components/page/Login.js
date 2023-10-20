import React from 'react';
import styled from 'styled-components';

// Define your styled components outside of the functional component
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 80vh;

  color: black;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #ddd;
  width: 300px;
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  background-color: transparent;
  width: 100px;
`;

const Button = styled.button`
border-radius: 5px;
border: none;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
background-color: #3ea6ff;
color: black;
`;

const More = styled.div`
display: flex;
margin-top: 20px;
font-size: 12px;
color: black;
`;

const Links = styled.div`
margin-left: 50px;
`;

const Link = styled.span`
margin-left: 30px;

`;

function LogIn() {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Subtitle>To Continue Profile</Subtitle>
        <Input placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button>Submit</Button>
        <Title>Register</Title>
        <Subtitle>Create an Account</Subtitle>
        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button>Register</Button>
      </Wrapper>

      <More>
        English(USA)
        <Links>
          <Link >Help</Link>
          <Link >Privacy</Link>
          <Link >Terms</Link>
        </Links>
      </More>
      
    </Container>

    
  );
}

export default LogIn;
