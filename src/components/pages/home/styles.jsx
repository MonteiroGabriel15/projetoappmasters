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
  grid-template-columns: repeat(auto-fill, minmax(25rem, auto));
  grid-gap: 50px;
  width: 85vw;
  justify-content: center;
  padding-top: 40px;
`;

export const Controller = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;
