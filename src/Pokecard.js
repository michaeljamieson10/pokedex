import React from "react";
import './Pokecard.css';

const Pokecard = ({name,id,type,base_experience}) => (
  <div className="Pokecard">
        <div className="Pokecard-title">{ name }</div>
        <img className="Pokecard-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
        <div className="Pokecard-data">Type: {type}</div>
        <div className="Pokecard-data">EXP: {base_experience}</div>
      </div>
)

export default Pokecard;