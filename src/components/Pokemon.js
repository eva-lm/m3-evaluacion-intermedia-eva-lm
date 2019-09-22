import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  handleChangeButton(props) {
    props.handleFavorite(props.item.id);
  }

  render() {
    const { name, image } = this.props;
    //console.log(this.props);

    return (
      <div className="pokemonCard">
        <label>
          <input
            onClick={this.handleChangeButton}
            type="button"
            value="&hearts;"
            name="favorite"
            id="favorite"
          ></input>
        </label>
        <h2 className="PokemonTitle">{name}</h2>
        <img className="pokemonImage" src={image} alt={name} title={image} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string
};

export default Pokemon;
