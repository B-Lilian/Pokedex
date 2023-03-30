import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PokemonCard from "./components/PokemonCard.jsx";



function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickNext = () => {
    if (pokemonIndex < pokemonList.length - 1)
    setPokemonIndex(pokemonIndex + 1)
  }

    const handleClickPrevious = () => {
      if (pokemonIndex > 0)
      setPokemonIndex(pokemonIndex -1)
    }
  

  return <div className="App">
    <PokemonCard pokemon = {pokemonList[pokemonIndex]}/>
    <button onClick={handleClickPrevious}>Previous</button>
    <button onClick={handleClickNext}>Next</button>
    
  </div>;
}

 
  
 


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];



export default App;
