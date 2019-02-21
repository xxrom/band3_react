import React from 'react';

import './PlusesTable.css';

const mainTextTemplate = () => (
  <div className="pluses-table__main-text masked-copy">
    Сенсорный 0.78 дюйма OLED дисплей
  </div>
);

const backgroundImgTemplate = () => (
  <div className="pluses-table__background-img">
    <img
      className="background-img__img"
      src="https://image.flaticon.com/icons/png/512/1146/1146343.png"
      alt="img"
    />
  </div>
);

const tableData = [
  {
    text: 'Отображение до 48 символов',
    imgSrc: 'https://image.flaticon.com/icons/png/512/1146/1146343.png',
  },
  {
    text: 'Отображение уведомлений приложений о входящих вызовах',
    imgSrc: 'https://image.flaticon.com/icons/png/512/1146/1146343.png',
  },
  {
    text:
      'Просмотр огромного количества данных об активности в реальном времени',
    imgSrc: 'https://image.flaticon.com/icons/png/512/1146/1146343.png',
  },
  {
    text: 'Автоматический мониторинг качества сна и подсчет шагов',
    imgSrc: 'https://image.flaticon.com/icons/png/512/1146/1146343.png',
  },
  {
    text: 'Водонепроницаемость на глубине до 50 м',
    imgSrc: 'https://image.flaticon.com/icons/png/512/1146/1146343.png',
  },
  {
    text: '20+ дней от одного заряда',
    imgSrc: 'https://image.flaticon.com/icons/png/512/1146/1146343.png',
  },
];
const tableColumns = 6;

const tableTemplate = () => {
  const table = [];
  let row = [];

  const cells = tableData.map(({ text, imgSrc }, index) => (
    <div className="pluses-table__cell" key={`pluses-table-cell-${index}`}>
      <div className="cell__img-wrapper">
        <img className="cell__img" src={imgSrc} alt="img" />
      </div>
      <div className="cell__text">{text}</div>
    </div>
  ));

  cells.map((item, index) => {
    row.push(item);

    if ((index + 1) % tableColumns === 0) {
      table.push(
        <div className="pluses-table__row" key={`pluses-table-row-${index}`}>
          {row}
        </div>
      );
      row = [];
    }
  });

  return <div className="pluses-table">{[...table]}</div>;
};

const PlusesTable = () => (
  <div className="pluses-table__wrapper  ">
    {mainTextTemplate()}
    {backgroundImgTemplate()}
    {tableTemplate()}
  </div>
);

export { PlusesTable };
