import React, { Component } from 'react';

import './ProductText.css';

class ProductText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="product-text__wrapper">
        <div className="product-text__header">
          {`Спортивный Браслет
          Mi Band 3`}
        </div>
      </div>
    );
  }
}

export { ProductText };
