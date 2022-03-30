import React, { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "./url"
import GlobalStateContext from "./GlobalStateContext"


const GlobalState = (props) => {

    const [pokemonNames, setPokemonName] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    console.log("teste", pokemons)
    useEffect(() => {
        listPokemon()
    }, [])

    useEffect(() => {
        const newList = []
        pokemonNames.forEach((item) => {
            axios.get(item.url)
            .then((res) => {
                newList.push(res.data)
                if(newList.length === 121){
                    const orderList = newList.sort((a, b) => {
                        return a.id - b.id
                    })
                    setPokemons(orderList)
                }
            })
            .catch((erro) => {

            })
        })
    }, [pokemonNames])


    const listPokemon = () => {
        axios.get(`${BASE_URL}/pokemon?limit=200`)
        .then((res) => {
            console.log(res.data.results)
            setPokemonName(res.data.results)

        })
        .catch((erro) => {

        })
    }

    const data = {pokemons, setPokemons, pokedex, setPokedex}
    
    return(
      <GlobalStateContext.Provider value={data}>
          {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState