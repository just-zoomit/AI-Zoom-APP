import React from "react";
import "./MtgRecControllers.css";
import play from "../../assets/play.svg";
import pause from "../../assets/pause.svg";
import stop from "../../assets/stop.svg";
import sendBtn from "../../assets/send.svg";
import logout from "../../assets/logout.svg";
import botServiceHealth from "../../assets/botServiceHealth.svg";

function MtgRecControllers() {
  return (
    <>
      <div className="txt"> Meeting Bot </div>


      <div className="mtg-bot-container">

      <div className="mtg-bot-status">

      <div>
        <p className="txt">
          <img className="statusImg" src={botServiceHealth} alt="Bot Servive Health" />
          Meeting Bot is a Zoom App that can be used to record meetings and
          transcribe them in real time. <br />
          
          Meeting Bot: Not Active, click the bot
          to activate invite bot.
        </p>
        </div>

      </div>
      <hr/>

      <div className="mtg-rec-controllers">
        <button className="mtg-btn">
          <img src={play} alt="Query" />
          Start Recording Meeting
        </button>

        <button className="mtg-btn">
          <img src={stop} alt="Query" />
          Stop Recording Meeting
        </button>
        <button className="mtg-btn">
          <img src={pause} alt="Query" />
          Pause Recording Meeting
        </button>
        <button className="mtg-btn">
          <img src={logout} alt="Query" />
          Leave Meeting
        </button>
      </div>
      <hr/>

      <div className="chatFooter">
        <div className="inp">
          <input type="text" className="inp" placeholder="Type a message" />
          <button className="send">
            {" "}
            <img src={sendBtn} alt="Send" />{" "}
          </button>
        </div>
      </div>
</div>
    </>
  );
}

export default MtgRecControllers;
