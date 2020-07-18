import React, { Component } from "react";
import "./Ticket.css";
import db from "../firebase";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class Ticket extends Component {
  state = {
    order: [],
  };

  componentDidMount(date, desc) {
    db.collection("orders").onSnapshot((snapShots) => {
      this.setState({
        order: snapShots.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data().products,
            date: doc.data().date,
            name: doc.data().name,
            table: doc.data().table,
            total: doc.data().total,
            readyOrderDate: doc.data().finishedOrderDate,
          };
        }),
      });
    });
  }

  render() {
    const { order } = this.state;

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
          <Link to="/cocina">
            <div>
              <button className="goToKitchen">Cocina</button>
            </div>
          </Link>
        </header>
        {order.map((item, key) => (
          <div className="cardContainer" key={key}>
            <p className="kitchenName">Cliente : {item.name}</p>
            <hr></hr>
            <p className="kitchenDateEntrada">Hora entrada : {item.date}</p>
            <p className="kitchenDateSalida">
              Hora salida : {item.readyOrderDate}
            </p>
            <hr></hr>
            {item.data.map((product) => {
              //console.log(dato, "dato");
              return (
                <div className="kitchenProducts">
                  <p className="productName">{product.name}</p>
                  <p className="productQuantify">{product.price}</p>
                </div>
              );
            })}
            <hr></hr>
            <p className="kitchenTotal">Total a Pagar : {item.total}</p>

            <div className="imprimirBoleta">
              <Button color="success">Imprimir Boleta</Button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Ticket;
