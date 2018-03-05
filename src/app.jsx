import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./landing";
import Search from "./search";

const FOF = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/search" component={Search} />
        <Route component={FOF} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
