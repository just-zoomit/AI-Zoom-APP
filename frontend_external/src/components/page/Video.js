import React from "react";
import { useParams } from "react-router-dom";
import thumbUp from "../../assets/thumbUp.png";
import thumbDown from "../../assets/thumbsDown.png";
import shareVid from "../../assets/share.png";
import person from "../../assets/person.png";
import styled from "styled-components";
import Transcript from "../Transcript";

const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin: 0 auto;
  max-width: 1400px;
  padding: var(--lns-space-large) var(--pagePadding) var(--lns-space-xxlarge);
`;

const VideoContainer = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
`;

const VideoFrame = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #030303;
  padding: 0px 10px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  margin-top: 20px;
`;

const Info = styled.div`
  color: #606060;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  color: #606060;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Meeting = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Image = styled.img`
  width: 30px;
  border-radius: 50%;
`;

const MeetingDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: #606060;
  margin-left: 10px;
`;

const MeetingTitle = styled.div`
  font-weight: 500;
`;

const MeetingParticipantCount = styled.span`
  font-size: 14px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  padding: 0px 10px;
`;

const TranscriptContainer = styled.div`
  flex: 2; /* Adjust the width as needed */
`;

function Video() {
  const { videoId } = useParams();

  const videoSrc = `https://www.youtube.com/embed/watch?v=qSLoguhOzXk&list=PLbcgcXc-I9h_bIoxrn4w4DCtAmWNotaTa&index=2`;

  return (
    <PageContainer>
      <VideoContainer>
        <VideoWrapper>
          <VideoFrame
            src={videoSrc}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoWrapper>
        <br />
        <Title>Test Video</Title>
        <Details>
          <Info>89,000,000 views • Jan 22, 2022</Info>
          <Buttons>
            <Button>
              <img src={thumbUp} alt="Like" /> 123K
            </Button>
            <Button>
              <img src={thumbDown} alt="Dislike" /> Dislike
            </Button>
            <Button>
              <img src={shareVid} alt="Share" /> Share
            </Button>
          </Buttons>
        </Details>
        <hr />
        <Meeting>
          <Image src={person} />
          <MeetingDetail>
            <MeetingTitle>Meeting Title</MeetingTitle>
            <MeetingParticipantCount>15 Participants</MeetingParticipantCount>
          </MeetingDetail>
        </Meeting>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Example of a
          description of a meeting. Example of a description of a meeting.
          Example of a description of a meeting. Example of a description of a
          meeting. Example of a description of a meeting. Example of a
          description of a meeting. Example of a description of a meeting.
        </Description>
        <hr />
      </VideoContainer>
      <TranscriptContainer>
        <Transcript />
      </TranscriptContainer>
    </PageContainer>
  );
}

export default Video;
