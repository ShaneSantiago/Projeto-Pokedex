import React, { useContext } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import GlobalStateContext from "./GlobalStateContext";
import PokemonScreen from "./PokemonScreen";

const ListaContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-wrap: wrap;
`;

const Home = () => {
    
const {pokemons} = useContext(GlobalStateContext)

const listaMapeada = pokemons.map((poke) => {
    return(
        <PokemonScreen key={poke.name} pokemon={poke}/>
    )
})
    
    return(
        <div>
        <ListaContainer>
        {listaMapeada}
        </ListaContainer>
        </div>
    )
}
export default Home