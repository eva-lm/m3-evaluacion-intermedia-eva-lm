import React from "react";
import "../stylesheets/App.css";
import PokeList from "./PokeList";
import Pokemon from "./Pokemon";
import { pokemonsData } from "../data/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemonsData,
      favorites: "red"
    };
    console.log(pokemonsData);
  }
  handleFavorites(event) {
    const { value } = event.target;
    this.setState(prevState => ({
      favorites: prevState.favorites === "pokemonItem" ? "red" : "pokemonItem"
    }));
    console.log(value);
  }
  render() {
    return (
      <div className="App">
        <h1 className="Title">Mi lista de pokemon</h1>
        <PokeList pokemons={this.state.pokemons} />
        <Pokemon onFavoriteChanges={this.handleFavorites} />
      </div>
    );
  }
}

export default App;
