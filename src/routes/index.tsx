import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Teste from "../pages/Teste";
import Doando from "../pages/Doando";
import Chat from "../pages/Chat";
import Precisando from "../pages/Precisando";
import Anunciar from "../pages/Anunciar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Detalhes from "../pages/Details";

const Routes: React.FC = () => (
  <>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/doando" component={Doando} />
      <Route path="/precisando" component={Precisando} />
      <Route path="/anunciar" component={Anunciar} />
      <Route path="/teste" component={Teste} />
      <Route path="/chat" component={Chat} />
      <Route path="/detalhes" component={Detalhes} />
    </Switch>
    <Footer />
  </>
);

export default Routes;
