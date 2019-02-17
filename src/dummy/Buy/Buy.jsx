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
    const { label, style, disable } = this.props;

    return (
      <button
        onClick={this.onClick}
        className={`buy-btn ${this.state.mini} ${
          disable ? 'buy-btn_disable' : ''
        }`}
        style={style}
      >
        {label ? label : 'Купить'}
      </button>
    );
  }

  onClick = async () => {
    console.log('click');
    // const body = {
    //   test: 'test Nikita',
    //   number: '+79636830488',
    //   name: 'Никита',
    // };

    // console.time('post');
    // TODO: uncomment
    // const ans = await fetchData({
    //   fetchOptionsMethod: 'POST',
    //   fetchOptionsHeader: {
    //     'Content-type': 'application/json',
    //   },
    //   body,
    // });
    // console.timeEnd('post');

    // console.log('ans', ans);
  };
}

export { Buy };
