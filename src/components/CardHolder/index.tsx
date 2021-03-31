import React from "react";

import HomeCard from "../HomeCard";

import canetas from "../../assets/images/Canetas.png";
import lapis from "../../assets/images/Lapis.jpg";
import lancheira from "../../assets/images/Lancheira.jpg";

const CardHolder: React.FC = () => {
  return (
    <>
      <HomeCard imagePath={canetas} />
      <HomeCard imagePath={lapis} />
      <HomeCard imagePath={lancheira} />
    </>
  );
};

export default CardHolder;
