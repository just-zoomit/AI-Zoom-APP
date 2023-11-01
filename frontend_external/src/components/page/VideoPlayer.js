import React, {useRef, useEffect} from 'react'

const VideoPlayer = ({videoId}) => {

    const videoRef = useRef(null);

    useEffect(() => {
        if(videoRef.current){
            console.log("Video Ref: ", videoRef.current);
            videoRef.current.pause();
            videoRef.current.removeAttribute('src');
            videoRef.current.load();
        }
    })

  return (
    <video ref={videoRef} width='620' height='540' controls autoPlay>
        <source src={`http://localhost:3000/videos/${videoId}`} type='video/mp4'></source>
        Your browser does not support the video tag.
    </video>
  )
}

export default VideoPlayer