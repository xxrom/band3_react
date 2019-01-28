import React from 'react';
import './ImageBigAtCenter.css';

import { Image } from '../Image';

const ImageBigAtCenter = ({ src }) => (
  <div className="image-big-at-center__wrapper">
    <Image src={src} />
  </div>
);

export { ImageBigAtCenter };
