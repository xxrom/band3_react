import React from 'react';
// import b from '@yandex-turbo/core/cn';
import './NewsCardTable.css';

const cls = 'news-card-table';

// export interface ITableProps {
//     columnNumber: number;
//     rowNumber: number;
//     direction?: 'vertical' | 'horizontal';
//     children: React.ReactNode;
//     itemRefs: Array<React.RefObject<HTMLTableDataCellElement>>;
// }

// export interface IChildProps {
//     className?: string | string[];
//     ref: React.Ref<HTMLDivElement>;
// }

export default (props) => {
  const {
    columnNumber,
    rowNumber,
    itemRefs,
    children,
    direction = 'horizontal',
  } = props;

  const tableCells = [];
  for (let i = 0; i < rowNumber; i++) {
    tableCells.push([]);
  }

  // Если количество children больше чем количество ячейке, то пропускаем их
  const childArray = React.Children.toArray(children).slice(
    0,
    rowNumber * columnNumber
  );

  childArray.forEach((child, index) => {
    const cellRef =
      direction === 'vertical'
        ? index % rowNumber === 0
          ? itemRefs[Math.floor(index / rowNumber)]
          : null
        : index < columnNumber
        ? itemRefs[index]
        : null;

    const cell = wrapTableCell(child, index, cellRef);

    tableCells[
      Math.floor(
        direction === 'vertical' ? index % rowNumber : index / columnNumber
      )
    ].push(cell);
  });

  return (
    <table className={cls}>
      <tbody>
        {tableCells.map((item, index) => wrapTableRow(item, index))}
      </tbody>
    </table>
  );
};

const wrapTableCell = (child, index, ref) => (
  <td key={index} className={`${cls}__td`} {...(ref ? { ref } : {})}>
    {child}
  </td>
);

const wrapTableRow = (columns, index) => <tr key={index}>{columns}</tr>;
