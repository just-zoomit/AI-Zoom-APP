import React from "react";
import "./Home.css";
import gptLogo from "../assets/chatgpt.svg";
import addBtn from "../assets/add-30.png";
import msgIcon from "../assets/message.svg";
import home from "../assets/home.svg";
import save from "../assets/bookmark.svg";
import rocket from "../assets/rocket.svg";
import sendBtn from "../assets/send.svg";
import userIcon from "../assets/user-icon-me.jpg";
import gptImgLogo from "../assets/chatgptLogo.svg";

function Home() {
  return (
    <>
      <div className="chatApp">
        <div className="sideBar">
          <div className="upperSide">
            <div className="upperSideTop">
              {" "}
              <img src={gptLogo} alt="Logo" className="logo" />{" "}
              <span className="brand">ZoomGPT</span>
              <button className="midBtn">
                {" "}
                <img src={addBtn} alt="Chat" className="addBtn" /> New Chat{" "}
              </button>
            </div>{" "}
            <div className="upperSideBottom">
              <button className="query">
                <img src={msgIcon} alt="Query" />
                What is Chromium Embedded Framework ?
              </button>

              <button className="query">
                <img src={msgIcon} alt="Query" />
                What is Zoom Apps JavaScript SDK ?
              </button>

              <button className="query">
                <img src={msgIcon} alt="Query" />
                What is WebDriver BiDI protocol ?
              </button>
            </div>
          </div>

          <hr />
          <div className="lowerSide">
            <button className="listItems">
              <img src={home} alt="Home" className="listItemsImg" /> Home
            </button>
            <button className="listItems">
              <img src={save} alt="Save" className="listItemsImg" /> Save
            </button>
            <button className="listItems">
              <img src={rocket} alt="Upgrade" className="listItemsImg" />{" "}
              Upgrade To Pro
            </button>
          </div>
        </div>

        <div className="main">
          <div className="chats">

            <div className="chat">
              <img className="chatImg" src={userIcon} alt="Logo" />
              <p className="txt">
                Hi, I am ZoomGPT. I can help you with your queries related to
                Zoom Apps JavaScript SDK.
              </p>
            </div>

            <div className="chat bot">
              <img className="chatImg" src={gptImgLogo} alt="Logo" />
              <p className="txt">
                Hi, I am ZoomGPT. I can help you with your queries related to
                Zoom Apps JavaScript SDK.
              </p>
            </div>
          </div>

          <div className="chatFooter">
            <div className="inp">
              <input type="text" className="inp" placeholder="Type a message" /><button className="send"> <img src={sendBtn} alt="Send" />{" "} </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
