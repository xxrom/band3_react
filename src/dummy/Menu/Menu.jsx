import React, { Component } from 'react';

import './Menu.css';

import { Buy } from '../Buy';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationItems: [
        <div className="navigation__item navigation__product">Mi Band 3</div>,
        <div className="navigation__item navigation__about">О нас</div>,
        <div className="navigation__item navigation__contact">Контакты</div>,
      ],
    };
  }
  render() {
    const navigationItemsElements = this.state.navigationItems.map(
      (item) => item
    );
    return (
      <div className="menu-wrapper">
        <div className="logo">{this.props.siteName}</div>
        <div className="navigation">{navigationItemsElements}</div>
        <Buy mini />
      </div>
    );
  }
}

export { Menu };
