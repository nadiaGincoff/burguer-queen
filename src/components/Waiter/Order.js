import React, { Component } from "react";
import { Table } from "reactstrap";
import db from "../../firebase.js";
import icon from '../../img/icon-delete.png'
class Order extends Component {
  state = {
    clientName: '',
    clientTable: '',
    items: [],
    productName: "",
    price: "",
    quantity: 0
  };

  componentDidMount() {
    db.collection("products").onSnapshot((snapShots) => {
      this.setState({
        items: snapShots.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        }),
      });
    });
  }

  delete = (id) => {
    db.collection("products").doc(id).delete();
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>Pedido para</tr>
            <tr>
              <th>Cantidad</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {items && items !== undefined
              ? items.map((item, key) => (
                <tr key={key}>
                  <td>{item.data.cantidad}</td>
                  <td>{item.data.productName}</td>
                  <td>{item.data.price}</td>
                  <td>
                  <img src={icon} onClick={() => this.delete(item.id)} className="icon-delete"/>
                  </td>
                </tr>
              )) : null
            }
          </tbody>
          <tfoot>
            <tr>
            <th></th>
            <th></th>
            <th>Total</th>
            <th>$7,750.00</th>
            </tr>
          </tfoot>
        </Table>
      </div>
    );
  }
}

export default Order;
