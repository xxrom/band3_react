import React, { Component } from 'react';

import './TextWithVideo.css';

class TextWithVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Отслеживайте каждый свой шаг',
      backgroundVideoName: 'band3_high', // 'band3_high2', // 'band3_low', // 'bg_video',
      webm: undefined,
      mp4: undefined,
    };
  }

  componentDidMount() {
    this.loadVideos();
  }

  loadVideos = () => {
    console.log('loadVideos');
    const { backgroundVideoName } = this.state;

    try {
      const mp4 = require(`../../assets/${backgroundVideoName}.webm`);
      this.setState({ mp4 });

      return;
    } catch (error) {
      console.log('mp4 error', error);
    }

    try {
      const webm = require(`../../assets/${backgroundVideoName}.webm`);
      this.setState({ webm });
      return;
    } catch (error) {
      console.log('webm error', error);
    }
  };

  render() {
    const { text, mp4, webm } = this.state;

    console.log(!!mp4);
    console.log(!!webm);
    return (
      <div className="text-with-video__wrapper">
        <div className="text-with-video__text">{text}</div>
        <video loop autoPlay muted className="text-with-video">
          <source src={mp4} type="video/mp4" />
          <source src={webm} type="video/webm" />
        </video>
      </div>
    );
  }
}

export default TextWithVideo;
