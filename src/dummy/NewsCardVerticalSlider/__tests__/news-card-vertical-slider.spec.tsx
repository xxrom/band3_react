import * as React from 'react';
import { shallow } from 'enzyme';
import { NewsCardVerticalSlider } from '../NewsCardVerticalSlider';
import { newsCardVerticalSliderData } from '../datastub';

describe('NewsCardVerticalSlider component', () => {
    it('render NewsCardVerticalSlider без ошибок', () => {
        const wrapper = shallow(
            <NewsCardVerticalSlider
                items={newsCardVerticalSliderData.map((item) => ({
                    ...item,
                    isTurbo: /\/turbo\?/.test(item.href)
                }))}
            />
        );
        expect(wrapper.length).toEqual(1);
    });
});
