import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { togglePhoneDialog } from '../../smart/PhoneDialog/redux/reducer';

import './Buy.css';

class BuyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mini: props.mini ? 'buy-btn_mini' : '',
    };
  }
  render() {
    const { label, style, disable } = this.props;

    return (
      <button
        onClick={this.onClick}
        className={`buy-btn ${this.state.mini} ${
          disable ? 'buy-btn_disable' : ''
        }`}
        style={style}
      >
        {label ? label : 'Купить'}
      </button>
    );
  }

  onClick = () => {
    if (this.props.disable) {
      return;
    }

    if (this.props.onClick) {
      return this.props.onClick();
    }

    this.props.onClickDefault();
  };
}

const mapDispatchToProps = (dispatch) => ({
  onClickDefault: bindActionCreators(togglePhoneDialog, dispatch),
});

const Buy = connect(
  null,
  mapDispatchToProps
)(BuyComponent);

export { Buy };
