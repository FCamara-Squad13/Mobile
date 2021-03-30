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
      <Hero />
      <div className="container">
        <Card />
        <HomeCard />
      </div>
    </>
  );
};

export default App;
