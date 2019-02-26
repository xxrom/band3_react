import { CHANGE_SLIDE } from './actions';

const initState = {
  test: 'test',
  currentImageIndex: 0,
  imageNames: ['main11_.png', 'main2.png', 'main3.png', 'main4.jpg'],
};

const imageSlider = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_SLIDE: {
      return {
        ...state,
        currentImageIndex:
          state.currentImageIndex + 1 < state.imageNames.length
            ? state.currentImageIndex + 1
            : 0,
      };
    }

    default:
      return state;
  }
};

export { imageSlider };
