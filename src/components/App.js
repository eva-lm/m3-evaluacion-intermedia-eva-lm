import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="pokemonContainer">
        <h1 className="pokemonTitle">Mi lista de pokemon</h1>
        <ul className="pokemonUl">
          {Pokemon.map((item, index) => (
            <li className="pokemonName" key={`index${index}`}>
              <h2>{item.name}</h2>
              <p>{item.types}</p>
              <div className="imageContainer">
                <img
                  className="pokemonImage"
                  src={item.url}
                  alt="imagen pokemon"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
