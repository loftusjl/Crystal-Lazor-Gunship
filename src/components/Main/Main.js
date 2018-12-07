import React, { Component } from 'react';
import NavBar from '../NavBar';
import Crystals from '../Crystals';
import Scoring from '../Scoring/Scoring';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wins: 0,
      losses: 0,
      target: 0,
      current: 0,
      crystalValues: []
    };
  }
  componentDidMount() {
    this.setState({ target: Math.floor(19 + Math.random() * 101) });
  }
  checkWinCondition() {
    const { wins, losses, target, current } = this.state;
    if (current === target) {
      this.setState({ wins: wins + 1 });
      console.log('you win');
    } else if (current > target) {
      this.setState({ losses: losses + 1 });
      console.log('you lose');
    }
  }

  numberGenerator = function(arr) {
    if (arr.length >= 4) return;
    let newNumber = Math.floor(1 + Math.random() * 10 + 1);
    if (arr.indexOf(newNumber) < 0) {
      arr.push(newNumber);
    }
    this.numberGenerator(arr);
  };

  crystalClick = async e => {
    try {
      if (this.state.current < this.state.target) {
        await this.setState({
          current: this.state.current + parseInt(e.target.dataset.value)
        });
        await this.checkWinCondition();
      }
    } catch (error) {
      console.log(error);
    }
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
        <Crystals onClick={this.crystalClick} vals={this.state.crystalValues} />
      </div>
    );
  }
}

export default Main;
