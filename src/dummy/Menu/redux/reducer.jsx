const SET_REF_PRODUCT = 'SET_REF_PRODUCT';
const SET_REF_ABOUT = 'SET_REF_ABOUT';
const SET_REF_CONTACTS = 'SET_REF_CONTACTS';

const TO_PRODUCT = 'TO_PRODUCT';
const TO_ABOUT = 'TO_ABOUT';
const TO_CONTACTS = 'TO_CONTACTS';

const initState = {};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case SET_REF_PRODUCT: {
      return {
        ...state,
        productRef: action.payload,
      };
    }

    case TO_PRODUCT: {
      if (state.productRef && state.productRef.offsetTop) {
        window.scrollY(state.productRef.offsetTop);
      }

      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
}

export function setRefProduct(ref) {
  console.log('setRefProduct action', ref);
  return {
    type: SET_REF_PRODUCT,
    payload: ref,
  };
}

export function toProduct() {
  return {
    type: TO_PRODUCT,
    payload: true,
  };
}
