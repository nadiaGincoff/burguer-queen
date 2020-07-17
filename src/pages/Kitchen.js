import React, { Component } from "react";
import "./Kitchen.css";
import db from "../firebase";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class Kitchen extends Component {
  state = {
    orders: [],
  };

  componentDidMount(date, desc) {
    db.collection("orders").onSnapshot((snapShots) => {
      this.setState({
        orders: snapShots.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data().products,
            date: doc.data().date,
            name: doc.data().name,
            table: doc.data().table,
            total: doc.data().total,
          };
        }),
      });
    });
  }

  // Obtenemos el elemento de la orden a traves de su ID para acceder a sus propiedades y actualizarlas.
  // find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada
  updateOrder = (orderId) => {

    let order = this.state.orders.find((order) => order.id === orderId);
    let date = new Date().toLocaleString();

    db.collection("orders")
      .doc(order.id)
      .update({
        finishedOrderDate: date,
        clientReady: true,
      })
      .then(() => {
        console.log("Document successfully updated!", 'actualizamos la fecha de orden :D');
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });

  };

  orderDelivered = (orderId) => {

    let order = this.state.orders.find((order) => order.id === orderId);

    db.collection("orders")
      .doc(order.id)
      .update({
        delivered: true,
      })
      .then(() => {
        // cambiar color del boton
        console.log("The order has been delivered!");
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  };

  render() {
    const { orders } = this.state;

    return (
      <div className="kitchenContainer">
        <header className="header">
        <Link to="/">
            <div>
              <button className="goToHome">Home</button>
            </div>
          </Link>
          <Link to="/mesero">
            <div>
              <button className="goToKitchen">Crear pedido</button>
            </div>
          </Link>
          <Link to="/boleta">
              <div>
                <button className="goToKitchen" onClick={this.ticket}>Boletas</button>
              </div>
          </Link>
        </header>
        {orders.map((order, key) => (
          <div className="cardContainer" key={key.id}>
            <p className="kitchenName">{order.name}</p>
            <hr className="hr"></hr>
            <p className="kitchenTable">Mesa : {order.table}</p>
            <p className="kitchenDate">{order.date}</p>
            <hr></hr>
            {order.data.map((product) => {
              //console.log(dato, "dato");
              return (
                <div className="kitchenProducts">
                  <p className="productName">{product.name}</p>
                  <p className="productQuantify">{product.quantity}</p>
                </div>
              );
            })}
            <hr className="hr"></hr>
            <div className="listo">
              <p className="title"> Orden Lista</p>
              <div className="checkbox">
                <button
                  onClick={() => {
                    this.updateOrder(order.id);
                  }}
                >
                  Pedido LISTO JEJE
                </button>
              </div>
              <p className="titleDos"> Entregado</p>
              <div className="checkboxDos">
                <button
                  onClick={() => {
                    this.orderDelivered(order.id);
                  }}
                >
                  PEDIDO ENTREGADO JEJEJKH
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Kitchen;
