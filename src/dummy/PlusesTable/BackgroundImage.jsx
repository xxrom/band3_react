import * as React from 'react';
import { Image } from '../Image';

class BackgroundImage extends React.PureComponent {
  render = () => (
    <div className="pluses-table__background-img">
      <Image
        classMyName={`background-img__img ${
          this.props.index === 0 ? 'hide' : ''
        }`}
        src={this.props.srcArray[0]}
      />
      <Image
        classMyName={`background-img__img ${
          this.props.index === 1 ? 'hide' : ''
        }`}
        src={this.props.srcArray[1]}
      />
    </div>
  );
}

export { BackgroundImage };
