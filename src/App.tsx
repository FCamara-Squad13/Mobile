import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Home />
      <Hero />
      <Card />
      <Footer />
    </>
  );
};

export default App;
