import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Loader } from './components/';

import { fetchData } from '../../libs/fetch-api';
import { Buy } from '../../dummy/Buy';

import './PhoneDialog.css';
import {
  togglePhoneDialog,
  changePhone,
  phoneSanded,
  setLoading,
} from './redux/reducer';

class PhoneDialog extends Component {
  phoneMask = /^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/;
  placeholder = '+7 (___) ___-__-__';
  btnLabel = 'Обратный звонок ';
  valid = false;

  render() {
    const {
      phone,
      phoneSanded,
      loading,
      showPhoneDialog,
    } = this.props.phoneDialog;

    this.valid = this.phoneMask.test(phone);

    return (
      <div
        className={`wrapper wrapper-${!showPhoneDialog ? 'hide' : 'show'}`}
        onClick={this.onClickWrapper}
      >
        <div className="wrapper__dialog">
          <div className="dialog__text">Пожалуйста, введите номер телефона</div>
          <div className="dialog__input">
            <InputMask
              className="input"
              placeholder={this.placeholder}
              value={phone}
              mask="+7 (999) 999-99-99"
              onChange={this.props.actions.changePhone}
              onKeyPress={this.onInputKeyPress}
              type="number"
            />

            <span
              className={`input-validate input-validate_${
                this.valid ? 'ok' : 'error'
              }`}
            />
          </div>

          {this.actionBlock(phoneSanded, loading)}

          <div className="dialog__close-btn" onClick={this.onClickWrapper} />
        </div>
      </div>
    );
  }

  actionBlock = (phoneSanded, loading) => {
    return (
      <div className="dialog__action">
        <Loader loading={loading} />
        {phoneSanded ? (
          <div className="dialog__text">Ожидайте звонка оператора</div>
        ) : (
          <Buy
            mini
            style={{ maxWidth: '14rem', width: 'auto' }}
            label={this.btnLabel}
            disable={!this.valid}
            onClick={this.onClickCall}
          />
        )}
      </div>
    );
  };

  onInputKeyPress = (e) => {
    if (this.valid && e.key === 'Enter') {
      this.onClickCall();
    }
  };

  onClickWrapper = (e) => {
    // OnClick check click area
    if (e.currentTarget === e.target) {
      this.props.actions.togglePhoneDialog(
        this.props.phoneDialog.showPhoneDialog
      );
    }
    e.preventDefault();
  };

  onClickCall = async () => {
    const { phone } = this.props.phoneDialog;
    const body = {
      test: 'test Nikita',
      number: phone,
      name: 'Никита',
    };

    this.props.actions.setLoading(true);

    const ans = await fetchData({
      fetchOptionsMethod: 'POST',
      fetchOptionsHeader: {
        'Content-type': 'application/json',
      },
      body,
    });
    console.timeEnd('post');
    console.log('ans', ans);
    this.props.actions.phoneSanded(true);

    this.props.actions.setLoading(false);
  };
}

const mapStateToProps = (state) => {
  const { showPhoneDialog, phone, phoneSanded, loading } = state.phoneDialog;
  return {
    phoneDialog: {
      showPhoneDialog,
      phone,
      phoneSanded,
      loading,
    },
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    togglePhoneDialog: bindActionCreators(togglePhoneDialog, dispatch),
    changePhone: bindActionCreators(changePhone, dispatch),
    phoneSanded: bindActionCreators(phoneSanded, dispatch),
    setLoading: bindActionCreators(setLoading, dispatch),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneDialog);
