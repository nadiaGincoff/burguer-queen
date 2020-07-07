import React, { Component } from 'react';
import "./Home.css";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

class Home extends Component {
  render() {
    return (
      <Link to="/">
        <div className="cotenedorInicial">
          <img src={logo} alt="logo" className="logo"></img>
          <div className="containerButton">
            <Link to="/mesero"><button className="button">Ingresar pedido</button></Link>
            <Link to="/cocina"><button className="button">Ingresar a cocina</button></Link>
          </div>
        </div>
      </Link>
    );
  }
}

export default Home;
