import React from "react";
import { LoaderContainer } from "./styles.jsx";

export const LoaderComponent = () => {
  return (
    <LoaderContainer>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderContainer>
  );
};
