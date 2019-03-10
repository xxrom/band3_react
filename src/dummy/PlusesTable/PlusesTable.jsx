import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { menu } from '../../reducers';
import { Image } from '../Image';
import './PlusesTable.css';

class PlusesTableElement extends Component {
  constructor(props) {
    super(props);

    this.aboutRef = React.createRef();
    this.backgroundImgArray = ['band3_black_1.jpg', 'band3_black_2.jpg'];
    this.tableData = [
      {
        text: 'Отображение до 48 символов',
        imgSrc: 'plus_icon_white_1.png',
      },
      {
        text: 'Отображение уведомлений приложений о входящих вызовах',
        imgSrc: 'plus_icon_white_2.png',
      },
      {
        text:
          'Просмотр огромного количества данных об активности в реальном времени',
        imgSrc: 'plus_icon_white_3.png',
      },
      {
        text: 'Автоматический мониторинг качества сна и подсчет шагов',
        imgSrc: 'plus_icon_white_4.png',
      },
      {
        // text: 'Водонепроницаемость на глубине до 50 м',
        text: 'Защита от воды 5 ATM (до 50 м)',
        imgSrc: 'plus_icon_white_5.png',
      },
      {
        text: '20+ дней от одного заряда',
        imgSrc: 'plus_icon_white_6.png',
      },
    ];

    this.state = {
      backgroundImgCount: 0,
      backgroundImgInterval: 2000,
    };
  }

  componentDidMount() {
    this.props.actions.setRefAbout(this.aboutRef);

    setInterval(() => {
      const { backgroundImgCount } = this.state;

      this.setState({
        backgroundImgCount:
          backgroundImgCount < this.backgroundImgArray.length - 1
            ? backgroundImgCount + 1
            : 0,
      });
    }, this.state.backgroundImgInterval);
  }

  render() {
    return (
      <div ref={this.aboutRef} className="pluses-table__wrapper">
        {this.mainTextTemplate()}
        {this.backgroundImgTemplate(
          this.backgroundImgArray[this.state.backgroundImgCount]
        )}
        {this.tableTemplate(this.tableData)}
      </div>
    );
  }

  mainTextTemplate = () => (
    <div className="pluses-table__main-text masked-copy">
      Сенсорный 0.78 дюйма OLED дисплей
    </div>
  );

  backgroundImgTemplate = (src) => (
    <div className="pluses-table__background-img">
      <Image classMyName="background-img__img" src={src} />
    </div>
  );

  tableTemplate = (tableData) => {
    const table = [];
    let row = [];

    const cells = tableData.map(({ text, imgSrc }, index) => (
      <div className="pluses-table__cell" key={`pluses-table-cell-${index}`}>
        <div className="cell__img-wrapper">
          <Image classMyName="cell__img" src={imgSrc} />
        </div>
        <div className="cell__text">{text}</div>
      </div>
    ));

    cells.map((item, index) => {
      row.push(item);

      if ((index + 1) % tableData.length === 0) {
        table.push(
          <div className="pluses-table__row" key={`pluses-table-row-${index}`}>
            {row}
          </div>
        );
        row = [];
      }
    });

    return (
      <div className="pluses-table masked-copy">
        {[...table]}
        <div className="pluses-table__background" />
      </div>
    );
  };
}

const dispatchMapToProps = (dispatch) => ({
  actions: {
    setRefAbout: bindActionCreators(menu.setRefAbout, dispatch),
  },
});

const PlusesTable = connect(
  null,
  dispatchMapToProps
)(PlusesTableElement);

export { PlusesTable };
