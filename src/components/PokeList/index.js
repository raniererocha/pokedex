import { usePokedex } from "../../providers/pokemonList";
import * as C from "./style";

export const PokeList = ({ props }) => {
	const { pokemons } = usePokedex();
	return (
		<C.List>
			{pokemons.map((pokemon, key) => (
				<C.ListItem onClick={() => props.setPokemonUrl(pokemon.url)} key={key}>
					{pokemon.name}
				</C.ListItem>
			))}
		</C.List>
	);
};
