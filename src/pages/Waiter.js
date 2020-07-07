import React, { Component } from "react";
import Products from "../components/Waiter/Products.js";
import ClientInfo from "../components/Waiter/ClientInfo.js";
import "./Waiter.css";
import "../pages/Home.css";
import Order from "../components/Waiter/Order";
import Menu from "../Menu";

const menu = Menu.menu;
class Waiter extends Component {
  constructor() {
    super();
    this.state = {
      menu,
    };
  }

  getNameAndPrice(props) {
    let itemName = props.name;
  }

  render() {
    return (
      <div className="waiterContainer">
        <header className="header"></header>
        <div className="newOrderInfo">
          <div>{<ClientInfo />}</div>
          <div>
              <h1>Desayuno</h1>
              <hr size="3px" />
          { this.state.menu.filter((props) => {
            return (
              props.type === "breakfast"
            )
          }).map((props) => {
              return (
                <Products
                  onClick={this.getNameAndPrice(props)}
                  key={props.id}
                  name={props.name}
                  price={props.price}
                  img={props.img}
                />
              )
          })
          }
          </div>
          <div>
              <h1>Almuerzo</h1>
              <hr size="3px" />
          { this.state.menu.filter((props) => {
            return (
              props.type === "launch"
            )
          }).map((props) => {
              return (
                <Products
                  onClick={this.getNameAndPrice(props)}
                  key={props.id}
                  name={props.name}
                  price={props.price}
                  img={props.img}
                />
              )
            })
          }
          </div>
          <div>
              <h1>Para beber</h1>
              <hr size="3px" />
          { this.state.menu.filter((props) => {
            return (
              props.type === "drinks"
            )
          }).map((props) => {
              return (
                <Products
                  onClick={this.getNameAndPrice(props)}
                  key={props.id}
                  name={props.name}
                  price={props.price}
                  img={props.img}
                />
              )
            })
          }
          </div>
        </div>
        <div className="containerOrder">
          <div className="order">
          <Order></Order>
          </div>
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
