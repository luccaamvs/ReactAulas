import React from 'react';

function PokemonDetails({ pokemon, onClose }) {
  return (
    <div className="pokemon-details">
      <button onClick={onClose}>X</button>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>Tipo: {pokemon.type}</p>
      <p>Descrição: {pokemon.description}</p>
    </div>
  );
}

export default PokemonDetails;
