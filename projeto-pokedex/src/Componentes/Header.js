import { Button } from "@material-ui/core";
import { logDOM } from "@testing-library/dom"
import React from "react"
import { useNavigate } from "react-router"
import styled from "styled-components"



const StyledContainer = styled.div`
    display: flex;
    height: 80px;
    background-color: red;
    justify-content: space-around;
    padding: 10px;
    background-image: url("https://logosmarcas.net/wp-content/uploads/2020/05/Pokemon-Logo-650x366.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 200px;
`;

const Header = () => {
    const navigate = useNavigate()

    const goToPokedex = () => {
        navigate("/list")
    }
    const goToHome = () => {
        navigate("/")
    }

    return(
        <StyledContainer>
        <div>
            <Button onClick={goToHome} variant={"contained"} color={"primary"}>Inicio</Button>
            </div>
            <div>
            <Button onClick={goToPokedex} variant={"contained"} color={"primary"}>Pokedex</Button>
            </div>
        </StyledContainer>
    )
}
export default Header