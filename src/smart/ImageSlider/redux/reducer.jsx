import { CHANGE_SLIDE } from './actions';

const initState = {
  test: 'test',
  currentImageIndex: 0,
  imageNames: ['main1.jpg', 'main2.png', 'main3.png', 'main4.jpg'],
};

const imageSlider = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_SLIDE: {
      console.log('change_slide');
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
