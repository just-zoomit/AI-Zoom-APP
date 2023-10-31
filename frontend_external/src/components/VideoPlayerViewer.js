import React, { useState } from 'react'
import VideoPlayer from './page/VideoPlayer'

function VideoPlayerViewer() {
   const [videoId, setVideoId] = useState(null);

  function playVideo(e, videoId) {
    e.preventDefault();
    setVideoId(videoId);
  }

  return (
    <>
    <div>
    {videoId && <VideoPlayer videoId={videoId} />  } <br/>
    <button onClick={(e) => playVideo(e, 'demoHeadlessWebbrowser')}>Video 1</button>
    <button onClick={(e) => playVideo(e, 'testMsdkSig')}>Video 2</button>
    <button onClick={(e) => playVideo(e, 'zoomWebSocketsDemo')}>Video 3</button>
    
    </div>
    </>
  )
}

export default VideoPlayerViewer