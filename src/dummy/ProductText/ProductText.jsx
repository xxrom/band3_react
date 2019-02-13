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
        `Автономная работа до 20+ дней`,
        `Мониторинг сна и физической активности`,
        `Водонепроницаемые (до 50м)`,
        `Управления жестами`,
        `Большой экран`,
      ],
    };
  }
  render() {
    const { header, mainIntro, plusIntro, plusItems } = this.state;

    const plusItemsElements = plusItems.map((text, index) => (
      <div key={`productText ${index}`} style={styles.plusItems.wrapper}>
        <PlusElement static />
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
      paddingBottom: '0.3rem',
    },
  },
};

export { ProductText };
