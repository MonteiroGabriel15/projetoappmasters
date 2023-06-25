import { styled } from "styled-components";

export const AlertContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40rem;
    height: 15rem;
    border-radius: 0.625rem;
    background-color: #f6a68c;
    padding: 1rem;
  }
  h1 {
    text-align: center;
  }
`;
