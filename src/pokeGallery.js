import React from 'react';
import Pokemon from './pokemon.js';

const PokeGallery = function (props) {
  const ids = Array.from(Array(props.count).keys());
  const pokemons = ids.map((id) => <Pokemon key={id + 1} id={id + 1} />);
  return <div className="PokeGallery">{pokemons}</div>;
};

export default PokeGallery;
