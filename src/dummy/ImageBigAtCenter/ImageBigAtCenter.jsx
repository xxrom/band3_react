import React from 'react';
import './ImageBigAtCenter.css';

import { PlusElement } from '../PlusElement';

import { Image } from '../Image';

const pluses = {
  display: 'Экран 128x80px',
  battery: '20+ дней работы',
  touch: 'Погружение до 50м',
};

const ImageBigAtCenter = ({ src }) => (
  <div className="image-big-at-center__wrapper">
    <Image src={src} />
    <PlusElement style={styles.plusDisplay} text={pluses.display} />
    <PlusElement style={styles.plusBattery} text={pluses.battery} />
    <PlusElement style={styles.plusTouch} text={pluses.touch} />
  </div>
);

const styles = {
  plusDisplay: {
    position: 'absolute',
    right: '15%',
    marginTop: '5%',
  },
  plusBattery: {
    position: 'absolute',
    right: '75%',
    marginTop: '-23%',
  },
  plusTouch: {
    position: 'absolute',
    right: '32%',
    marginTop: '32%',
  },
};

export { ImageBigAtCenter };
