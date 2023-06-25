import React from "react";
import { HeaderComponent, InputSearch, SearchButton } from "./style.jsx";

const Header = ({ onchange, onclick }) => {
  return (
    <HeaderComponent>
      {" "}
      <h1>PeterChen Games</h1>{" "}
      <div>
        <InputSearch
          placeholder="Pesquise Aqui"
          type="text"
          onChange={onchange}
        />
        <SearchButton onClick={onclick}>Pesquisar</SearchButton>
      </div>
    </HeaderComponent>
  );
};
export default Header;
