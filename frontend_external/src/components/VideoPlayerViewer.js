import React, { useState } from 'react';
import VideoPlayer from './page/VideoPlayer';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const VideoButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

function VideoPlayerViewer() {
  const [videoId, setVideoId] = useState(null);

  function playVideo(e, videoId) {
    e.preventDefault();
    console.log("Set Video ID: ", videoId);
    setVideoId(videoId);
  }

  return (
    <PageContainer>
      {videoId && <VideoPlayer videoId={videoId} />} <br/>
      <VideoButtons>
      <button onClick={(e)=>{playVideo(e, 'cdn')}}>Play Video 1</button>
      <button onClick={(e)=>{playVideo(e, 'generate-pass')}}>Play Video 2</button>
      <button onClick={(e)=>{playVideo(e, 'get-post')}}>Play Video 3</button>
      </VideoButtons>
    </PageContainer>
  );
}

export default VideoPlayerViewer;
