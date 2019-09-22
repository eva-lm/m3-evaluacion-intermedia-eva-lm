import React from "react";
import "../stylesheets/App.css";
import PokeList from "./PokeList";
import { pokemonsData } from "../data/data";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemons: pokemonsData
    };

    this.handleFavorite = this.handleFavorite.bind(this);
  }
  componentDidMount() {
    const pokemons = this.state.pokemons.map(pokemon => {
      return {
        ...pokemon,
        favorite: false
      };
    });

    this.setState({
      pokemons: pokemons
    });
  }
  handleFavorite(id) {
    const NewPokemon = this.state.pokemons.map(pokemon => {
      let favorite = pokemon.favorite;
      if (pokemon.id === id) {
        favorite = !favorite;
      }
      return {
        ...pokemon,
        favorite: favorite
      };
    });
    this.setState({
      pokemons: NewPokemon
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="Title">Mi lista de pokemon</h1>
        <PokeList
          pokemons={this.state.pokemons}
          handleFavorite={this.handleFavorite}
        />
      </div>
    );
  }
}

export default App;
