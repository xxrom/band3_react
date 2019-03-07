import React from 'react';

import './Loader.css';

const Loader = (props) => {
  return (
    <div
      className={`loader__wrapper loader__${props.loading ? 'show' : 'hide'}`}
    >
      <div className="loader">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export { Loader };
