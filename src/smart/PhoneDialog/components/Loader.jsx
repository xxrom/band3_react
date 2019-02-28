import React from 'react';

import './Loader.css';

const Loader = (props) => {
  return (
    <div class={`loader__wrapper loader__${props.loading ? 'show' : 'hide'}`}>
      <div class="loader">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export { Loader };
