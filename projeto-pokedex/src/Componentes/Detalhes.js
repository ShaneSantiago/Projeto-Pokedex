import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router";
import styled from "styled-components"
import GlobalStateContext from "./GlobalStateContext";
import Typography from "@material-ui/core/Typography";

const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 100vh;
    border: 2px solid #CCC;
    align-items: center;
div{
    border: 2px solid #CCC;
    background-color: #CCC;
    width: 200px;
    margin: 20px;
    text-align: center;
    height: 280px;
}
`;
const StyledText = styled.div`
    margin: 20px;
`;

const ImageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 150px;
    }
`;

const Detalhes = () => {
    const [selectedPokemon, setSelectedPokemon] = useState([])

    const {name} = useParams()
    const {pokemons} = useContext(GlobalStateContext)

    useEffect(() => {
        const currentPokemon = pokemons.find((item) => {
            return item.name === name
        })
        setSelectedPokemon(currentPokemon)
    }, [])

    return(
        <StyledContainer>
            <ImageStyled>
            <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.front_default} />
            <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.back_default} />
            </ImageStyled>
    
            <StyledText><strong>Status</strong>
               {selectedPokemon && selectedPokemon.stats &&
                selectedPokemon.stats.map((stat) => {
                    return(
                    <p key={stat.stat.name}>
                        {stat.stat.name}: {stat.base_stat}
                    </p>
                    )
                })}
                
            </StyledText>
            <div> <strong>Tipo</strong>
            {selectedPokemon && selectedPokemon.types &&
                selectedPokemon.types.map((type) => {
                    return <p key={type.type.name}> {type.type.name} </p>
                })}
                </div>
            <div><strong>Principais ataques</strong>
            {selectedPokemon && selectedPokemon.moves &&
                selectedPokemon.moves.map((move, index) => {
                    return(
                    index < 5 && <p key={move.move.name}>
                        {move.move.name}
                    </p>
                    )

                })}
                
            </div>
        </StyledContainer>
    )
}
export default Detalhes