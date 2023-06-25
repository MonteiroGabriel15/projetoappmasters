import React from "react";
import { HeaderComponent, InputSearch, SearchButton } from "./style";

const Header = ({onchange, onclick}) => {
  return (
    <HeaderComponent>
      {" "}
      <h1>PeterChenGames</h1>{" "}
      <InputSearch placeholder="Pesquise Aqui" type="text" onChange={onchange}/>
      <SearchButton onClick={onclick}>Pesquisar</SearchButton>
    </HeaderComponent>
  );
};
export default Header;
