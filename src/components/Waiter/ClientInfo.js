import React, { Component } from "react";
import "./ClientInfo.css";

class ClientInfo extends Component {
  render() {
    return (
      <div className="clientInfo">
        <input
          placeholder="Ingrese nombre de cliente"
          type="text"
          className="clientName"
        />
        <input
          placeholder="Numero de mesa"
          type="number"
          className="clientTable"
        />
      </div>
    );
  }
}

export default ClientInfo;
