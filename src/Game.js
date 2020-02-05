import React from "react";
import Team from "./Team";
import "./Game.css";

const Game = props => {
  return (
    <>
      <h1>Welcome To {props.venue}!</h1>
      <div className="Game">
        <Team name="Lakers" logo="/lakers.png" />
        <Team name="Warriors" logo="/warriors.png" />
      </div>
    </>
  );
};

export default Game;
