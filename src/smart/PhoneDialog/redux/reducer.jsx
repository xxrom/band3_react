const TOGGLE_PHONE_DIALOG = 'TOGGLE_PHONE_DIALOG';
const CHANGE_PHONE = 'CHANGE_PHONE';
const PHONE_SANDED = 'PHONE_SANDED';

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

function phoneSanded(sanded) {
  console.log('phoneSanded action ', sanded);
  return {
    type: PHONE_SANDED,
    payload: sanded,
  };
}

const initState = {
  phone: '+7 (___) ___-__-__',
  showPhoneDialog: false,
  phoneSanded: false,
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
    case PHONE_SANDED: {
      console.log(PHONE_SANDED, action.payload);
      return {
        ...state,
        phoneSanded: action.payload,
      };
    }

    default:
      return state;
  }
};

export { phoneDialog, togglePhoneDialog, changePhone, phoneSanded };
