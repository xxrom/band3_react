import React, { Component, Suspense, lazy } from 'react';
import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';
setConfig({ disableHotRenderer: true });

import './App.css';
import { Menu } from './dummy/Menu';
import Product from './smart/Product';

const TextWithVideo = lazy(() =>
  import(/* webpackChunkName: "TextWithVideo" */ './dummy/TextWithVideo').then(
    ({ TextWithVideo }) => ({ default: TextWithVideo })
  )
);

const PlusesTable = lazy(() =>
  import(/* webpackChunkName: "PlusesTable" */ './dummy/PlusesTable').then(
    ({ PlusesTable }) => ({ default: PlusesTable })
  )
);

import { Footer } from './dummy/Footer';
const Warranty = lazy(() =>
  import(/* webpackChunkName: "Warranty" */ './smart/Warranty').then(
    ({ Warranty }) => ({ default: Warranty })
  )
);
const CardVerticalSlider = lazy(() =>
  import(/* webpackChunkName: "CardVerticalSlider" */ './dummy/CardVerticalSlider').then(
    ({ CardVerticalSlider }) => ({ default: CardVerticalSlider })
  )
);
const PhoneDialog = lazy(() =>
  import(/* webpackChunkName: "PhoneDialog" */ './smart/PhoneDialog')
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000);
  }

  render() {
    if (this.state.loading) {
      return this.mainLoading();
    }

    const loading = (
      <div style={{ height: '100%', background: 'back', color: 'white' }}>
        Loading…
      </div>
    );

    return (
      <>
        <div className="background_gradient" />
        <Menu siteName="techcatch" />
        <Product />
        <Suspense fallback={loading}>
          <TextWithVideo />
        </Suspense>
        <Suspense fallback={loading}>
          <CardVerticalSlider direction="vertical" cardAlign="center" />
        </Suspense>

        <Suspense fallback={loading}>
          <PhoneDialog />
        </Suspense>
        <Suspense fallback={loading}>
          <PlusesTable />
        </Suspense>
        <Suspense fallback={loading}>
          <Warranty />
        </Suspense>
        <Footer />
      </>
    );
  }

  mainLoading = () => {
    console.log('mainLoading');

    return (
      <div className="progressbar">
        <span className="loading" />
        <div className="load">Загрузка...</div>
      </div>
    );
  };
}

export default hot(App, { errorBoundary: false });
