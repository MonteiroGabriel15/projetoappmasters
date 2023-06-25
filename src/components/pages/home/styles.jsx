import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100vw;
  min-height: 100vh;
  background-color: #393d3f;
`;

export const CenterContainer = styled.div`
  min-height: 70%;
  background-color: rgba(229, 230, 228, 0.2);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 30rem));
  grid-gap: 3.125rem;
  width: 85vw;
  justify-content: center;
  padding-top: 40px;
  @media all and (max-width: 600px) {
    width: 100%;
    height: 100%;
    grid-template-columns: initial;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
`;

export const Controller = styled.img`
  width: 20%;
  position: absolute;
  top: 0;
  right: 0;
  @media all and (max-width: 768px) {
    display: none;
  }
`;
