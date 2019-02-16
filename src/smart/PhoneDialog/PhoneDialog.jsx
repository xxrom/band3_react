import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Buy } from '../../dummy/Buy';

import './PhoneDialog.css';
import { togglePhoneDialog } from './redux/actions';

// TODO:
// 2. разобраться со скролом диалога, почему он проскраливает ???
// со скролом проблема сама решилась ...
// 3. в диалог перенести блок с ценой, скидкой и кнопкой ?

// 4. подумать как лучше переключать диалог в показ и скрытие или
// вообще Buy кнопку сделать умной ?

class PhoneDialog extends Component {
  phoneMask = '/+7 [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}&/';

  constructor(props) {
    super(props);
    this.state = {
      placeholder: '+7 XXX XXX XX XX',
      phone: undefined,
      btnLabel: 'Обратный звонок',
    };
  }
  render() {
    const { phone } = this.state;

    return (
      <div
        className="wrapper"
        style={!this.props.showPhoneDialog ? { display: 'none' } : {}}
        onClick={this.onClickWrapper}
      >
        <div className="wrapper__dialog">
          <div className="dialog__text">
            Пожалуйста, введите Ваш номер телефона.
          </div>
          <input
            className="dialog__input"
            placeholder={this.state.placeholder}
          />
          <InputMask
            value={phone}
            mask="+7 (999) 999-99-99"
            onChange={this.onChangePhone}
          />
          <Buy mini label={this.state.btnLabel} />
          <div className="dialog__close-btn" onClick={this.onClickWrapper} />
        </div>
      </div>
    );
  }

  onClickWrapper = (e) => {
    // OnClick check click area
    if (e.currentTarget === e.target) {
      console.log('onClick wrapper');

      this.props.togglePhoneDialog(this.props.showPhoneDialog);
    }
    e.preventDefault();
  };

  onChangePhone = (e) => {
    console.log('value ', e.target.value);
  };
}

const mapStateToProps = (state) => {
  const { showPhoneDialog } = state.phoneDialog;
  return {
    showPhoneDialog,
  };
};

const mapDispatchToProps = (dispatch) => ({
  togglePhoneDialog: bindActionCreators(togglePhoneDialog, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneDialog);
