import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Teste from "../pages/Teste";
import Doacao from "../pages/Doacao";
import pedindoDoacoes from "../pages/pedindoDoacoes";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/doacao" component={Doacao} />
    <Route path="/pedindo-doacoes" component={pedindoDoacoes} />
    <Route path="/teste" component={Teste} />
  </Switch>
);

export default Routes;
