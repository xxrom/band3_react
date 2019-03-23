import React from 'react';
import './ImageBigAtCenter.css';

import { PlusElement } from '../PlusElement';

import { Image } from '../Image';

const pluses = {
  display: 'Экран 128x80px',
  battery: '20+ дней работы',
  touch: 'Защита от воды до 50м',
};

const ImageBigAtCenter = ({ src }) => (
  <div className="image-big-at-center__wrapper">
    <Image src={src} low="_2" />
    <PlusElement
      style={styles.plusDisplay}
      popUpStyle={styles.plusDisplay.popUp}
      text={pluses.display}
    />
    <PlusElement
      style={styles.plusBattery}
      popUpStyle={styles.plusBattery.popUp}
      text={pluses.battery}
    />
    <PlusElement
      style={styles.plusTouch}
      popUpStyle={styles.plusTouch.popUp}
      text={pluses.touch}
    />
  </div>
);

// default left PopUp
const styles = {
  plusDisplay: {
    position: 'absolute',
    right: '9.5%',
    marginTop: '15%',
    popUp: {
      left: 'calc(50% - 200px)',
    },
  },
  plusBattery: {
    position: 'absolute',
    right: '80%',
    marginTop: '-18%',
    popUp: {
      left: 'calc(50% - 30px)',
    },
  },
  plusTouch: {
    position: 'absolute',
    right: '30%',
    marginTop: '38%',
    popUp: {
      left: 'calc(50% - 140px)',
    },
  },
};

export { ImageBigAtCenter };
