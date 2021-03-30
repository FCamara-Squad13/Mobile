import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Card from "./components/Card";

const App: React.FC = () => {
  return (
    <>
      <Home />
      <Card />
    </>
  );
};

export default App;
