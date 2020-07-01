import React, { Component } from "react";
import Menu from "../../../Menu";
import "./Products.css";

const menu = Menu.menu;

class Products extends Component {
  state = {
    menu
  }
  render() {
    return (
      <div className="productContainer">
        <ul className="listado">
          {this.state.menu.map((product) => {
            return (
              <div className="containerCard" key={product.id}>
                <div className="productCard" >
                  <span className="card-price">{product.price}</span>
                  <img src={product.img} alt="menu icon" className="item-img" />
                  <span className="card-name">{product.name}</span>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Products;
