import { combineReducers } from 'redux';

import { imageSlider } from '../smart/ImageSlider/redux/reducer';

const rootReducer = combineReducers({
  imageSlider,
});

export default rootReducer;
