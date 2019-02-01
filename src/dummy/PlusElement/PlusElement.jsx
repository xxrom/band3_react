import React, { Component } from 'react';

import './PlusElement.css';

/*

 var plus = document.getElementById('plus');

 function plusToggle() {
    plus.classList.toggle('plus--active');
}

plus.addEventListener('click', plusToggle);

*/

class PlusElement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeClassName: 'plus--active',
      active: false,
    };

    this.onClick = this.onClick.bind(this);
  }
  render() {
    const showPopUp = this.state.active ? this.state.activeClassName : '';

    return (
      <div class={`plus ${showPopUp}`} onClick={this.onClick}>
        <div class="plus__line plus__line--v">
          <div href="#" class="plus__link">
            Большой Экран!
          </div>
        </div>
        <div class="plus__line plus__line--h" />
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
