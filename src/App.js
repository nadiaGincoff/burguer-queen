import React from "react";
import Waiter from "./pages/Waiter";
import Home from "./pages/Home";
import Kitchen from "./pages/Kitchen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ticket from "./pages/Ticket";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/boleta">
          <Ticket />
        </Route>
        <Route path="/mesero">
          <Waiter />
        </Route>
        <Route path="/cocina">
          <Kitchen />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
