import React, { Component } from 'react';
import {initializeToken} from "../initializeToken"
class App extends Component {
  render() {
      initializeToken()
    return (
        <div className="container-fluid">

            {this.props.children}
        </div>
    );
  }
}

export default App
