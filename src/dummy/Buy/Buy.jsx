import React, { Component } from 'react';

import './Buy.css';

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <button className="buy-btn">Купить</button>;
  }
}

export { Buy };
