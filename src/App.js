import React from "react";
import Waiter from "./pages/Waiter";
import Home from "./pages/Home";
import Cocina from "./pages/Cocina";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/mesero">
            <Waiter />
          </Route>
          <Route path="/cocina">
            <Cocina />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
