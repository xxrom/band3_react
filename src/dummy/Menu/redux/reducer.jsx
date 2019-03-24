const SET_REF_PRODUCT = 'SET_REF_PRODUCT';
const SET_REF_ABOUT = 'SET_REF_ABOUT';
const SET_REF_WARRANTY = 'SET_REF_WARRANTY';
const SET_REF_CONTACTS = 'SET_REF_CONTACTS';

const TO_PRODUCT = 'TO_PRODUCT';
const TO_ABOUT = 'TO_ABOUT';
const TO_WARRANTY = 'TO_WARRANTY';
const TO_CONTACTS = 'TO_CONTACTS';

const TOGGLE_MOBILE_MENU = 'TOGGLE_MOBILE_MENU';

const initState = {
  showMobileMenu: false,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case SET_REF_PRODUCT: {
      return {
        ...state,
        productRef: action.payload,
      };
    }
    case SET_REF_WARRANTY: {
      return {
        ...state,
        warrantyRef: action.payload,
      };
    }
    case SET_REF_ABOUT: {
      return {
        ...state,
        aboutRef: action.payload,
      };
    }
    case SET_REF_CONTACTS: {
      return {
        ...state,
        contactsRef: action.payload,
      };
    }

    case TO_PRODUCT: {
      setScrollTo(state.productRef, -70);
      return {
        ...state,
        showMobileMenu: false,
      };
    }
    case TO_WARRANTY: {
      setScrollTo(state.warrantyRef, -70);
      return {
        ...state,
        showMobileMenu: false,
      };
    }
    case TO_ABOUT: {
      setScrollTo(state.aboutRef, -70);
      return {
        ...state,
        showMobileMenu: false,
      };
    }
    case TO_CONTACTS: {
      setScrollTo(state.contactsRef);
      return {
        ...state,
        showMobileMenu: false,
      };
    }

    case TOGGLE_MOBILE_MENU: {
      return {
        ...state,
        showMobileMenu: !state.showMobileMenu,
      };
    }

    default: {
      return state;
    }
  }
}

function setScrollTo(ref, correction = 0) {
  if (ref && ref.current) {
    window.scrollTo({
      top: ref.current.offsetTop + correction,
      behavior: 'smooth',
    });
  } else {
    console.error(`error: setScrollTo undefined ref in action!`);
  }
}

export function setRefProduct(ref) {
  return {
    type: SET_REF_PRODUCT,
    payload: ref,
  };
}
export function setRefWarranty(ref) {
  return {
    type: SET_REF_WARRANTY,
    payload: ref,
  };
}
export function setRefAbout(ref) {
  return {
    type: SET_REF_ABOUT,
    payload: ref,
  };
}
export function setRefContacts(ref) {
  return {
    type: SET_REF_CONTACTS,
    payload: ref,
  };
}

export function toProduct() {
  return {
    type: TO_PRODUCT,
    payload: true,
  };
}
export function toAbout() {
  return {
    type: TO_ABOUT,
    payload: true,
  };
}
export function toWarranty() {
  return {
    type: TO_WARRANTY,
    payload: true,
  };
}
export function toContacts() {
  return {
    type: TO_CONTACTS,
    payload: true,
  };
}

export function toggleMobileMenu() {
  return {
    type: TOGGLE_MOBILE_MENU,
    payload: true,
  };
}
