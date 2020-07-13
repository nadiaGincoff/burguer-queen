import React, { Component } from "react";
import { Table } from "reactstrap";
import icon from "../../img/icon-delete.png";

class Order extends Component {
  state = {
    products: [],
    total: 0,
  };

  sumTotal = () => {
    let preTotal = 0;
    this.state.products.forEach((product) => {
      preTotal += product.price * product.quantity;
    });
    this.setState({ total: preTotal });
  };

  // Se guarda una copia de los productos en el state de order
  loadProducts = (products) => {
    this.setState({ products: products });
    this.sumTotal();
  };

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
              ? products.map((product, key) => (
                  <tr key={key}>
                    <td>
                      <div>
                        <button
                          onClick={() => {
                            this.props.increment(product);
                          }}
                        >
                          +
                        </button>
                        <input
                          className="quantity-input__screen"
                          type="text"
                          value={product.quantity}
                        />
                        <button
                          onClick={() => {
                            this.props.decrement(product);
                          }}
                        >
                          -
                        </button>
                      </div>
                    </td>
                    <td>{product.name}</td>
                    <td>{"$" + product.price * product.quantity}</td>
                    <td>
                      <img
                        src={icon}
                        onClick={() => {
                          this.props.delete(product);
                        }}
                        className="icon-delete"
                      />
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th>Total</th>
              <th>{"$" + this.state.total}</th>
            </tr>
          </tfoot>
        </Table>
      </div>
    );
  }
}

export default Order;
