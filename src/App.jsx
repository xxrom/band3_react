import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

import './App.css';

import { Menu } from './dummy/Menu';
import ImageSlider from './smart/ImageSlider';

class App extends Component {
  render() {
    return (
      <div>
        <Menu siteName="techcatch." />
        <ImageSlider />
      </div>
    );
  }
}

export default hot(App);