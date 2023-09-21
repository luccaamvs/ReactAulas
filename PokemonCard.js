import React from 'react';

function PokemonCard({ pokemon, onClick }) {
  return (
    <div className="pokemon-card" onClick={() => onClick(pokemon)}>
      <img src={pokemon.image}/>
      <h2>{pokemon.name}</h2>
      <p>Tipo: {pokemon.type}</p>
    </div>
  );
}

export default PokemonCard;
