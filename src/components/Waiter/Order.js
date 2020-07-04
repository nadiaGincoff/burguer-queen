import React, { Component } from "react";
import { Table, Button, Dropdown } from "reactstrap";
import db from "../../firebase";

class Order extends Component {
  state = {
    items: [],
    productos: "",
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

  render() {
    //this.state.items =
    const { items } = this.state;

    return (
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Cantidad</th>
              <th>Producto</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {items && items !== undefined
              ? items.map((item, cantidad, producto, key) => (
                  <tr key={key}>
                    <td>{item.data.cantidad}</td>
                    <td>{item.data.producto}</td>
                    <td>
                      <Button color="danger btnCircle">Eliminar</Button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Order;
