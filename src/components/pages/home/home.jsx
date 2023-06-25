import React, { useEffect, useState } from "react";
import { CenterContainer, Container, Controller } from "./styles.jsx";
import Header from "../../micros/header";
import ImageController from "../../../assets/controller.png";
import Cards from "../../micros/cards";
import { LoaderComponent } from "../../micros/loader/index";
import { AlertComponent } from "../../alert/index.jsx";
import axios from "axios";

const Home = () => {
  const [responseData, setResponseData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    data();
    if (sessionStorage.getItem("responseData")) {
      setLoader(false);
      setAlert(false);
      setResponseData(JSON.parse(sessionStorage.getItem("responseData")));
    }
  }, []);
  const data = async () => {
    setLoader(true);
    setAlert(false);
    const ApiAM = "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/";
    try {
      const response = await axios.get(ApiAM, {
        headers: {
          "Content-Type": "application/json",
          "dev-email-address": "gfonseca3117@gmail.com",
        },
      });
      return (
        setResponseData(response.data),
        sessionStorage.setItem("responseData", JSON.stringify(response.data)),
        setLoader(false),
        setAlert(false)
      );
    } catch (e) {
      console.log(e);
      setAlert(true);
    }
  };

  return (
    <Container>
      {loader && <LoaderComponent />}
      {alert && <AlertComponent text = "O servidor falhou em responder, tente recarregar a página"/>}
      <Header />
      <CenterContainer>
        {responseData.map((value, id) => (
          <Cards
            key={id}
            id={id}
            imgProp={value.thumbnail}
            text={value.title}
            platform={value.platform}
            genre={value.genre}
            developer={value.developer}
            description={value.short_description}
            releasedate={value.release_date}
            link={value.freetogame_profile_url}
          />
        ))}
      </CenterContainer>
      <Controller src={ImageController} />
    </Container>
  );
};

export default Home;
