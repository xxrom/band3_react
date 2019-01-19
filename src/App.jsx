import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

import { Title } from './dummy/Title';

class App extends Component {
  render() {
    return [
      <Title title="text Title" />,
      <Title title="text Title" />,
      <Title title="text Title" />,
    ];
  }
}

export default hot(App);
