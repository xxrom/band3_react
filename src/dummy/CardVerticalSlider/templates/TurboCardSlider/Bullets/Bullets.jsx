import * as React from 'react';

import './Bullets.css';

const cls = 'bullet-wrapper';

/**
 * interface IBulletsProps {
 *     length: number;
 *     current: number;
 *     setBullet: (index: number) => void;
 * }
 */

/**
 * type IBullets = (
 *     length: IBulletsProps['length'],
 *     current: IBulletsProps['current'],
 *     setBullet: IBulletsProps['setBullet']
 * ) => JSX.Element;
 */

const Bullets = (length, current, setBullet) => {
  const bulletsArray = [];

  const onLeftClick = () => {
    if (current > 0) {
      setBullet(current - 1);
    }
  };

  const onRightClick = () => {
    if (current < length - 1) {
      setBullet(current + 1);
    }
  };

  const onBulletSet = (index) => {
    if (index !== current) {
      setBullet(index);
    }
  };

  for (let i = 0; i < length; i++) {
    bulletsArray.push(
      <span
        key={i}
        onClick={() => onBulletSet(i)}
        className={`${cls}__bullet${i === current ? '_active' : ''}`}
      />
    );
  }

  return (
    <div className={cls}>
      <div className={`${cls}__navigation`}>
        <div className={`${cls}__navigation__left`} onClick={onLeftClick} />
        <div className={`${cls}__navigation__right`} onClick={onRightClick} />
      </div>

      {bulletsArray}
    </div>
  );
};

export { Bullets };
