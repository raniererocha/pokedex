import { createContext, useContext, useEffect, useState } from "react";

const pokemonContext = createContext({});
export const PokemonProvider = (props) => {
	const [pokemons, setPokemons] = useState([]);
    const [filter, setFilter] = useState(0)
	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=840`)
			.then((resp) => resp.json())
			.then((resp) => setPokemons(resp.results));
	}, [filter]);

	return (
		<pokemonContext.Provider value={{pokemons, setPokemons, filter, setFilter}}>
			{props.children}
		</pokemonContext.Provider>
	);
};
export const usePokedex = () => useContext(pokemonContext);
