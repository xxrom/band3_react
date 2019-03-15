import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';
setConfig({ disableHotRenderer: true });

import './App.css';
import { Menu } from './dummy/Menu';
import { PlusesTable } from './dummy/PlusesTable';
import { Footer } from './dummy/Footer';
import { Warranty } from './dummy/Warranty';
import { TextWithVideo } from './dummy/TextWithVideo';
import Product from './smart/Product';
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
        <Warranty />
        <Footer />
      </>
    );
  }
}

export default hot(App, { errorBoundary: false });
