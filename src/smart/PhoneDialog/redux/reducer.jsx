import { TOGGLE_PHONE_DIALOG } from './actions';

const initState = {
  showPhoneDialog: true,
};

const phoneDialog = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_PHONE_DIALOG: {
      console.log('toggle phone dialog');
      return {
        ...state,
        showPhoneDialog: action.payload,
      };
    }

    default:
      return state;
  }
};

export { phoneDialog };
