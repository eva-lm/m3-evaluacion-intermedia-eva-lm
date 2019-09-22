import React from "react";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    return (
      <ul className="list">
        {this.props.pokemons.map((item, index) => (
          <li className="pokemonItem" key={index}>
            <Pokemon
              handleFavorite={this.handleFavorite}
              pokemonId={item.id}
              name={item.name}
              type={item.types}
              image={item.url}
            />

            <ul className="pokemonTypes">
              {item.types.map((type, index) => {
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
  }
}

PokeList.propTypes = {
  pokemons: PropTypes.array
};

export default PokeList;
