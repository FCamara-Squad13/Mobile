import React from "react";
import { Search as Icon } from "react-feather";
import "./style.css";

const CategorySearch: React.FC = () => {
  return (
    <div className="search">
      <div className="input-search">
        <Icon color="#66331E" />
        <input
          placeholder="Digite aqui o que você está procurando"
          type="text"
        />
      </div>
    </div>
  );
};

export default Search;
