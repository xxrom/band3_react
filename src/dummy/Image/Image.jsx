import React, { PureComponent } from 'react';

import './Image.css';

class Image extends PureComponent {
  render() {
    const { src, style, classMyName, alt } = this.props;

    let srcImg;
    try {
      let localSrc = 'jpg';
      if (src.indexOf('png') !== -1) {
        localSrc = 'png';
      }
      srcImg = require(`../../assets/${src.replace(localSrc, 'webp')}`);
    } catch (err) {
      srcImg = require(`../../assets/${src}`);
    }

    return (
      <img
        style={style}
        className={`${classMyName ? classMyName : 'image'}`}
        src={srcImg}
        alt={alt ? alt : 'img'}
      />
    );
  }
}

export { Image };
