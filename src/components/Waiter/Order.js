import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import db from "../../firebase.js";
class Order extends Component {
  state = {
    items: [],
    productName: "",
    price: "",
  };

  componentDidMount() {
    db.collection("ordenes").onSnapshot((snapShots) => {
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
    db.collection("ordenes").doc(id).delete();
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <Table striped bordered hover size="sm">
          <thead>
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
                    <Button
                      color="danger btnCircle"
                      onClick={() => this.delete(item.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              )) : null
            }
          </tbody>
        </Table>
      </div>
    );
  }
}
export default Order;
