import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeSlider } from './redux/actions';
import './ImageSlider.css';

import { ImageBigAtCenter } from '../../dummy/ImageBigAtCenter';
import { ImagesInRow } from '../../dummy/ImagesInRow';
import { Price } from '../../dummy/Price';
import { Buy } from '../../dummy/Buy';

class ImageSlider extends Component {
  render() {
    return (
      <div>
        <div className="product-info">
          <ImagesInRow imageNames={this.props.imageNames} />
          <div>
            <Price />
            <Buy />
          </div>
        </div>
        <button onClick={this.props.actions}>Change</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { imageNames, currentImageIndex } = state.imageSlider;
  return {
    imageNames,
    currentImageName: imageNames[currentImageIndex],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(changeSlider, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageSlider);
