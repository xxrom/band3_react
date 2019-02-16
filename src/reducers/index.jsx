import { combineReducers } from 'redux';

import { imageSlider } from '../smart/ImageSlider/redux/reducer';
import { phoneDialog } from '../smart/PhoneDialog/redux/reducer';

const rootReducer = combineReducers({
  imageSlider,
  phoneDialog,
});

export default rootReducer;
