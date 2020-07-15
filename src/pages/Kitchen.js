import React, { Component } from "react";
import "./Kitchen.css";
import db from "../firebase";
import preparation from "../img/preparation.png";
import check from "../img/check.png";
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

  imgClick = (e) => {
    e.target.classList.add("preparationActive");
  };

  checkClick = (e) => {
    e.target.classList.add("checkActive");
  };

  render() {
    const { order } = this.state;
    return (
      <div className="kitchenContainer">
        <header className="header"> </header>
        {order.map((item, key) => (
          <div className="cardContainer" key={key}>
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
            <div className="checkbox">
              <input className="inputCheckbox" type="checkbox" /> Orden lista
              <input className="inputCheckbox" type="checkbox" /> Entregado
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Kitchen;
