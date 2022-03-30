import React, { useContext } from "react"
import GlobalStateContext from "./GlobalStateContext"
import PokemonScreen from "./PokemonScreen"
import styled from "styled-components"
import { useNavigate } from "react-router";

const StyledPokedexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;



const Pokedex = () => {
   
    const {pokedex} = useContext(GlobalStateContext)
    return(
        <div>
        <StyledPokedexContainer>
            {pokedex && pokedex.map((poke) => {
                return <PokemonScreen key={poke.name} isPokedex pokemon={poke}/>
            })}
        </StyledPokedexContainer>
        </div>
    )
}
export default Pokedex