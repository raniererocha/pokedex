import styled from "styled-components";

export const Container = styled.div`
	flex: 1;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const PokemonCard = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	border-radius: 5px;
	box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
	overflow: hidden;
`;
export const PokeTitle = styled.h2`
	padding: 10px;
	text-transform: capitalize;
`;

export const PokeImg = styled.img`
	width: 350px;
`;
export const PokeInfo = styled.div`
	width: 100%;
	padding: 15px 30px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	background-color: red;
	color: white;
`;
export const Abilities = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;

	gap: 5px;
`;
export const Ability = styled.li`
	background-color: coral;
	padding: 5px 10px;
	border-radius: 15px;
	text-transform: capitalize;
	color: black;
`;

export const Tag = styled.span`
	background-color: coral;
	padding: 5px 10px;
	border-radius: 15px;
	margin: 5px;
	color: black;
`;

export const IdleLogo = styled.img`
 width: 50%;
 opacity: .3;
`