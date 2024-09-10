export const UPDATE_INPUT = 'UPDATE_INPUT';
export const SET_DISPLAY = 'SET_DISPLAY';
export const CLEAR = 'CLEAR';

// Action to update the input string
export const updateInput = (value) => ({
  type: UPDATE_INPUT,
  payload: value,
});

// Action to set the display
export const setDisplay = (value) => ({
  type: SET_DISPLAY,
  payload: value,
});

// Action to clear the input and display
export const clear = () => ({
  type: CLEAR,
});
