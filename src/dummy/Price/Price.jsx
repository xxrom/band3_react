import React, { PureComponent } from 'react';

import './Price.css';

class Price extends PureComponent {
  render() {
    return (
      <div className="price">
        <div className="price_old">200 руб.</div>
        <div className="price_new">150 руб.</div>
        <div className="price_discount">Скидка 25%</div>
      </div>
    );
  }
}

export { Price };
