import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ImageBigAtCenter } from '../../dummy/ImageBigAtCenter';
import { Price } from '../../dummy/Price';

import './Product.css';

class Product extends Component {
  render() {
    return (
      <div>
        <ImageBigAtCenter src={this.props.currentImageName} />
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

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Product);
