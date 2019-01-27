import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeSlider } from './redux/actions';

import { Image } from '../../dummy/Image';

class ImageSlider extends Component {
  render() {
    const { image } = this.props;
    console.log(image);
    console.log('this.props', this.props);
    console.log(`currentImageName = ${this.props.currentImageName}`);
    return (
      <div>
        <h1>ImageSlider</h1>
        <Image src={this.props.currentImageName} />
        <button onClick={this.props.actions}>Change</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  const { imageNames, currentImageIndex } = state.imageSlider;
  return {
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
