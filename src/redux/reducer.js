/* eslint-disable no-case-declarations */
/* eslint-disable no-useless-escape */

import { CLEAR_DISPLAY, UPDATE_DISPLAY, PERFORM_OPERATION } from './actions';
import { evaluate } from 'mathjs'; // Import the evaluate function from mathjs

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

    case UPDATE_DISPLAY: {
      const value = action.payload;
      const parts = state.display.split(/[+\-*/]/);
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
    }

    case PERFORM_OPERATION: {
      try {
        // Use mathjs for evaluation
        const result = evaluate(state.display);
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
    }

    default:
      return state;
  }
};

export default calculatorReducer;

/* eslint-enable no-case-declarations */
/* eslint-enable no-useless-escape */
