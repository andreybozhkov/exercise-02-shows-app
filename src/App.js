import React, { Component } from 'react';
import './App.css';
import Slider from './components/Slider';
import Roster from './components/Roster';
import Character from './components/Character';

class App extends Component {
  constructor() {
    super();

    this.state = {
      epOnFocus : 0,
      charOnFocus: null
    };

    this.changeEp = (ep) => {
      this.setState({epOnFocus: ep});
    }

    this.setCharOnFocus = this.setCharOnFocus.bind(this);
  }

  setCharOnFocus (targetId) {
    console.log('ID that reached App.js:' + targetId);
    this.setState({ charOnFocus: targetId });
  }

  render() {
    return (
      <div className='App' >
        <Slider updateFunc={this.changeEp} focusedEp={this.state.epOnFocus}/>
        <Roster setCharOnFocus={this.setCharOnFocus} />
        <Character targetChar={this.state.charOnFocus} />
      </div>
    );
  }
}

export default App;
