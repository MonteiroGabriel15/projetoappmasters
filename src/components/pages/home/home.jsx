import React from "react";
import { CenterContainer, Container, Controller } from "./styles";
import Header from "../../micros/header";
import ImageController from "../../../assets/controller.png"
import Cards from "../../micros/cards";

const Home = () => {
    return(
        <Container>
            <Header/>
            <CenterContainer>
                <Cards imgProp={'https://www.freetogame.com/g/540/thumbnail.jpg'} text='sapatenis' platform={'PC (Windows)'} genre='shooter' developer={'Blizzard Entertainment'} />
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </CenterContainer>
            <Controller src={ImageController}/>
        </Container>
        
    )
}

export default Home