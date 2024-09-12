/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable no-eval */
import { CLEAR_DISPLAY, UPDATE_DISPLAY, PERFORM_OPERATION } from './actions';

const initialState = {
  display: '0',
  lastResult: null,
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_DISPLAY:
      return {
        ...state,
        display: '0',
        lastResult: null,
      };

    case UPDATE_DISPLAY:
      const value = action.payload;
      const parts = state.display.split(/[\+\-\*\/]/);
      const lastPart = parts[parts.length - 1];

      // Handle multiple leading zeros
      if (value === '0' && (state.display === '0' || lastPart === '0')) {
        return state;
      }

      // Handle decimal points
      if (value === '.' && lastPart.includes('.')) {
        return state; // Do not add another decimal point
      }

      // Concatenate new value to display
      const newDisplay = (state.display === '0' && value !== '.') ? value : state.display + value;

      return {
        ...state,
        display: newDisplay,
      };

    case PERFORM_OPERATION:
      try {
        // Use a safer eval or a library for evaluation
        const result = eval(state.display); // WARNING: eval can be dangerous, consider using a library for evaluation
        return {
          ...state,
          display: result.toString(),
          lastResult: result,
        };
      } catch (error) {
        return {
          ...state,
          display: 'Error',
        };
      }

    default:
      return state;
  }
};

export default calculatorReducer;
