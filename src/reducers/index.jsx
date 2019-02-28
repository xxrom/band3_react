import { combineReducers } from 'redux';

import { imageSlider } from '../smart/ImageSlider/redux/reducer';
import * as phoneDialog from '../smart/PhoneDialog/redux/reducer';
import * as menu from '../dummy/Menu/redux';

const rootReducer = combineReducers({
  imageSlider,
  phoneDialog: phoneDialog.default,
  menu: menu.default,
});

export default rootReducer;

export { imageSlider, phoneDialog, menu };
