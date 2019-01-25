import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

import './App.css';

import { Menu } from './dummy/Menu';
import { Title } from './dummy/Title';
import { Image } from './dummy/Image';

class App extends Component {
  render() {
    return (
      <div>
        <Menu siteName="techcatch." />
        <Image src="main1.jpg" />
        <Image src="separated.png" />
        <Title title="text Title" />
        <Title title="text Title" />
      </div>
    );
  }
}

export default hot(App);
