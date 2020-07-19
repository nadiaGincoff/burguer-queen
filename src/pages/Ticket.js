import React, { Component } from "react";
import "./Ticket.css";
import db from "../firebase";
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
      <div className="ticketContainer">
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
            <p className="ticketName">Cliente : {item.name}</p>
            <hr></hr>
            <p className="ticketDateEntrada">Hora entrada : {item.date}</p>
            <p className="ticketDateSalida">
              Hora salida : {item.readyOrderDate}
            </p>
            <hr></hr>
            {item.data.map((product) => {
              return (
                <div className="ticketProducts">
                  <p className="productNameTicket">{product.name}</p>
                  <p className="productQuantifyTicket">{product.price}</p>
                </div>
              );
            })}
            <hr></hr>
            <p className="ticketTotal">Total a Pagar : {item.total}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Ticket;
