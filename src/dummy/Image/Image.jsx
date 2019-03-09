import React, { PureComponent } from 'react';

import './Image.css';

class Image extends PureComponent {
  render() {
    const { src, style, classMyName, alt } = this.props;

    return (
      <img
        style={style}
        className={`${classMyName ? classMyName : 'image'}`}
        src={require(`../../assets/${src}`)}
        alt={alt ? alt : 'img'}
      />
    );
  }
}

export { Image };
