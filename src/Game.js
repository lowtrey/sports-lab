import React, { Component } from "react";
import Team from "./Team";
import "./Game.css";

const shoot = new Audio("/shoot.wav");
const swish = new Audio("/swish.wav");
const initialTeams = [
  {
    logo: "/lakers.png",
    name: "Lakers",
    shotsTaken: 0,
    side: "Home",
    score: 0
  },
  {
    logo: "/warriors.png",
    name: "Warriors",
    side: "Visiting",
    shotsTaken: 0,
    score: 0
  }
];

class Game extends Component {
  state = {
    teams: initialTeams
  };

  handleShoot = event => {
    const currentSide = event.target.id;
    const pointsScored = Math.random() >= 0.5 ? 1 : 0;
    const sound = pointsScored === 1 ? swish : shoot;
    sound.currentTime = 0;
    sound.play();
    // Make Copy
    const newTeams = this.state.teams.slice();
    // Modify Copy
    newTeams.map(team => {
      if (team.side === currentSide) {
        team.shotsTaken += 1;
        team.score += pointsScored;
      }
      return team;
    });
    //Overwrite Original With The Copy
    this.setState({ teams: newTeams });
  };

  render() {
    const [home, visiting] = this.state.teams;
    return (
      <>
        <h1>Welcome To {this.props.venue}!</h1>
        <div className="Game">
          <Team {...home} handleShoot={this.handleShoot} />
          <Team {...visiting} handleShoot={this.handleShoot} />
        </div>
      </>
    );
  }
}

export default Game;
