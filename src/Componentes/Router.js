import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Pokedex from "./Pokedex"
import Detalhes from "./Detalhes"
import Header from "./Header"

const Router = () => {
    return(
        <BrowserRouter>
        <Header />
        <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>

        <Route exact path="list" element={<Pokedex/>}>
        </Route>

        <Route exact path="/pokemon/:name" element={<Detalhes />}>
        </Route>
        </Routes>

        </BrowserRouter>
    )
}
export default Router