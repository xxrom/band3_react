import React, { Component } from 'react';

import './Menu.css';

import { Buy } from '../Buy';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuStatic: false,
      activateMenuStatic: -40,
      navigationItems: [
        {
          class: 'product',
          title: 'Mi Band 3',
        },
        {
          class: 'about',
          title: 'О нас',
        },
        {
          class: 'contact',
          title: 'Контакты',
        },
      ],
    };

    window.addEventListener('scroll', () => {
      console.log('scroll');
      this.calcMenuStatic();
    });
  }

  componentDidMount() {
    this.calcMenuStatic();
  }

  calcMenuStatic = () => {
    const { menuStatic, activateMenuStatic } = this.state;
    const menu = this.menuWrapper.getBoundingClientRect();

    if (menu.top <= activateMenuStatic && !menuStatic) {
      console.log('<-25 !!!');
      this.setState({
        menuStatic: true,
      });
    } else if (menu.top > activateMenuStatic && menuStatic) {
      this.setState({
        menuStatic: false,
      });
    }
  };

  render() {
    const { navigationItems, menuStatic } = this.state;

    const navigationItemsElements = navigationItems.map((item, index) => (
      <div
        key={`menu ${index}`}
        className={`navigation__item navigation__${item.class}`}
      >
        {item.title}
      </div>
    ));

    return (
      <div
        className={`menu-wrapper ${menuStatic ? 'menu-wrapper_static' : ''}`}
        ref={(el) => (this.menuWrapper = el)}
        onScroll={() => console.log('scroll')}
      >
        <div className="background" />
        <div className="logo" ref={(el) => (this.logo = el)}>
          {this.props.siteName}
        </div>
        <div className="navigation">{navigationItemsElements}</div>
        <div className="navigation__mobile">
          <div className="navigation__mobile_arrow">arrow</div>

          <div className="navigation__mobile_list">
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
          </div>
        </div>
        <div className="navigation__item">
          <Buy mini />
        </div>
      </div>
    );
  }
}

export { Menu };
