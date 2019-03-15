// import * as React from 'react';
// import { Adapter } from '@yandex-turbo/core/adapter';
// import { IAdapterContext } from '../../types/AdapterContext';
// import { NewsCardVerticalSlider, IProps } from './NewsCardVerticalSlider';

// export interface IScheme extends IProps {
//     block: string;
// }

// export default class NewsCardVerticalSliderAdapter extends Adapter<IProps, IScheme, IAdapterContext> {
//     public transform(data: IScheme): IProps {
//         const { items, columnNumber, rowNumber, direction, cardAlign, hideBullets } = data;

//         return {
//             columnNumber,
//             rowNumber,
//             direction,
//             cardAlign,
//             hideBullets,
//             items: items.map((item) => ({
//                 ...item,
//                 isTurbo: /\/turbo\?/.test(item.href)
//             }))
//         };
//     }

//     public element(props: IProps) {
//         return <NewsCardVerticalSlider {...props} />;
//     }
// }
