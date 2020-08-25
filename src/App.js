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
    const count = (
      <input
        placeholder="Enter Count"
        value={this.state.count}
        onChange={this.updateCount}
      />
    );
    const gallery = <PokeGallery count={+this.state.count} />;
    const buttonText = this.state.isSubmit ? 'Change count' : 'Show pokemons';

    return (
      <div className="App">
        {this.state.isSubmit ? gallery : count}
        <button onClick={this.toggleSubmit}>{buttonText}</button>
      </div>
    );
  }
}

export default App;
