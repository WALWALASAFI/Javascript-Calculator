// actions.js

export const UPDATE_DISPLAY = 'UPDATE_DISPLAY';
export const PERFORM_OPERATION = 'PERFORM_OPERATION';
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';

export const updateDisplay = (value) => ({
  type: UPDATE_DISPLAY,
  payload: value,
});

export const performOperation = () => ({
  type: PERFORM_OPERATION,
});

export const clearDisplay = () => ({
  type: CLEAR_DISPLAY,
});
