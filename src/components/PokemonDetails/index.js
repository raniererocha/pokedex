import * as C from "./style";

export const PokemonDetails = ({ props }) => {
	if (props !== null) {
		return (
			<C.Container>
				<C.PokemonCard>
					<C.PokeTitle>
						{props.name} #{String(props.id).padStart(3, 0)}
					</C.PokeTitle>

					<C.PokeImg
						src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(
							props.id
						).padStart(3, 0)}.png`}
						alt="Pokemon"
					/>

					<C.PokeInfo>
						<C.Abilities>
							<p>Abilities:</p>
							{props.abilities.map((item, key) => (
								<C.Ability key={key}>
									<p>{String(item.ability.name).replace("-", " ")}</p>
								</C.Ability>
							))}
						</C.Abilities>
						<p>
							Weight: <C.Tag>{props.weight / 10}kg</C.Tag>
						</p>
						<p>
							Height: <C.Tag>{props.height / 10}m</C.Tag>
						</p>
					</C.PokeInfo>
				</C.PokemonCard>
			</C.Container>
		);
	} else {
		return (
			<>
				<C.Container>
					<C.IdleLogo src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pokebola-Pok%C3%A9mon-PNG.png" />
				</C.Container>
			</>
		);
	}
};
