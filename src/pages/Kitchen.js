import React, { Component } from "react";
import "./Kitchen.css";
import db from "../firebase";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class Kitchen extends Component {
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
          <Link to="/boleta">
            <div className="generarBoleta">
              <Button color="warning" onClick={this.ticket}>
                Boletas
              </Button>
            </div>
          </Link>
        </header>
        {order.map((item, key) => (
          <div className="cardContainer" key={key.id}>
            <p className="kitchenName">{item.name}</p>
            <hr></hr>
            <p className="kitchenTable">Mesa : {item.table}</p>
            <p className="kitchenDate">{item.date}</p>
            <hr></hr>
            {item.data.map((product) => {
              //console.log(dato, "dato");
              return (
                <div className="kitchenProducts">
                  <p className="productName">{product.name}</p>
                  <p className="productQuantify">{product.quantity}</p>
                </div>
              );
            })}
            <hr></hr>
            <div className="listo">
              <p className="title"> Orden Lista</p>
              <div className="checkbox">
                <input id={key} type="checkbox" value="1" />
                <label for={key}></label>
              </div>
              <p className="titleDos"> Entregado</p>
              <div className="checkboxDos">
                <input id={key} type="checkbox" value="1" />
                <label for={key}></label>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Kitchen;
