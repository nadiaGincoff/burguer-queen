import React, { Component } from "react";
import Products from "../components/Waiter/Product.js";
import ClientInfo from "../components/Waiter/ClientInfo.js";
import "./Waiter.css";
import "../pages/Home.css";
import Order from "../components/Waiter/Order";
import Menu from "../Menu";
import "../components/Waiter/ClientInfo.css";
import db from "../firebase.js";

const menu = Menu.menu;
class Waiter extends Component {
  //variables locales o atributos
  // Creamos un array vacio para despues agregarle los productos.
  products = [];

  constructor() {
    super();
    this.state = {
      menu,
      clientInfo: [],
    };
    // guarda una referencia al componente Order para utilizar sus funciones
    this.orderElement = React.createRef();
  }

  incrementProductQuantity = (product) => {
    //1: buscar el producto que quiero incrementar en this.products
    const index = this.products.findIndex((prod) => product.name === prod.name);
    //2: incrementar el atributo quantity +1
    this.products[index].quantity += 1;

    //3: Recargar Order con producto actualizados
    this.orderElement.current.loadProducts(this.products);
  };

  decrementProductQuantity = (product) => {
    //1: buscar el producto que quiero incrementar en this.products
    // Devuelve el indice del producto en el array products
    const index = this.products.findIndex((prod) => product.name === prod.name);

    if (this.products[index].quantity <= 1) {
      return;
    }

    //2: incrementar el atributo quantity +1
    this.products[index].quantity -= 1;

    //5: Recargar Order con producto actualizados
    this.orderElement.current.loadProducts(this.products);
  };

  saveProduct = (product) => {
    const index = this.products.findIndex((prod) => product.name === prod.name);
    // El index es -1 cuando no encuentra elemento, si ya existe, no se vuelve a agregar
    if (index >= 0) {
      return;
    }
    this.products.push(product);
    this.orderElement.current.loadProducts(this.products);
  };

  deleteProduct = (product) => {
    const index = this.products.findIndex((prod) => product.name === prod.name);
    this.products.splice(index, 1);
    this.orderElement.current.loadProducts(this.products);
  };

  // Actualizar estado con informacion de cliente
  saveInputValues = (clientInfo, text) => {
    this.setState({
      [clientInfo]: text,
    });
    console.log(text);
  };

  sendToKitchen = () => {
    // Utilizamos la referencia
    const total = this.orderElement.current.state.total;

    db.collection("orders").add({
      client: {
        name: this.state.clientName,
        table: this.state.clientTable,
      },
      products: this.products,
      total: "$" + total,
      date: "",
      state: "in progress",
    });
  };

  render() {
    return (
      <div className="waiterContainer">
        <header className="header"> </header>
        <div className="newOrderInfo">
          <div className="clientInfo">
            <ClientInfo
              onChange={this.saveInputValues}
              type="text"
              placeholder="Ingrese nombre de cliente"
              name="clientName"
              className="clientName"
            />
            <ClientInfo
              onChange={this.saveInputValues}
              type="number"
              placeholder="N° Mesa"
              name="clientTable"
              className="clientTable"
            />
          </div>
          <div>
            <h1> Desayuno </h1> <hr size="3px" />
            {this.state.menu
              .filter((product) => {
                return product.type === "breakfast";
              })
              .map((product) => {
                return (
                  <Products
                    save={this.saveProduct}
                    delete={this.deleteProduct}
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    img={product.img}
                  />
                );
              })}
          </div>
          <div>
            <h1> Almuerzo </h1> <hr size="3px" />
            {this.state.menu
              .filter((product) => {
                return product.type === "launch";
              })
              .map((product) => {
                return (
                  <Products
                    save={this.saveProduct}
                    delete={this.deleteProduct}
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    img={product.img}
                  />
                );
              })}
          </div>
          <div>
            <h1> Para beber </h1> <hr size="3px" />
            {this.state.menu
              .filter((product) => {
                return product.type === "drinks";
              })
              .map((product) => {
                return (
                  <Products
                    save={this.saveProduct}
                    delete={this.deleteProduct}
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    img={product.img}
                  />
                );
              })}
          </div>
        </div>
        <div className="containerOrder">
          <div className="order">
            <Order
              ref={this.orderElement}
              delete={this.deleteProduct}
              increment={this.incrementProductQuantity}
              decrement={this.decrementProductQuantity}
            ></Order>
          </div>
          <div className="summary">
            <button className="buttonEnviar" onClick={this.sendToKitchen}>
              Enviar a cocina
            </button>
            <button className="buttonCancelar"> Cancelar pedido </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Waiter;
