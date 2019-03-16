import React from 'react';

import { Image } from '../Image';
import { TurboCardSlider, Bullets, NewsCardTable } from './templates/';
import './CardVerticalSlider.css';

const cls = 'card-vertical-slider';
/**
 * export interface IProps {
 *     items: Array<{...}>;
 *     rowNumber?: number;
 *     columnNumber?: number;
 *     direction?: 'vertical' | 'horizontal';
 *     cardAlign?: 'left' | 'center';
 *     hideBullets?: boolean;
 * }
 */

export class CardVerticalSlider extends React.Component {
  itemRefs = [];
  defaultItems = [];

  constructor(props) {
    super(props);
    const { columnNumber, rowNumber } = props;

    const fPath = 'sliders/';
    this.defaultItems = [
      { src: `${fPath}1.jpg` },
      { src: `${fPath}2.png` },
      { src: `${fPath}3.png` },
      { src: `${fPath}4.png` },
      { src: `${fPath}5.jpg` },
      { src: `${fPath}6.jpg` },
    ];
    const { items = this.defaultItems } = props;

    const itemsLength = items.length;

    this.columnNumber = columnNumber || -1;
    this.rowNumber = rowNumber || -1;

    if (this.rowNumber === -1 && this.columnNumber === -1) {
      this.rowNumber = 1;
      this.columnNumber = itemsLength;
    } else if (this.rowNumber === -1 && this.columnNumber > 0) {
      this.rowNumber = Math.ceil(itemsLength / this.columnNumber);
    } else if (this.columnNumber === -1 && this.rowNumber > 0) {
      this.columnNumber = Math.ceil(itemsLength / this.rowNumber);
    }

    for (let i = 0; i < this.columnNumber; i++) {
      this.itemRefs.push(React.createRef());
    }
  }

  render() {
    const {
      hideBullets = false,
      cardAlign,
      direction,
      items = this.defaultItems,
    } = this.props;

    return (
      <div className={cls}>
        <TurboCardSlider
          itemRefs={this.itemRefs}
          cardAlign={cardAlign}
          {...(hideBullets ? {} : { renderBullets: Bullets })}
        >
          <NewsCardTable
            columnNumber={this.columnNumber}
            rowNumber={this.rowNumber}
            itemRefs={this.itemRefs}
            direction={direction}
          >
            {items.map((item, index) => (
              <div
                key={`snippets_${index}`}
                style={{ width: '90vw', minWidth: '200px', maxWidth: '700px' }}
              >
                {`item itemitemitem ${index}`}
                <Image src={item.src} />
              </div>
            ))}
          </NewsCardTable>
        </TurboCardSlider>
      </div>
    );
  }
}
