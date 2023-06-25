import React from "react";
import { CardContainer, GameImage, LearnButton, Title } from "./style.jsx";

const Cards = ({
  imgProp,
  text,
  platform,
  genre,
  developer,
  description,
  releasedate,
  link = "https://google.com",
  id,
}) => {
  return (
    <CardContainer id={id}>
      <GameImage src={imgProp} />
      <Title>{text}</Title>
      <h2>Plataforma: {platform}</h2>
      <h2>Gênero: {genre}</h2>
      <h2>Desenvolvedor: {developer}</h2>
      <div>
        <h2>Descrição: {description}</h2>
        <h2>Data de Lançamento: {releasedate}</h2>
        <a href={link} target="_blank">
          {" "}
          Free to Game Profile
        </a>
      </div>
      <LearnButton>Saiba Mais</LearnButton>
    </CardContainer>
  );
};

export default Cards;
