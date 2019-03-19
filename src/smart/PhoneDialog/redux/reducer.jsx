const TOGGLE_PHONE_DIALOG = 'TOGGLE_PHONE_DIALOG';
const CHANGE_PHONE = 'CHANGE_PHONE';
const PHONE_SANDED = 'PHONE_SANDED';
const SET_LOADING = 'SET_LOADING';

const initState = {
  phone: '+7 (___) ___-__-__',
  showPhoneDialog: false,
  phoneSanded: false,
  // phoneSanded: 'error',
  loading: false,
};

export default function phoneDialog(state = initState, { type, payload }) {
  switch (type) {
    case TOGGLE_PHONE_DIALOG: {
      console.log(TOGGLE_PHONE_DIALOG);
      let addition = {};
      if (!payload) {
        addition = {
          phoneSanded: false,
          loading: false,
        };
      }

      return {
        ...state,
        ...addition,
        showPhoneDialog: payload,
      };
    }
    case CHANGE_PHONE: {
      console.log(CHANGE_PHONE, payload);
      return {
        ...state,
        phone: payload,
      };
    }
    case PHONE_SANDED: {
      console.log(PHONE_SANDED, payload);
      return {
        ...state,
        phoneSanded: payload,
      };
    }

    case SET_LOADING: {
      return {
        ...state,
        loading: payload,
      };
    }

    default:
      return state;
  }
}

export function togglePhoneDialog(show) {
  console.log('togglePhoneDialog action ', show);
  return {
    type: TOGGLE_PHONE_DIALOG,
    payload: !show,
  };
}

export function changePhone({ target: { value } }) {
  console.log('changePhone action ', value);
  return {
    type: CHANGE_PHONE,
    payload: value,
  };
}

export function phoneSanded(sanded) {
  console.log('phoneSanded action ', sanded);
  return {
    type: PHONE_SANDED,
    payload: sanded,
  };
}

export function setLoading(loading) {
  return {
    type: SET_LOADING,
    payload: loading,
  };
}
