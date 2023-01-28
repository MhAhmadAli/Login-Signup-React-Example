import React from "react";
import facemask from "../../images/face-mask.png";
import Login from "../Login";
import insta_icon from "../../images/instagram-logo.png";
import twitter_icon from "../../images/twitter-logo.png";
import facebook_icon from "../../images/facebook-logo.png";

function LeftContainer() {
  return (
    <div className="split left-container">
      <div className="form-header">
        <img className="face-mask" src={facemask} alt="face mask" />
        <h1>ようこそ!</h1>
        <p>Bem-vindo(a)!</p>
      </div>
      <Login />
      <div className="seperator-container">
        <div className="seperator"></div>
        <div className="sperator-text">Ou se registre com</div>
        <div className="seperator"></div>
      </div>
      <div className="social-icon-container">
        <div className="social-login-icons">
          <img src={insta_icon} alt="insta_icon" />
        </div>
        <div className="social-login-icons">
          <img src={twitter_icon} alt="twitter_icon" />
        </div>
        <div className="social-login-icons">
          <img src={facebook_icon} alt="facebook_icon" />
        </div>
      </div>
      <div className="left-bottom-text">
        <span>Já é membro? </span>
        <span className="diff-text">Faça Login</span>
      </div>
    </div>
  );
}

export default LeftContainer;
