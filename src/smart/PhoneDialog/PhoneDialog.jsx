import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchData } from '../../libs/fetch-api';
import { Buy } from '../../dummy/Buy';
import { Mountain } from './templates';

import './PhoneDialog.css';
import { togglePhoneDialog, changePhone } from './redux/reducer';

// TODO:
// 2. разобраться со скролом диалога, почему он проскраливает ???
// со скролом проблема сама решилась ...
// 3. в диалог перенести блок с ценой, скидкой и кнопкой ?

// 4. подумать как лучше переключать диалог в показ и скрытие или
// вообще Buy кнопку сделать умной ?

// 5. Текст кнопку поменять? 'Получить мой браслет CЕЙЧАС'
// 6. Под кнопкой покупки указать старую перечеркнутую красной чертой цену и новую, красную как у беру ?
// 7. 'Укажите только номер своего телефона', подпись снизу под кнопкой ? (как уточнение данного действия)
// 8. Правильнее дать пользователю выбор указать только его номер телефона (для обратного звонка) или сформировать полный заказ ?
// 9. Дать снопкам больше места вокруг
// 10. Цвет кнопки лучше поменять с красного на оранжевый ? чтобы убрать негативный оттенок (оранжевый цвет лучше взять с амазона)
// 11. Шрифт для кнопки Sans-serif (Some safe fonts you can use are: Arial, Helvetica, Franklin Gothic, Myriad, or any other classic sans-serif font, really.)
// 12. Добавить поверх кнопки дополнительный значок ассоциируемый с действием кнопки (плюсик, тележка с покупками или значок покупки)

class PhoneDialog extends Component {
  phoneMask = /^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/;
  placeholder = '+7 (___) ___-__-__';
  btnLabel = 'Обратный звонок';

  render() {
    console.log('this.state', this.props);
    const { phone } = this.props;
    const valid = this.phoneMask.test(phone);

    return (
      <div
        className={`wrapper wrapper-${
          !this.props.showPhoneDialog ? 'hide' : 'show'
        }`}
        onClick={this.onClickWrapper}
      >
        <div className="wrapper__dialog">
          <div className="dialog__text">Введите Ваш номер телефона</div>
          <div className="dialog__input">
            <InputMask
              className="input"
              placeholder={this.placeholder}
              value={phone}
              mask="+7 (999) 999-99-99"
              onChange={this.props.changePhone}
            />
            <span
              className={`input-validate input-validate_${
                valid ? 'ok' : 'error'
              }`}
            />
          </div>

          <Buy
            mini
            label={this.btnLabel}
            disable={!valid}
            onClick={this.onClickCall}
          />
          <div className="dialog__close-btn" onClick={this.onClickWrapper} />
        </div>
        <Mountain />
      </div>
    );
  }

  onClickWrapper = (e) => {
    // OnClick check click area
    if (e.currentTarget === e.target) {
      this.props.togglePhoneDialog(this.props.showPhoneDialog);
    }
    e.preventDefault();
  };

  onClickCall = async () => {
    const { phone } = this.props;
    const body = {
      test: 'test Nikita',
      number: phone,
      name: 'Никита',
    };
    console.time('post');

    const ans = await fetchData({
      fetchOptionsMethod: 'POST',
      fetchOptionsHeader: {
        'Content-type': 'application/json',
      },
      body,
    });
    console.timeEnd('post');
    console.log('ans', ans);
  };
}

const mapStateToProps = (state) => {
  const { showPhoneDialog, phone } = state.phoneDialog;
  return {
    showPhoneDialog,
    phone,
  };
};

const mapDispatchToProps = (dispatch) => ({
  togglePhoneDialog: bindActionCreators(togglePhoneDialog, dispatch),
  changePhone: bindActionCreators(changePhone, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneDialog);
