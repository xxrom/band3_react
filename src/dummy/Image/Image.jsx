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
        src={this.getSrc(src, this.props.low)}
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
          onLoad={
            () => this.setState({ loading: false })
            // setTimeout(() => this.setState({ loading: false }), 15000)
          }
          alt={alt ? alt : 'img'}
        />
      </>
    );
  }

  /*
   * webp => png | jpg
   * low = true:  *_low.webp => *_low.png | *_low.jpg
   * low = _2:  *_2.webp => *_2.png | *_2.jpg
   */
  getSrc = (src, low = false) => {
    const imgExtension = src.indexOf('png') !== -1 ? 'png' : 'jpg';
    let mainSrc = src;

    if (low) {
      const postFix = typeof low === 'string' ? low : '_low';

      const lowSrcArray = src.split('.');
      mainSrc = lowSrcArray.reduce((sum, item, index) =>
        index !== lowSrcArray.length - 1
          ? `${sum}${index}.${item}`
          : `${sum}${postFix}.${item}`
      );
    }

    try {
      const webp = require(`../../assets/${mainSrc.replace(
        imgExtension,
        'webp'
      )}`);
      return webp;
    } catch (err) {
      console.log(`error: loading ${mainSrc.replace(imgExtension, 'webp')}`);
    }

    try {
      const img = require(`../../assets/${mainSrc}`);
      return img;
    } catch (err) {
      console.log(`error: loading ${mainSrc}`);
    }

    if (imgExtension === 'jpg') {
      console.log(' => try load png img');
      try {
        const img = require(`../../assets/${mainSrc.replace('jpg', 'png')}`);
        return img;
      } catch (err) {
        console.log(`error: loading ${mainSrc}`);
      }
    }

    return src;
  };
}

export { Image };
