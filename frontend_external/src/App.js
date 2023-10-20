import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Transcript from './components/Transcript';
import Video from './components/page/Video';
import Home from './components/page/Home';
import LogIn from './components/page/Login';


const Container = styled.div`
    display: flex;

    
    `

const Main = styled.div`
    flex: 5;
    `

const Wrapper = styled.div``
function App() {
  return (
    <>
      <Container>
        <Router>
          <Menu />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<LogIn />} />
                <Route path="/video"  />
                <Route path="/video/:videoId" element={<Video />} />
              </Routes>
            </Wrapper>
          </Main>
          <Transcript />
        </Router>
        {/* sidebar */}
      </Container>
    </>
  );
}

export default App;

