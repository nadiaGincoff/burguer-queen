import React, { Component } from "react";
import { Table } from "reactstrap";
import icon from '../../img/icon-delete.png'

class Order extends Component {
  state = {
    products: [],
  };

  loadProducts = (products) => {
    this.setState({products: products})
  }

  render() {
    const { products } = this.state;

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
            {products.length > 0
              ? products.map((item, key) => (
                <tr key={key}>
                  <td>
                    <div>
                      <button onClick={() => {this.props.increment(item)}}>+
                      </button>
                        <input className="quantity-input__screen" type="text" value={item.quantity} />
                      <button onClick={() => {this.props.decrement(item)}}>-</button>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                  <img src={icon} onClick={() => { this.props.delete(item)}} className="icon-delete"/>
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
