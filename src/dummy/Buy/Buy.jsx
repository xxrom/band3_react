import React, { Component } from 'react';

import './Buy.css';

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mini: props.mini ? 'buy-btn_mini' : '',
    };
  }
  render() {
    return <button className={`buy-btn ${this.state.mini}`}>Купить</button>;
  }
}

export { Buy };
