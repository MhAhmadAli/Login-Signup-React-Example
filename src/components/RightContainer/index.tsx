import React from "react";
import sword_person from "../../images/sword-person.png";

function RightContainer() {
  return (
    <div className="split right-container">
      <div className="sword-person-container">
        <img className="sword-person" src={sword_person} alt="sword person" />
      </div>
      <div>
        <div className="right-text-heading">
          <span>anime</span>
          <span className="diff-color">yabu.</span>
        </div>
        <div className="right-text-body">
          <div className="right-text-body-upper">
            Assista animes online em HD, legendado ou dublado, no seu celular ou
            computador.
          </div>
          <div className="right-text-body-lower">Animeyabu, o seu portal de animes online!</div>
        </div>
        <div className="slider-three">
          <div className="slider-three-one active"></div>
          <div className="slider-three-one"></div>
          <div className="slider-three-one"></div>
        </div>
      </div>
    </div>
  );
}

export default RightContainer;
