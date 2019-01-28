import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeSlider } from './redux/actions';

import { ImageBigAtCenter } from '../../dummy/ImageBigAtCenter';
import { ImagesInRow } from '../../dummy/ImagesInRow';

class ImageSlider extends Component {
  render() {
    return (
      <div>
        <ImageBigAtCenter src={this.props.currentImageName} />
        <ImagesInRow imageNames={this.props.imageNames} />
        <button onClick={this.props.actions}>Change</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
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

// const mapDispatchToProps = (dispatch) => ({
//   onClick: () => {
//     dispatch(honk(id)); // <-- control the dispatch
//   },
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageSlider);
