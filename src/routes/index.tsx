import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Teste from "../pages/Teste";
import Doando from "../pages/Doando";
import Precisando from "../pages/Precisando";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/doacao" component={Doando} />
    <Route path="/precisando" component={Precisando} />
    <Route path="/teste" component={Teste} />
  </Switch>
);

export default Routes;
