import React, { Component } from "react";
import "./Kitchen.css";
import db from "../firebase";
class Kitchen extends Component {
  state = {
    order: [],
  };

  componentDidMount(date, asc) {
    db.collection("orders")
      .orderBy("date", "asc")
      .onSnapshot((snapShots) => {
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

/* TO DO:

1: Obtener fecha actual al hacer click en el checkbox
2: Comparar y obtener diferencia conlafecha de creacion
3: Actualizar el pedido con nuevo estado, fecha de entrega, tiempo de espera

*/
