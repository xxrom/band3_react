import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ImageBigAtCenter } from '../../dummy/ImageBigAtCenter';
import { ProductText } from '../../dummy/ProductText';
import { Price } from '../../dummy/Price';
import { Buy } from '../../dummy/Buy';

import { menu } from '../../reducers';

import './Product.css';
import { newsCardVerticalSliderData } from '../../dummy/NewsCardVerticalSlider/datastub';
import { NewsCardVerticalSlider } from '../../dummy/NewsCardVerticalSlider';

class Product extends Component {
  constructor(props) {
    super(props);
    this.productRef = React.createRef();
  }

  componentDidMount() {
    this.props.actions.setRefProduct(this.productRef);
  }

  render() {
    return (
      <div ref={this.productRef} className="product__wrapper">
        <div className="product__text">
          <ProductText />
        </div>
        <div className="product__image">
          <ImageBigAtCenter src={this.props.currentImageName} />
        </div>
        <div className="product__right">
          <Price />
          <Buy label="Быстрый заказ" />
        </div>
        <NewsCardVerticalSlider
          direction="vertical"
          cardAlign="center"
          items={newsCardVerticalSliderData}
        />
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

const dispatchMapToProps = (dispatch) => ({
  actions: {
    setRefProduct: bindActionCreators(menu.setRefProduct, dispatch),
  },
});

export default connect(
  mapStateToProps,
  dispatchMapToProps
)(Product);
