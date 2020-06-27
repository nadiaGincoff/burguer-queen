import React from "react";
import Contador from "./pages/Contador";
import Mesero from "./pages/Mesero";
import Home from "./pages/Home";
import Cocina from "./pages/Cocina";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/mesero">Mesero</Link>
          <Link to="/cocina">Cocina</Link>
          <Link to="/contador">Contador</Link>
        </div>
        <Switch>
          <Route path="/contador">
            <Contador />
          </Route>
          <Route path="/mesero">
            <Mesero />
          </Route>
          <Route path="/cocina">
            <Cocina />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
