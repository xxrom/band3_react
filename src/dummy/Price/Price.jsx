import React, { Component } from 'react';

import './Price.css';

class Price extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priceOld: 3490,
      priceNew: 2490,
    };
  }
  render() {
    const { priceOld, priceNew } = this.state;
    // const discount = Math.ceil(((priceOld - priceNew) / priceOld) * 100);
    const benefit = Math.round(priceOld - priceNew);

    return (
      <div className="price">
        <div className="price-old__wrapper">
          <div className="price_old">
            {priceOld} &#8381; <span className="price_old_line" />
          </div>

          <div className="price_benefit">Выгода {benefit} &#8381;</div>
        </div>
        <div className="price_new">
          {priceNew}
          <span className="price_currency"> &#8381;</span>
        </div>
      </div>
    );
  }
}

export { Price };
