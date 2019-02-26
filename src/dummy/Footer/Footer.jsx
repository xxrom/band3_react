import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer__wrapper">
        <div className="footer">
          <div className="footer__line" />
          <div className="footer__info">
            <a
              className="footer__developer"
              target="_blank"
              href="https://chernyshov.netlify.com/"
            >
              <div className="footer__developer_text">Разработано</div>
              <div className="footer__developer_by">by</div>
              <div className="footer__developer_me">Chernyshov</div>
            </a>
            <a className="footer__email" href={`mailto:chernyshovnm@gmail.com`}>
              <div className="email-img" />
              <div className="email-text">techcatch@inbox.ru</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export { Footer };
