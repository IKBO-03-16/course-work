import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var theNumber = Math.floor(Math.random() * 100 + 1);

class GuessingGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) { 
    if(this.state.value < theNumber){
      alert('Ваше число меньше загаданного');
      document.getElementById("number").focus();
      document.getElementById("number").select();
    } 
    else if (this.state.value > theNumber){
      alert('Ваше число больше загаданного');
      document.getElementById("number").focus();
      document.getElementById("number").select();
    } else {
      alert('Вы угадали!Заданное число: ' + theNumber);
      theNumber = Math.floor(Math.random() * 100 + 1);
      document.getElementById("number").focus();
      document.getElementById("number").select();
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="gamename" align="center">
          Угадай число!
        </div>
        <label className="props">
          Введите число от 1 до 100: 
          <input className="inp" type="text" id="number" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input className="props" type="submit" value="Проверить" />
      </form>
    );
  }
}

ReactDOM.render(
  <GuessingGame/>,
  document.getElementById('root'),
);