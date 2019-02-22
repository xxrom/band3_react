import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

import './App.css';
import { Menu } from './dummy/Menu';
import { PlusesTable } from './dummy/PlusesTable';
import { Footer } from './dummy/Footer';
// import ImageSlider from './smart/ImageSlider';
import Product from './smart/Product';
import TextWithVideo from './smart/TextWithVideo';
import PhoneDialog from './smart/PhoneDialog';

class App extends Component {
  render() {
    return (
      <div>
        <div className="background_gradient" />
        <Menu siteName="techcatch." />
        <Product />
        <TextWithVideo />
        <PhoneDialog />
        <PlusesTable />
        <Footer />
        {/* <ImageSlider /> */}
      </div>
    );
  }
}

export default hot(App);
