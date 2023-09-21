import React, { useState } from 'react';
import PokemonCard from './PokemonCard';
import PokemonDetails from './PokemonDetails';
import pokemonData from './data';


export default function PPokedex() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const openPokemonDetails = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const closePokemonDetails = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="pokedex">
      <h1>Pokédex</h1>
      <div className="pokemon-list">
        {pokemonData.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={openPokemonDetails} />
        ))}
      </div>
      {selectedPokemon && (
        <PokemonDetails pokemon={selectedPokemon} onClose={closePokemonDetails} />
      )}
    </div>
  );
}

