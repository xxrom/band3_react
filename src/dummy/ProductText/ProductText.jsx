import React, { Component } from 'react';

import './ProductText.css';

import { PlusElement } from '../../dummy/PlusElement';

class ProductText extends Component {
  constructor(props) {
    super(props);
    const nbsp = '\u00a0';
    this.state = {
      header: `Xiaomi${nbsp}Mi Band${nbsp}3`,
      mainIntro: `Mi Band 3 оправдал все ожидания миллионов пользователей!`,
      plusIntro: `Гармоничный тандем инноваций и качества.`,
      plusItems: [
        `отличная защита от влаги (до 50 метров) и пыли`,
        `управления жестами`,
        `автономная работа до 20 дней`,
        `мониторинг сна / физической активности`,
        `дополнительный экран`,
      ],
    };
  }
  render() {
    const { header, mainIntro, plusIntro, plusItems } = this.state;

    const plusItemsElements = plusItems.map((text) => (
      <div style={styles.plusItems.wrapper}>
        <PlusElement />
        <div className="product-text__plus_item">{text}</div>
      </div>
    ));

    return (
      <div className="product-text__wrapper">
        <div className="product-text__header">{header}</div>
        <div className="product-text__main-intro">{mainIntro}</div>
        <div className="product-text__plus-intro">{plusIntro}</div>
        <div className="product-text__plus_wrapper">{plusItemsElements}</div>
      </div>
    );
  }
}

const styles = {
  plusItems: {
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'center',
    },
  },
};

export { ProductText };
