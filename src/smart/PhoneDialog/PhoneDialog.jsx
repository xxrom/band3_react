import React, { Component } from 'react';

import './PhoneDialog.css';
import { Buy } from '../../dummy/Buy';

class PhoneDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      placeholder: '+7 XXX XXX XX XX',
      btnLabel: 'Обратный звонок',
    };
  }
  render() {
    return (
      <div
        className="wrapper"
        style={!this.state.show ? { display: 'none' } : {}}
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
          <Buy mini label={this.state.btnLabel} />
        </div>
      </div>
    );
  }

  onClickWrapper = (e) => {
    if (e.currentTarget === e.target) {
      console.log('onClick wrapper');
      this.setState({
        show: !this.state.show,
      });
    }
    e.preventDefault();
  };
}

export default PhoneDialog;
