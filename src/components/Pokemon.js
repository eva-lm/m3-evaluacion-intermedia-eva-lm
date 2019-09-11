import React from "react";
import "../stylesheets/App.css";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const { name, type, image } = this.props;
    return (
      //<PokeList />
      <div>
        <h2>{name}</h2>
        <p>{type}</p>
        <div className="imageContainer">
          <img className="pokemonImage" src={image} alt="imagen pokemon" />
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string
};

export default Pokemon;
