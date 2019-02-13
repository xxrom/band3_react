import React, { Component } from 'react';
import { fetchData } from './fetch-api';

import './Buy.css';

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mini: props.mini ? 'buy-btn_mini' : '',
    };
  }
  render() {
    return (
      <button onClick={this.onClick} className={`buy-btn ${this.state.mini}`}>
        Купить
      </button>
    );
  }

  onClick = async () => {
    console.log('click');
    const body = { test: 'test Nikita' };

    const ans = await fetchData({
      url: '',
      fetchOptionsMethod: 'POST',
      fetchOptionsHeader: {
        'Content-type': 'application/json',
      },
      body,
    });

    console.log('ans', ans);
  };
}

export { Buy };
