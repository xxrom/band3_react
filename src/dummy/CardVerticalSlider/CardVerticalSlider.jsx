import React from 'react';

import { TurboCardSlider, Bullets, NewsCardTable } from './templates/';

const cls = 'card-vertical-slider';

/**
 * INCVSitem {
 *     agencyImageSrc: string;
 *     title: string;
 *     agency: string;
 *     time: string;
 *     href: string;
 *     isTurbo: boolean;
 */

/**
 * export interface IProps {
 *     items: INCVSitem[];
 *     rowNumber?: number;
 *     columnNumber?: number;
 *     direction?: 'vertical' | 'horizontal';
 *     cardAlign?: 'left' | 'center';
 *     hideBullets?: boolean;
 * }
 */

export class CardVerticalSlider extends React.Component {
  itemRefs = [];

  constructor(props) {
    super(props);
    const { columnNumber, rowNumber, items = [] } = props;

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
    const { hideBullets = false, cardAlign, direction, items } = this.props;

    return (
      <div className={cls} style={{ width: '100vw' }}>
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
                style={{ width: '100px' }}
              >{`item itemitemitem ${index}`}</div>
            ))}
          </NewsCardTable>
        </TurboCardSlider>
      </div>
    );
  }
}
