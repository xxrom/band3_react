import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

import './App.css';

import { Menu } from './dummy/Menu';
import ImageSlider from './smart/ImageSlider';
import Product from './smart/Product';
import TextWithVideo from './smart/TextWithVideo';

class App extends Component {
  render() {
    return (
      <div>
        <div className="background_gradient"> </div>
        <Menu siteName="techcatch." />
        <Product />
        <TextWithVideo />
        {/* <ImageSlider /> */}
      </div>
    );
  }
}

export default hot(App);
