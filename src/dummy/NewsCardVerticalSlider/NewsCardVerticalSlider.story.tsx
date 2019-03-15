// import * as React from 'react';
// import { storiesOf } from '@storybook/react';
// import { NewsCardVerticalSlider } from './NewsCardVerticalSlider';
// import { newsCardVerticalSliderData } from './datastub';

// storiesOf('NewsCardVerticalSlider', module)
//     .add('Все возможные варианты', () => (
//         <div>
//             <div>rN( ) cN=(_) 'vertical' Все в одну строку выводятся</div>
//             <NewsCardVerticalSlider
//                 direction="vertical"
//                 cardAlign="center"
//                 items={newsCardVerticalSliderData}
//             />
//             <div>rN(2) cN=( ) 'vertical'</div>
//             <NewsCardVerticalSlider
//                 rowNumber={2}
//                 direction="vertical"
//                 cardAlign="center"
//                 items={newsCardVerticalSliderData}
//             />
//             <div>rN( ) cN=(4) 'vertical'</div>
//             <NewsCardVerticalSlider
//                 columnNumber={4}
//                 direction="vertical"
//                 cardAlign="center"
//                 items={newsCardVerticalSliderData}
//             />
//             <div>rN( ) cN=(4) ' '</div>
//             <NewsCardVerticalSlider
//                 direction="horizontal"
//                 cardAlign="center"
//                 items={newsCardVerticalSliderData}
//             />
//             <div>rN(2) cN=( ) 'horizontal'</div>
//             <NewsCardVerticalSlider
//                 rowNumber={2}
//                 direction="horizontal"
//                 cardAlign="center"
//                 items={newsCardVerticalSliderData}
//             />
//             <div>rN( ) cN=(4) 'horizontal'</div>
//             <NewsCardVerticalSlider
//                 columnNumber={4}
//                 direction="horizontal"
//                 cardAlign="center"
//                 items={newsCardVerticalSliderData}
//             />
//             <div>rN(2) cN=(4) 'vertical' 'left'</div>
//             <NewsCardVerticalSlider
//                 rowNumber={2}
//                 columnNumber={4}
//                 direction="vertical"
//                 cardAlign="left"
//                 items={newsCardVerticalSliderData}
//             />
//         </div>
//     ));

// storiesOf('NewsCardVerticalSlider', module)
//     .add('Вертикально в 3 строки выводим все данные items', () => (
//         <NewsCardVerticalSlider
//             rowNumber={3}
//             direction="vertical"
//             cardAlign="center"
//             items={newsCardVerticalSliderData}
//         />
//     ));

// storiesOf('NewsCardVerticalSlider', module)
//     .add('Горизонтально в 3 столбца выводим все данные', () => (
//         <NewsCardVerticalSlider
//             columnNumber={3}
//             direction="horizontal"
//             cardAlign="center"
//             items={newsCardVerticalSliderData}
//         />
//     ));
// storiesOf('NewsCardVerticalSlider', module)
//     .add('Обрезаем items, так как items передали больше 9 элементов!!! rN(3) cN=(3)', () => (
//         <NewsCardVerticalSlider
//             rowNumber={3}
//             columnNumber={3}
//             direction="horizontal"
//             cardAlign="center"
//             items={newsCardVerticalSliderData}
//         />
//     ));

// storiesOf('NewsCardVerticalSlider', module)
//     .add('- rN( ) cN=() "vertical"', () => (
//         <NewsCardVerticalSlider
//             direction="horizontal"
//             cardAlign="center"
//             items={newsCardVerticalSliderData}
//         />
//     ));

// storiesOf('NewsCardVerticalSlider', module)
//     .add('| rN( ) cN=( ) "horizontal"', () => (
//         <NewsCardVerticalSlider
//             direction="vertical"
//             cardAlign="center"
//             items={newsCardVerticalSliderData}
//         />
//     ));
// storiesOf('NewsCardVerticalSlider', module)
//     .add('1 items rN( ) cN=( ) "horizontal"', () => (
//         <NewsCardVerticalSlider
//             direction="vertical"
//             cardAlign="center"
//             items={newsCardVerticalSliderData.slice(0, 1)}
//         />
//     ));
// storiesOf('NewsCardVerticalSlider', module)
//     .add('2 items rN( ) cN=( ) "horizontal"', () => (
//         <NewsCardVerticalSlider
//             direction="vertical"
//             cardAlign="center"
//             items={newsCardVerticalSliderData.slice(0, 2)}
//         />
//     ));
// storiesOf('NewsCardVerticalSlider', module)
//     .add('rN( ) cN=( ) ""', () => (
//         <NewsCardVerticalSlider
//             items={newsCardVerticalSliderData}
//         />
//     ));

// storiesOf('NewsCardVerticalSlider', module)
//     .add('rN( ) cN=( ) "" hideBullets === true', () => (
//         <NewsCardVerticalSlider
//             items={newsCardVerticalSliderData}
//             hideBullets={true}
//         />
//     ));
