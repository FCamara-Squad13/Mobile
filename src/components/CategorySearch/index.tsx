import React from "react";
import { Search as Icon, Menu } from "react-feather";

import "./style.css";

const CategorySearch: React.FC = () => {
  return (
    <div className="category-search">
      <div className="category">
        <Menu color="#4C4C4C" className="icon-menu" />
        <button type="button" className="button-category">
          Categorias
        </button>
      </div>
      <div className="input-holder">
        <Icon color="#66331E" className="search-icon" />
        <input
          placeholder="Digite aqui o que você está procurando"
          type="text"
          className="search-input"
        />
      </div>
    </div>
  );
};

export default CategorySearch;
