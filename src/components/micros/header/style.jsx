import { styled } from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  height: 7rem;
  background-color: rgba(229, 230, 228, 0.2);
  z-index: 10;
  h1 {
    font-size: clamp(1rem, 2.5rem, 4.5rem);
    color: #e5e6e4;
    flex: 1;
    @media all and (max-width: 768px) {
      font-size: 2rem;
    }
  }
  @media all and (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

export const InputSearch = styled.input`
  width: 18rem;
  height: 3rem;
  border: 0;
  padding: 0.5rem;
  font-size: 1rem;
  @media all and (max-width: 768px) {
    width: 10rem;
  }
`;

export const SearchButton = styled.button`
  width: 5rem;
  height: 3rem;
  border: 0;
  background-color: #f15025;
  color: #fff;
`;
