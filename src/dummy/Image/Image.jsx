import React from 'react';
import './Image.css';

const Image = ({ src }) => (
  <div className="wrapper">
    <img className="image" src={require(`./assets/${src}`)} />
  </div>
);

export { Image };
