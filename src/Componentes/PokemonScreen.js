import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";
import styled from "styled-components"
import GlobalStateContext from "./GlobalStateContext";


const PokemonStyled = styled.div`
    display: flex;
    border: 2px solid #CCC;
    background-color: #CCC;
    width: 200px;
    height: 200px;
    margin: 10px;
    flex-direction: column;
p{
    text-align: center;
    font-size: 18px;
}
button{
    width: 80px;
    margin: 10px;
}

`;
const ImageStyled = styled.div`
    margin: auto;
    align-items: center;
`;

const PokemonScreen = ({pokemon, isPokedex}) => {

    const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStateContext)

    const navigate = useNavigate()
    const goToDetail = (name) => {
        navigate(`/pokemon/${name}`)
    }

   const addToPokedex = () => {
        const pokeIndex = pokemons.findIndex((item) => item.name === pokemon.name)
        const newPokemonsList = [...pokemons]
        newPokemonsList.splice(pokeIndex, 1)
        const orderPokemons = newPokemonsList.sort((a, b) => {
            return a.id - b.id
        })

        const newPokedexList = [...pokedex, pokemon]
        const orderPokedex = newPokedexList.sort((a, b) => {
            return a.id - b.id
        })

        setPokedex(orderPokedex)
        setPokemons(orderPokemons)
    }

   const removeFromPokedex = () => {
        const pokeIndex = pokedex.findIndex((item) => item.name === pokemon.name)
        const newPokedexList = [...pokedex]
        newPokedexList.splice(pokeIndex, 1)
        const orderPokedex = newPokedexList.sort((a, b) => {
            return a.id - b.id
        })
        

        const newPokemonsList = [...pokemons, pokemon]
        const orderPokemons = newPokemonsList.sort((a, b) => {
            return a.id - b.id
        })

        setPokedex(orderPokedex)
        setPokemons(orderPokemons)
    }
    return(
        <PokemonStyled>
        <ImageStyled>
            <p>{pokemon.name}</p>
        <img src={pokemon.sprites.front_default} />
        </ImageStyled>
        <div>
        <Button color={"primary"}
        onClick={isPokedex ? removeFromPokedex : addToPokedex}
        >{isPokedex ? "Remover" : "Adicionar"}</Button>
        <Button onClick={() => goToDetail(pokemon.name)} color={"secondary"}>Detalhes</Button>
        </div>
        
        </PokemonStyled>
    )
}
export default PokemonScreen