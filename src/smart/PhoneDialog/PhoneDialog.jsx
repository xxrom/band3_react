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
            >
              {(inputProps) => <input {...inputProps} type="tel" />}
            </InputMask>

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

  getActiveItem = (phoneSanded) => {
    const BuyBtn = ({ style = {}, ...props } = {}) => (
      <Buy
        mini
        style={{ maxWidth: '14rem', width: 'auto', ...style }}
        label={this.btnLabel}
        disable={!this.valid}
        onClick={this.onClickCall}
        {...props}
      />
    );

    switch (phoneSanded) {
      case true:
        return (
          <div className="dialog__text">
            Запрос отправлен. Ожидайте звонка оператора
          </div>
        );

      case 'error':
        return (
          <div className="dialog__action-error">
            <div className="dialog__text">
              Запрос не отправлен, пожалуйста, попробуйте еще раз
            </div>
            {BuyBtn({ style: { marginTop: '1rem' } })}
          </div>
        );

      case false:
      default:
        return BuyBtn();
    }
  };

  actionBlock = (phoneSanded, loading) => {
    return (
      <div className="dialog__action">
        <Loader loading={loading} />
        {this.getActiveItem(phoneSanded)}
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

    console.time('post1');
    let ans = await fetchData({
      web: `http://192.168.0.121:4444`,
      fetchOptionsMethod: 'POST',
      fetchOptionsHeader: {
        'Content-type': 'application/json',
      },
      body,
    });
    console.timeEnd('post1');
    console.log('ans 1', ans);

    if (!ans) {
      console.time('post2');
      ans = await fetchData({
        // Fetch time - 1 minute
        fetchTime: 60000,
        fetchOptionsMethod: 'POST',
        fetchOptionsHeader: {
          'Content-type': 'application/json',
        },
        body,
      });
      console.timeEnd('post2');
    }

    if (!ans) {
      this.props.actions.phoneSanded('error');
    } else {
      this.props.actions.phoneSanded(true);
    }

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
