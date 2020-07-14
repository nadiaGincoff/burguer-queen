import React, { Component } from "react";
import "./Kitchen.css";
import db from "../firebase";

class Kitchen extends Component {
  state = {
    order: [],
  };

  componentDidMount() {
    db.collection("orders").onSnapshot((snapShots) => {
      this.setState({
        order: snapShots.docs.map((doc) => {
          console.log(doc.data().products);
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
        <header className="header"> </header>
        {order.map((item, key) => (
          <div className="cardContainer" key={key}>
            <p className="name">Cliente : {item.name}</p>
            <p className="table">Mesa : {item.table}</p>
            <p className="date">Fecha : {item.date}</p>
            {item.data.map((product) => {
              return (
                <div>
                  <p>{product.name}</p>
                  <p>{product.quantity}</p>
                </div>
              );
            })}
            <p className="total">Total : {item.total}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Kitchen;
