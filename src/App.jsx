import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

import './App.css';
import { Menu } from './dummy/Menu';
import { PlusesTable } from './dummy/PlusesTable';
import { Footer } from './dummy/Footer';
import Product from './smart/Product';
import TextWithVideo from './smart/TextWithVideo';
import PhoneDialog from './smart/PhoneDialog';

class App extends Component {
  render() {
    return (
      <>
        <div className="background_gradient" />
        <Menu siteName="techcatch" />
        <Product />
        <TextWithVideo />
        <PhoneDialog />
        <PlusesTable />
        <Footer />
      </>
    );
  }
}

export default hot(App);
