import React from 'react';

// import TurboCardSlider from '../TurboCardSlider/TurboCardSlider';
// import { Bullets } from '../TurboCardSlider/Bullets/Bullets';
// import NewsCardTable from '../NewsCardTable/NewsCardTable';
// import { Snippet } from './Snippet/Snippet';

const cls = 'news-card-vertical-slider';

// export interface INCVSitem {
//     agencyImageSrc: string;
//     title: string;
//     agency: string;
//     time: string;
//     href: string;
//     isTurbo: boolean;
// }

// export interface IProps {
//     items: INCVSitem[];
//     rowNumber?: number;
//     columnNumber?: number;
//     direction?: 'vertical' | 'horizontal';
//     cardAlign?: 'left' | 'center';
//     hideBullets?: boolean;
// }

export class NewsCardVerticalSlider extends React.Component {
  // private itemRefs: Array<React.RefObject<HTMLTableDataCellElement>> = [];
  // private columnNumber: number;
  // private rowNumber: number;

  constructor(props) {
    console.log('NEW INIT');
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
      <div className={cls}>
        {/* <TurboCardSlider
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
              <div>{`item ${index}`}</div>
              // <Snippet
              //     key={`snippets_${index}`}
              //     agencyImageSrc={agencyImageSrc}
              //     title={title}
              //     agency={agency}
              //     time={time}
              //     href={href}
              //     isTurbo={isTurbo}
              // />
            ))}
          </NewsCardTable>
        </TurboCardSlider> */}
      </div>
    );
  }
}
