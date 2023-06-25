import { styled } from "styled-components";

export const HeaderComponent = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding:0 2rem ;
width: 100%;
height: 7rem;
background-color: rgba(229, 230, 228, 0.2);
z-index: 10;
h1{
    font-size: 4.5rem;
    color: #E5E6E4;
    flex: 1;
}

`

export const InputSearch = styled.input`
width: 20rem;
height: 3rem;
border: 0;
padding: 0.5rem;
font-size: 1rem;
`

export const SearchButton = styled.button`
width: 5rem;
height: 3rem;
border: 0;
background-color: #F15025;
color: #FFF;
`