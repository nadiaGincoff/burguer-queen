import React, { Component } from "react";
import './Home.css';
import { Link } from "react-router-dom";


class Home extends Component {
  render() {
    return (
      <Link to="/">
        <div className="cotenedorInicial">
          <h1 className="logo"></h1>
          <Link to="/mesero"><button className="button">Ingresar Pedido</button></Link>
          <Link to="/cocina"><button className="button">Ingresar a Cocina</button></Link>
        </div>
      </Link>
    );
  }
}

export default Home;
