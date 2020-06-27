import React from 'react';
import Pokecard from  "./Pokecard";
import "./Pokedex.css";

const PokeDex = (props) => {
    return (
    
    <div className="Pokedex">
      <h2 className="Pokedex-title">Pokedex</h2>
      <div className="Pokedex-cards">
            {props.pokemon.map(el => (
               <Pokecard id={el.id} name={el.name} type={el.type} base_experience={el.base_experience} /> 
            ))}
            </div>
        </div>
    )
}
PokeDex.defaultProps ={
    pokemon: [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
      ]
}
// const ShoppingCart = ({ items, username }) => {
//     const total = items.reduce((acc, i) => {
//       return acc + i.price * i.quantity
//     }, 0)
//     return (
//       <div className="ShoppingCart">
//         <h1 className="ShoppingCart-header">{username}'s Shopping Cart</h1>
//         <div>
//           {items.map(i => (
//             <CartItem key={i.id} item={i.name} img={i.img} price={i.price} quantity={i.quantity} />
//           ))}
//         </div>
//         <b className="ShoppingCart-total">Cart Total: ${total}</b>
//       </div>
//     )
//   }

// const Pokedex = createPokeCard(pokeList)
export default PokeDex;