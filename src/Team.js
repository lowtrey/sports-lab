import React from "react";
import "./Team.css";

const Team = props => {
  const percentage = Math.round((props.score / props.shotsTaken) * 100);
  const { name, logo, shotsTaken, score, side, handleShoot } = props;
  return (
    <div className="Team">
      <h1>{name}</h1>
      <img src={logo} alt="Team Logo" />
      <h2>Shots Taken: {shotsTaken}</h2>
      <h2>Score: {score}</h2>
      {shotsTaken > 0 && <h2>Shooting % : {percentage}</h2>}
      <button id={side} onClick={handleShoot}>
        LET IT FLYYY!
      </button>
    </div>
  );
};

export default Team;
