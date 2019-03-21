import React, { PureComponent } from 'react';

import './Image.css';

class Image extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      src: props.src,
      loading: props.low ? true : false,
    };
  }

  render() {
    const { src, style, classMyName, alt } = this.props;
    const { loading } = this.state;

    const hide = {
      display: 'none',
    };

    const SmallImg = loading ? (
      <img
        style={{ ...style }}
        className={`image_big ${
          this.props.classMyName ? this.props.classMyName : 'image'
        }`}
        src={this.getSrc(src, true)}
        alt={this.props.alt ? this.props.alt : 'img'}
      />
    ) : null;

    return (
      <>
        {SmallImg}
        <img
          style={{ ...style, ...(loading ? hide : {}) }}
          className={`${classMyName ? classMyName : 'image'}`}
          src={this.getSrc(this.state.src)}
          onLoad={() =>
            setTimeout(() => this.setState({ loading: false }), 5000)
          }
          alt={alt ? alt : 'img'}
        />
      </>
    );
  }

  getSrc = (src, low = false) => {
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

    if (low) {
      srcImg = srcImg.split('.');
      srcImg = srcImg.reduce((sum, item, index) =>
        index !== srcImg.length - 1
          ? `${sum}${index}.${item}`
          : `${sum}_low.${item}`
      );
    }

    return srcImg;
  };
}

export { Image };
