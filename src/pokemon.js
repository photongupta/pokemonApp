import React from 'react';

const getPokeDetails = function (id) {
  const url = `http://pokeapi.co/api/v2/pokemon/${id}`;
  return fetch(url).then((details) => details.json());
};

const Name = (props) => <p className="Name">{props.name.toUpperCase()}</p>;

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loaded: false, frontImage: true};
    this.toggleImage = this.toggleImage.bind(this);
  }

  componentDidMount() {
    getPokeDetails(this.props.id).then(({name, sprites}) => {
      const {front_default: frontImg, back_default: backImg} = sprites;
      const pokemon = {name, frontImg, backImg};
      this.setState(() => ({pokemon, loaded: true}));
    });
  }

  toggleImage() {
    this.setState((state) => ({frontImage: !state.frontImage}));
  }

  render() {
    if (!this.state.loaded) {
      return <p>Loading...</p>;
    }

    const {name, frontImg, backImg} = this.state.pokemon;
    const src = this.state.frontImage ? frontImg : backImg;

    return (
      <div className="Card">
        <Name name={name} />
        <img src={src} onClick={this.toggleImage} className="PokeImg" />
      </div>
    );
  }
}

export default Pokemon;
