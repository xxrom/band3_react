import React, { Component } from 'react';

import './Footer.css';
import { Background } from './background';
import worker from 'worker-loader!./workers/background.worker.js';

class Footer extends Component {
  componentDidMount() {
    console.log('cdm', worker);
    const background = new Background(10, new worker());
    // time ms
    // 50 N*N 300 +-
    // 50 1/2*N*N 150 +-
    // 50 with workers 70 +-
    background.run();
  }

  render() {
    return (
      <div className="footer__wrapper">
        <canvas
          id="myCanvas"
          className="footer-canvas"
          width="400"
          height="200"
        />
        <div className="footer_text">Footer</div>
      </div>
    );
  }
}

export { Footer };
