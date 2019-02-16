export const TOGGLE_PHONE_DIALOG = 'TOGGLE_PHONE_DIALOG';

function togglePhoneDialog(show) {
  console.log('togglePhoneDialog action ', show);
  return {
    type: TOGGLE_PHONE_DIALOG,
    payload: !show,
  };
}

export { togglePhoneDialog };
