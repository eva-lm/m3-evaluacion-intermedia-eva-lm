import React from "react";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";

const PokeList = props => {
  return (
    <ul className="list">
      {props.pokemons.map((pokemon, index) => (
        <li className="pokemonItem" key={index}>
          <Pokemon pokemon={pokemon} handleFavorite={props.handleFavorite} />

          <ul className="pokemonTypes">
            {pokemon.types.map((type, index) => {
              return (
                <li className="pokemonType" key={index}>
                  <div>{type}</div>
                </li>
              );
            })}
          </ul>
        </li>
      ))}
    </ul>
  );
};

PokeList.propTypes = {
  pokemons: PropTypes.array
};

export default PokeList;
