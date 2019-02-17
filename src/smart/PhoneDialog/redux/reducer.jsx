const TOGGLE_PHONE_DIALOG = 'TOGGLE_PHONE_DIALOG';
const CHANGE_PHONE = 'CHANGE_PHONE';

function togglePhoneDialog(show) {
  console.log('togglePhoneDialog action ', show);
  return {
    type: TOGGLE_PHONE_DIALOG,
    payload: !show,
  };
}

function changePhone({ target: { value } }) {
  console.log('changePhone action ', value);
  return {
    type: CHANGE_PHONE,
    payload: value,
  };
}

const initState = {
  phone: '+7 (___) ___-__-__',
  showPhoneDialog: true,
};

const phoneDialog = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_PHONE_DIALOG: {
      console.log(TOGGLE_PHONE_DIALOG);
      return {
        ...state,
        showPhoneDialog: action.payload,
      };
    }
    case CHANGE_PHONE: {
      console.log(CHANGE_PHONE, action.payload);
      return {
        ...state,
        phone: action.payload,
      };
    }

    default:
      return state;
  }
};

export { phoneDialog, togglePhoneDialog, changePhone };
