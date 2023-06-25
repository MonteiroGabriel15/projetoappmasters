import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #e5e6e4;
  height: 500px;
  border-radius: 5px;
  transition: all 0.3s ease;
  @media all and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  div {
    border-radius: 5px;
    background-color: rgba(246, 166, 140, 0.6);
    width: 100%;
    height: 10rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    display: none;
  }

  h2 {
    color: #393d3f;
    font-size: 1.2rem;
    text-align: center;
  }

  &:hover {
    height: 600px;
  }
  &:hover div {
    display: flex;
  }
`;
export const GameImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;
export const LearnButton = styled.button`
  font-size: 1rem;
  border-radius: 5px;
  background-color: #f15025;
  width: 100%;
  height: 3rem;
  border: 0;
  color: #fff;
`;

export const Title = styled.h1`
  color: #393d3f;
`;
