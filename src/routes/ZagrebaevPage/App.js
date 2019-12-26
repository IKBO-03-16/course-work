import React, { Component } from 'react';
import './styles/App.css';
import Calendar from 'react-calendar';
import EasyLab from 'src/components/Calc.js';
import ColorPickerView from 'src/components/ColorPickerView'

class App extends Component {

  onColorChanged(red, green, blue) {
    this.setState({
        redChannel: red,
        greenChannel: green,
        blueChannel: blue
    });
  }

  render() {
    this.state = {
      date: new Date(),
    }
    //onChange = date => this.setState({ date })
    return (
      <form>
        <h2 className="App-header">Maxim Zagrebaev IKBO-03-16</h2>
        <p className="App-intro"><EasyLab></EasyLab> </p>
        <div className="Calview">
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
        </div>
        <div className="App-colorPicker">
          <ColorPickerView onNewColor={(red, green, blue) => this.onColorChanged(red, green, blue)} />
        </div>
      </form>

    );
  }
}

export default App;
