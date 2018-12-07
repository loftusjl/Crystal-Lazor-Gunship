import React, { Component } from 'react';
import NavBar from '../NavBar';
import Crystals from '../Crystals';
import Scoring from '../Scoring/Scoring';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wins: 6,
      losses: 2,
      target: 0,
      current: 8,
      crystalValues: []
    };
  }
  componentDidMount() {
    this.setState({ target: Math.floor(19 + Math.random() * 101) });
  }

  numberGenerator = function(arr) {
    if (arr.length >= 4) return;
    let newNumber = Math.floor(1 + Math.random() * 10 + 1);
    if (arr.indexOf(newNumber) < 0) {
      arr.push(newNumber);
    }
    this.numberGenerator(arr);
  };

  render() {
    this.numberGenerator(this.state.crystalValues);
    return (
      <div>
        <NavBar />
        <Scoring
          wins={this.state.wins}
          losses={this.state.losses}
          target={this.state.target}
          current={this.state.current}
        />
        {console.log(this.state)}
        <Crystals vals={this.state.crystalValues} />
      </div>
    );
  }
}

export default Main;
