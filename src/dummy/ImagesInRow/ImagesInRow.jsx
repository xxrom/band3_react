import React, { PureComponent } from 'react';
import './ImagesInRow.css';

import { Image } from '../Image';

class ImagesInRow extends PureComponent {
  render() {
    const { low = false } = this.props;

    const imagesArray = this.props.imageNames.map((src, index) => (
      <div
        key={`image-in-row-${index}`}
        className="image-in-row__wrapper_image"
      >
        <Image src={src} low={low} />
      </div>
    ));

    return <div className="image-in-row__wrapper">{imagesArray}</div>;
  }
}

export { ImagesInRow };
