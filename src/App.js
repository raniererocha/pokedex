import { useEffect, useState } from "react";
import { PokemonDetails } from "./components/PokemonDetails";
import { usePokedex } from "./providers/pokemonList";

import * as C from "./App.styled";
import { PokeList } from "./components/PokeList";

export const App = () => {
	const [currentPokemon, setCurrentPokemon] = useState(null);
	const [pokemonUrl, setPokemonUrl] = useState(null);

	useEffect(() => {
		if (pokemonUrl !== null) {
			fetch(pokemonUrl)
				.then((resp) => resp.json())
				.then((resp) => setCurrentPokemon(resp));
		}
	}, [pokemonUrl]);

	return (
		<>
			<C.Header>
				<h1>Pokedex</h1>
			</C.Header>

			<C.Container>
				<PokeList props={{ pokemonUrl, setPokemonUrl }} />
				<PokemonDetails props={currentPokemon} />
			</C.Container>
		</>
	);
};
