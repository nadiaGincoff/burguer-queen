import React, { Component } from "react";
import "./ClientInfo.css";

class ClientInfo extends Component {
  state = {
    clientName: "",
    clientTable: "",
  };

  saveInputValues = (event) => {
    const text = event.target.value;

    this.setState({ text });

    this.props.onChange(this.props.name, text);

    console.log(text);
  };

  render() {
    return (
      <input
        placeholder={this.props.placeholder}
        type={this.props.type}
        className={this.props.className}
        value={this.state.text}
        onChange={this.saveInputValues}
      />
    );
  }
}

export default ClientInfo;
