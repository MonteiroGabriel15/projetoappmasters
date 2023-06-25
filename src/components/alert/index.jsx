import React from "react";
import { AlertContainer } from "./styles.jsx";

export const AlertComponent = ({text}) => {
  return (
    <AlertContainer>
      <div>
        <h1>{text}</h1>
      </div>
    </AlertContainer>
  );
};
