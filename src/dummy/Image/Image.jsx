import React, { PureComponent } from 'react';

import './Image.css';

class Image extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      src: props.src,
    };

    console.log('Img', props.src);
    if (props.src === 'main11_high_900.png') {
      console.log('main11_high_900.png');
      this.t = (
        <img
          style={props.style}
          className={`${props.classMyName ? props.classMyName : 'image'}`}
          // onLoad={(e) => console.log('loaded src', props.src, e)}
          onLoad={(e) => console.log('@@@@@@@@@@@@@@@@ onLoad ', e)}
          src={this.getSrc(props.src)}
          alt={props.alt ? props.alt : 'img'}
        />
      );
    }
  }

  render() {
    const { src, style, classMyName, alt } = this.props;

    return (
      <div>
        {this.t}
        <img
          style={style}
          className={`${classMyName ? classMyName : 'image'}`}
          // onLoad={(e) => console.log('onLoad', e)}
          src={this.getSrc(this.state.src)}
          alt={alt ? alt : 'img'}
        />
      </div>
    );
  }

  getSrc = (src) => {
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

    return srcImg;
  };
}

export { Image };
