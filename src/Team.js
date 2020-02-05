import React, { Component } from "react";
import "./Team.css";

const shoot = new Audio("/shoot.wav");
const swish = new Audio("/swish.wav");

class Team extends Component {
  state = {
    shotsTaken: 0,
    score: 0
  };

  letItFly = () => {
    const pointsScored = Math.random() >= 0.5 ? 1 : 0;
    const sound = pointsScored === 1 ? swish : shoot;
    sound.currentTime = 0;
    sound.play();
    this.setState(prevState => ({
      shotsTaken: prevState.shotsTaken + 1,
      score: prevState.score + pointsScored
    }));
  };

  render() {
    const { name, logo } = this.props;
    const { shotsTaken, score } = this.state;
    const percentage = Number(score / shotsTaken).toFixed(2);
    return (
      <div className="Team">
        <h1>{name}</h1>
        <img src={logo} alt="Team Logo" />
        <h2>Shots Taken: {shotsTaken}</h2>
        <h2>Score: {score}</h2>
        {shotsTaken > 0 && <h2>Shooting % : {percentage}</h2>}
        <button onClick={this.letItFly}>SHOOT!</button>
      </div>
    );
  }
}

export default Team;
