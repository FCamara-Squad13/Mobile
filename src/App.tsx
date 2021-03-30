import React from "react";
import "./App.css";

import Home from "./pages/Home";

import Card from "./components/Card";
import HomeCard from "./components/HomeCard";

// import Card from "./components/Card";
import Hero from "./components/Hero";


const App: React.FC = () => {
  return (
    <>
      <Home />

      <div className="container">
        <Card />
        <HomeCard />
      </div>

      <Hero />

    </>
  );
};

export default App;
