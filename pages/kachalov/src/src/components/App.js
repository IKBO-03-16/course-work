import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/TicTacToe.css';
import Game from './Game.js';
import Clock from 'react-clock';

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    }
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  render() {
    return (
      <form>
        <h2 className='CenterAlign'>Oleg Kachalov. IKBO-03-16. Tic Tac Toe</h2>
        <p className='CenterAlign'><Game></Game></p>
        <div className='CenterAlign'>
          <Clock value={this.state.date}/>
        </div>
      </form>
    );
  }
}

export default App;

{/* <div className="App">
        <div>
          <h2>Oleg Kachalov. IKBO-03-16</h2>
          <h2>Tic Tac Toe</h2>
        </div> 
        <p className='MyGame'>
          <Game></Game>
        </p>
      </div> */}