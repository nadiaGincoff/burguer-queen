import React, { Component } from "react";
import { Table } from "reactstrap";
import icon from "../../img/icon-delete.png";
import "./Order.css";
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

  fontStyle = {
    fontFamily: "Livvic",
  };

  trFooterStyle = {
    fontSize: "20px",
  };

  render() {
    const { products } = this.state;

    return (
      <div>
        <Table striped bordered hover size="sm" style={this.fontStyle}>
          <thead style={this.tHeadStyle}>
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
                      <div className="quantity">
                        <button
                          className="decrement"
                          onClick={() => {
                            this.props.decrement(product);
                          }}
                        >
                          -
                        </button>
                        <input
                          className="quantity-input"
                          type="text"
                          value={product.quantity}
                        />

                        <button
                          className="increment"
                          onClick={() => {
                            this.props.increment(product);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>{product.name}</td>
                    <td>{"$" + product.price * product.quantity}</td>
                    <td>
                      <img
                        src={icon}
                        alt="icon-delete"
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
              <th style={this.trFooterStyle}>Total</th>
              <th style={this.trFooterStyle}>{"$" + this.state.total}</th>
            </tr>
          </tfoot>
        </Table>
      </div>
    );
  }
}

export default Order;
