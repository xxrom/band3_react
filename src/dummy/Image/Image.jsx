import React, { PureComponent } from 'react';
import './Image.css';

class Image extends PureComponent {
  render() {
    const { src, width, height } = this.props;

    return (
      <img
        style={{ width, height }}
        className="image"
        src={require(`../../assets/${src}`)}
      />
    );
  }
}

export { Image };
