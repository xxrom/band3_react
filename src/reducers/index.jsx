import { combineReducers } from 'redux';

import { imageSlider } from '../smart/ImageSlider/redux/reducer';
import { phoneDialog } from '../smart/PhoneDialog/redux/reducer';
import * as menu from '../dummy/Menu/redux';

const rootReducer = combineReducers({
  imageSlider,
  phoneDialog,
  menu: menu.default,
});

export default rootReducer;

export { imageSlider, phoneDialog, menu };
