import React from 'react';
import './App.css';
import PokeGallery from './pokeGallery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 5, isSubmit: false};
    this.updateCount = this.updateCount.bind(this);
    this.toggleSubmit = this.toggleSubmit.bind(this);
  }

  updateCount({target}) {
    this.setState(() => ({count: target.value}));
  }

  toggleSubmit() {
    this.setState((state) => ({isSubmit: !state.isSubmit}));
  }

  render() {
    let countBox = (
      <input placeholder="Enter count" onKeyUp={this.updateCount}></input>
    );
    let buttonText = 'Show pokemons';

    if (this.state.isSubmit) {
      buttonText = 'Change count';
      countBox = (
        <PokeGallery count={+this.state.count}>Pokemon Gallery</PokeGallery>
      );
    }

    return (
      <div className="App">
        {countBox}
        <button onClick={this.toggleSubmit}>{buttonText}</button>
      </div>
    );
  }
}

export default App;
