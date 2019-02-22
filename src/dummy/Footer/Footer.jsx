import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer__wrapper">
        <div className="footer__text">
          Разработано{' '}
          <a className="footer__myhref" href="https://chernyshov.netlify.com/">
            Chernyshov
          </a>
        </div>
      </div>
    );
  }
}

export { Footer };
