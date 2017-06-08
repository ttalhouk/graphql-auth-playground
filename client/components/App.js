import React, { Component } from 'react';

import Header from "./Header";

class App extends React.Component {
  render () {
    return(
      <div className="container">
        <Header />
        {this.props.children}
      </div>
    )

  }
}

export default App;
