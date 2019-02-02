import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ImageBigAtCenter } from '../../dummy/ImageBigAtCenter';
import { ProductText } from '../../dummy/ProductText';
import { Price } from '../../dummy/Price';
import { Buy } from '../../dummy/Buy';

import './Product.css';

class Product extends Component {
  render() {
    return (
      <div className="product__wrapper">
        <div className="product__text">
          <ProductText />
        </div>
        <div className="product__image">
          <ImageBigAtCenter src={this.props.currentImageName} />
        </div>
        <div className="product__right">
          <Price />
          <Buy />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { imageNames, currentImageIndex } = state.imageSlider;
  return {
    currentImageName: imageNames[currentImageIndex],
  };
};

export default connect(mapStateToProps)(Product);
