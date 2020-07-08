import React, { Component } from "react";
import Products from "../components/Waiter/Products.js";
import ClientInfo from "../components/Waiter/ClientInfo.js";
import "./Waiter.css";
import "../pages/Home.css";
import Order from "../components/Waiter/Order";
import Menu from "../Menu";
import "../components/Waiter/ClientInfo.css";
import db from '../firebase.js';


const menu = Menu.menu;
class Waiter extends Component {
  constructor() {
    super();
    this.state = {
      menu,
      clientInfo: [],
      products: [],
      date: '',
      state: '',
    };
  }

  componentDidMount() {
    db.collection('products').get().then((querySnapshot) => { // Entramos a los datos de firebase
      const product = querySnapshot.docs.map(doc => doc.data());// Recorremos los datos
      this.setState({
        products: product // Actualizamos el estado del array con los datos de nuestra colección
      })
    })
  }

  // Actualizar estado con informacion de cliente
  saveInputValues = (clientInfo, text) => {
    this.setState({
      [clientInfo]: text
    })
    console.log(text)
  }

  getNameAndPrice(props) {
    let itemName = props.name;
  }

  sendToKitchen = () => {
    db.collection('orders').add({
      client: {
        name: this.state.clientName,
        table: this.state.clientTable,
      },
      products: this.state.products,
      date: '',
      state: "in progress",
    })
  }

  render() {
    return (
      <div className="waiterContainer">
        <header className="header"></header>
        <div className="newOrderInfo">
          <div className='clientInfo'>
          <ClientInfo
            onChange={this.saveInputValues}
            type='text'
            placeholder='Ingrese nombre de cliente'
            name='clientName'
            className='clientName'
          />
          <ClientInfo
            onChange={this.saveInputValues}
            type='number'
            placeholder='N° Mesa'
            name='clientTable'
            className='clientTable'
          />
          </div>
          <div>
              <h1>Desayuno</h1>
              <hr size="3px" />
          { this.state.menu.filter((product) => {
            return (
              product.type === "breakfast"
            )
          }).map((product) => {
              return (
                <Products
                  onClick={this.getNameAndPrice(product)}
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  img={product.img}
                />
              )
          })
          }
          </div>
          <div>
              <h1>Almuerzo</h1>
              <hr size="3px" />
          { this.state.menu.filter((product) => {
            return (
              product.type === "launch"
            )
          }).map((product) => {
              return (
                <Products
                  onClick={this.getNameAndPrice(product)}
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  img={product.img}
                />
              )
            })
          }
          </div>
          <div>
              <h1>Para beber</h1>
              <hr size="3px" />
          { this.state.menu.filter((product) => {
            return (
              product.type === "drinks"
            )
          }).map((product) => {
              return (
                <Products
                  onClick={this.getNameAndPrice(product)}
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  img={product.img}
                />
              )
            })
          }
          </div>
        </div>
        <div className="containerOrder">
          <div className="order">
          <Order></Order>
          </div>
          <div className="summary">
            <button className="buttonEnviar" onClick={this.sendToKitchen}>Enviar a cocina</button>
            <button className="buttonCancelar">Cancelar pedido</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Waiter;
