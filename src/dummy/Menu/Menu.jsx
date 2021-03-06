import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  toProduct,
  toAbout,
  toContacts,
  toggleMobileMenu,
  toWarranty,
} from './redux';
import './Menu.css';

import { Buy } from '../Buy';
import { Image } from '../Image';

class MenuElement extends PureComponent {
  constructor(props) {
    super(props);

    this.buyRef = React.createRef();

    const navigationItems = [
      {
        class: 'product',
        title: 'Mi Band 3',
        onClick: this.props.actions.toProduct,
      },
      {
        class: 'about',
        title: 'Описание',
        onClick: this.props.actions.toAbout,
      },
      // {
      //   class: 'delivery',
      //   title: 'Доставка',
      //   onClick: this.props.actions.toContacts,
      // },
      {
        class: 'warranty',
        title: 'Гарантии',
        onClick: this.props.actions.toWarranty,
      },
      {
        class: 'contacts',
        title: 'Контакты',
        onClick: this.props.actions.toContacts,
      },
    ];

    const menuItems = navigationItems.map((item, index) => (
      <div
        key={`menu ${index}`}
        className={`navigation__item navigation__${item.class}`}
        onClick={item.onClick}
      >
        {item.title}
      </div>
    ));

    this.state = {
      menuItems,
      menuStatic: false,
      activateMenuStatic: -20,
    };

    window.addEventListener('scroll', this.calcMenuStatic);
  }

  componentDidMount() {
    this.calcMenuStatic();
  }

  calcMenuStatic = () => {
    const { menuStatic, activateMenuStatic } = this.state;
    const menu = this.menuWrapper.getBoundingClientRect();

    if (menu.top <= activateMenuStatic && !menuStatic) {
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
    const { menuItems, menuStatic } = this.state;
    const { showMobileMenu } = this.props.menu;

    return (
      <div
        className={`menu-wrapper  ${menuStatic ? 'menu-wrapper_static' : ''}`}
        ref={(el) => (this.menuWrapper = el)}
      >
        {this.templateMenu(menuItems, showMobileMenu)}
        {this.templateMobileMenu(menuItems, showMobileMenu)}
      </div>
    );
  }

  templateMenu = (menuItems, showMobileMenu) => {
    return (
      <>
        <div className="background" />
        <div
          className="logo"
          onClick={this.props.actions.toProduct}
          ref={(el) => (this.logo = el)}
        >
          <Image
            style={{ width: '1.8rem', hight: '1rem', marginRight: '.5rem' }}
            src="icons/eagle_0_low.png"
          />
          {this.props.siteName}
        </div>
        <div className="navigation">{menuItems}</div>

        <div
          className={`navigation__mobile_arrow arrow-${
            showMobileMenu ? 'down' : 'up'
          }`}
          onClick={this.props.actions.toggleMobileMenu}
        >
          >
        </div>

        <div className="navigation__item" onClick={this.handleBuyOnClick}>
          <Buy
            buyRef={(el) => (this.buyRef = el)}
            label="Скидка!"
            mini
            style={{ width: '8rem' }}
          />
        </div>
      </>
    );
  };

  handleBuyOnClick = () => {
    this.buyRef.click();
  };

  templateMobileMenu = (menuItems, showMobileMenu) => {
    return (
      <div className="navigation__mobile_wrapper">
        <div className="navigation__mobile">
          <div
            className={`mobile-menu__list mobile-menu__list${
              showMobileMenu ? '' : '_hide'
            }`}
          >
            {menuItems}
          </div>
        </div>
        <div
          className={`mobile-menu__list__background${
            showMobileMenu ? '' : '_hide'
          }`}
          onClick={this.props.actions.toggleMobileMenu}
        />
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  menu: {
    showMobileMenu: state.menu.showMobileMenu,
  },
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    toProduct: bindActionCreators(toProduct, dispatch),
    toAbout: bindActionCreators(toAbout, dispatch),
    toWarranty: bindActionCreators(toWarranty, dispatch),
    toContacts: bindActionCreators(toContacts, dispatch),
    toggleMobileMenu: bindActionCreators(toggleMobileMenu, dispatch),
  },
});

const Menu = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuElement);

export { Menu };
