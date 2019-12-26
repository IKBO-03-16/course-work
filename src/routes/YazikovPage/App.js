import fetch from 'node-fetch';
import React, { Component } from "react";
import ColorPickerView from 'src/components/ColorPickerView'
import "./styles/App.css";

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }
  componentDidMount() {
    const zip = this.props.zip;
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
      zip +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
        <p>Current: {weatherData.main.temp}°</p>
        <p>High: {weatherData.main.temp_max}°</p>
        <p>Low: {weatherData.main.temp_min}°</p>
        <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }

  onColorChanged(red, green, blue) {
    this.setState({
        redChannel: red,
        greenChannel: green,
        blueChannel: blue
    });
  }

  onColorPicked(color) {
      this.setState({
          redChannel: color.rgb.r,
          greenChannel: color.rgb.g,
          blueChannel: color.rgb.b
      });
  }

  getDarkerChannel(colorChannel, darkerPercent) {
    return Math.round((colorChannel * (100 - darkerPercent) / 100)).toString(16).padStart(2, '0');
  }

  getDarkerColor(red, green, blue, darkerPercent) {
    let redChannel = this.getDarkerChannel(red, darkerPercent);
    let greenChannel = this.getDarkerChannel(green, darkerPercent);
    let blueChannel = this.getDarkerChannel(blue, darkerPercent);
    let color = "#" + redChannel + greenChannel + blueChannel;
    return color;
  }

  render() {
    const activePlace = this.state.activePlace;
    let red = this.state.redChannel;
    let green = this.state.greenChannel;
    let blue = this.state.blueChannel;
    let darkerBackground = this.getDarkerColor(red, green, blue, 20);
    return (
      <>
      <div className="App" style={{ backgroundColor: darkerBackground }}>
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
            }}
          >
            {place.name}
          </button>
        ))}
        <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
      </div>
      <div className="App-colorPicker">
          <ColorPickerView onNewColor={(red, green, blue) => this.onColorChanged(red, green, blue)} />
      </div>
      </>
    );
  }
}

export default App;
