import React from 'react';
import './ImageBigAtCenter.css';

import { PlusElement } from '../PlusElement';

import { Image } from '../Image';

const ImageBigAtCenter = ({ src }) => (
  <div className="image-big-at-center__wrapper">
    <Image src={src} />
    <PlusElement style={styles.plusOne} />
  </div>
);

const styles = {
  plusOne: {
    position: 'absolute',
    right: '13%',
    marginTop: '15%',
  },
};

export { ImageBigAtCenter };
