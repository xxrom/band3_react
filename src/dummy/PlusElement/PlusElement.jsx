import React, { Component } from 'react';

import './PlusElement.css';

class PlusElement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeClassName: 'plus--active',
      active: false,
    };

    console.log('props', props);

    if (!props.static) {
      this.onClick = this.onClick.bind(this);
    } else {
      this.onClick = () => {};
    }
  }
  render() {
    const { style } = this.props;
    const { active, activeClassName } = this.state;

    const showPopUp = active ? activeClassName : '';

    return (
      <div className={`plus ${showPopUp}`} onClick={this.onClick} style={style}>
        <div className="plus__line plus__line--v">
          <div href="#" className="plus__link">
            Большой Экран!
          </div>
        </div>
        <div className="plus__line plus__line--h" />
      </div>
    );
  }

  onClick = (e) => {
    console.log('onClick');
    this.setState({
      active: !this.state.active,
    });
  };
}

export { PlusElement };
