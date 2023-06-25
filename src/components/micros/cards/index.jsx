import React from "react";
import { CardContainer, GameImage, LearnButton, Title } from "./style";

const Cards = ({ imgProp, text, platform, genre, developer, description, releasedate, link='https://google.com' }) => {
  return (
    <CardContainer>
      <GameImage src={imgProp} />
      <Title>{text}</Title>
      <h2>Plataforma: {platform}</h2>
      <h2>Gênero: {genre}</h2>
      <h2>Desenvolvedor: {developer}</h2>
      <div>
        <h2>Descrição: {description}</h2>
        <h2>Data de Lançamento: {releasedate}</h2>
        <a href={link} target='_blank'> aaaaaa</a>
      </div>
      <LearnButton>Saiba Mais</LearnButton>
    </CardContainer>
  );
};

export default Cards;
