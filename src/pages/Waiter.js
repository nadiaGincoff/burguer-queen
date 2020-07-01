import React, { Component } from "react";
import Products from "../components/Waiter/Products/Products.js";
import ClientInfo from "../components/Waiter/ClientInfo/ClientInfo.js";
import "./Waiter.css";
import "../pages/Home.css";

class Waiter extends Component {
  render() {
    return (
      <div className="waiterContainer">
        <header className="header">Mesero</header>
        <div className="newOrderInfo">
          <div>{<ClientInfo />}</div>
          <div>{<Products />}</div>
        </div>
        <div className="order">
          <div className="summary">
            <button className="buttonEnviar">Enviar a cocina</button>
            <button className="buttonCancelar">Cancelar pedido</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Waiter;
