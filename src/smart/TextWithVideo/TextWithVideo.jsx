import React, { Component } from 'react';

import './TextWithVideo.css';

class TextWithVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Отслеживайте каждый свой шаг',
      backgroundVideoName: 'bg_video',
    };
  }

  render() {
    const { text, backgroundVideoName } = this.state;
    return (
      <div className="text-with-video__wrapper">
        <div className="text-with-video__text">{text}</div>
        <video loop autoPlay muted className="text-with-video">
          <source
            src={require(`../../assets/${backgroundVideoName}.webm`)}
            type="video/webm"
          />
          <source
            src={require(`../../assets/${backgroundVideoName}.mp4`)}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default TextWithVideo;
