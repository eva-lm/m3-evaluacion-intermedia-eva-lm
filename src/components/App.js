import React from "react";
import "../stylesheets/App.css";
import PokeList from "./PokeList";
import { pokemonsData } from "../data/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemonsData,
      favorites: []
    };
    console.log(this.state.pokemons);

    this.handleFavorite = this.handleFavorite.bind(this);
  }
  handleFavorite(id) {
    console.log("wiii--->", id);
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
