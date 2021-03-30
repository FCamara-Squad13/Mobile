import React from "react";
import "./App.css";

import Home from "./pages/Home";

import Hero from "./components/Hero";
import Card from "./components/Card";
import HomeCard from "./components/HomeCard";

import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Home />
      <Hero />
      <div className="container">
        <Card />
        <HomeCard />
      </div>
      <Footer />
    </>
  );
};

export default App;
