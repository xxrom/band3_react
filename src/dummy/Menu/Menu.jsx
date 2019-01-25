import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="menu-wrapper">
        <div className="logo">{this.props.siteName}</div>
        <div className="navigation">
          <div className="navigation__item navigation__product">Mi Band 3</div>
          <div className="navigation__item navigation__about">О нас</div>
          <div className="navigation__item navigation__contact">Контакты</div>
        </div>
      </div>
    );
  }
}

export { Menu };
