import styled from "styled-components";

export const List = styled.ul`
    height: calc(100vh - 64px);
    width: 25%;
	overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin: 2px 0;
`;
export const ListItem = styled.li`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    color: white;
    cursor: pointer;
    border-radius: 2px;
    text-transform: capitalize;
    &:hover {
        opacity: .7;
    }
`