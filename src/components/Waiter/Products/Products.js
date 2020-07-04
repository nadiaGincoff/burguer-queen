import React, { Component } from "react";
import db from "../../../firebase.js";
import "./Products.css";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      ordenes: [],
      producto: "",
      price: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const itemName = this.props.name;
    db.collection("ordenes").add({
      producto: itemName,
    });
  }
  render() {
    return (
      <button
        className="containerCard"
        key={this.props.id}
        onClick={this.handleClick}
      >
        <div className="productCard">
          <div className="card-price">{this.props.price}</div>
          <img src={this.props.img} alt="menu icon" className="item-img" />
          <div className="card-name">{this.props.name}</div>
        </div>
      </button>
    );
  }
}

export default Products;
