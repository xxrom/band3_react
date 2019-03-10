import React, { Component } from 'react';

import './PlusElement.css';

class PlusElement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeClassName: 'plus--active',
      active: false,
    };
  }
  render() {
    const { style, text, popUpStyle } = this.props;
    const { active, activeClassName } = this.state;

    const showPopUp = active ? activeClassName : '';
    const popUpStyleActivate = showPopUp ? popUpStyle : {};

    let activeCursor = '';
    let content = (
      <div className="bullet_wrapper">
        <div className="bullet" />
      </div>
    );
    if (!this.props.static) {
      activeCursor = 'active';
      content = (
        <>
          <div style={popUpStyleActivate} className="plus__line plus__line--v">
            <div href="#" className="plus__link">
              {text}
            </div>
          </div>
          <div className="plus__line plus__line--h" />
        </>
      );
    }

    return (
      <div
        className={`plus ${showPopUp} ${activeCursor}`}
        onClick={this.onClick}
        style={style}
      >
        {content}
      </div>
    );
  }

  onClick = () => {
    if (this.props.static) {
      return;
    }
    this.setState({
      active: !this.state.active,
    });
  };
}

export { PlusElement };
