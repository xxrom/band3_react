export const CHANGE_SLIDE = 'CHANGE_SLIDE';

function changeSlider(id) {
  console.log('changeSlider action ', id);
  return {
    type: CHANGE_SLIDE,
    payload: 'up',
  };
}

export { changeSlider };
