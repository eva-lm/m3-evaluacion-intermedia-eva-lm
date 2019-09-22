import React from "react";
import PropTypes from "prop-types";

const Pokemon = props => {
  const handleChangeButton = () => {
    props.handleFavorite(props.pokemon.id);
  };

  return (
    <div>
      <label>
        <input
          className={props.pokemon.favorite === true ? "favorite" : ""}
          onClick={handleChangeButton}
          type="button"
          value="&hearts;"
          name="favorite"
          id="favorite"
        ></input>
      </label>
      <h2 className="PokemonTitle">{props.pokemon.name}</h2>
      <div className={props.pokemon.favorite === true ? "favorite" : ""}>
        <img
          className="pokemonImage"
          src={props.pokemon.url}
          alt={props.pokemon.name}
          title={props.pokemon.name}
        />
      </div>
    </div>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string
};

export default Pokemon;
