import React, { Component } from "react"; // quotes

class Welcome extends Component {
  // react/prefer-stateless-function
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
