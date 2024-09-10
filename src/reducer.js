import { UPDATE_INPUT, SET_DISPLAY, CLEAR } from './actions';

const initialState = {
  input: '',
  display: '0',
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT: {
      let newInput = action.payload;

      // Remove leading zeros if there's no decimal point and more than one digit
      if (
        newInput.startsWith('0')
        && newInput.length > 1
        && !['+', '-', '*', '/'].includes(newInput[1])
        && newInput[1] !== '.'
      ) {
        newInput = newInput.replace(/^0+/, '');
        if (newInput === '' || newInput[0] === '.') newInput = `0${newInput}`;
      }

      // Handle multiple decimal points in the same segment
      const parts = newInput.split(/([+\-*/])/);
      const lastPart = parts.pop();
      if (
        lastPart.includes('.')
        && (lastPart.match(/\./g) || []).length > 1
      ) {
        newInput = state.input;
      }

      // Handle multiple consecutive operators
      if (['+', '-', '*', '/'].includes(action.payload)) {
        const trimmedInput = newInput.replace(/[+\-*/]$/, '');
        if (trimmedInput === '' && action.payload === '-') {
          newInput = `${state.input}${action.payload}`;
        } else if (trimmedInput === '' && action.payload === '+') {
          newInput = state.input;
        } else {
          newInput = `${trimmedInput}${action.payload}`;
        }
      }

      return {
        ...state,
        input: newInput,
        display: newInput,
      };
    }

    case SET_DISPLAY:
      return {
        ...state,
        display: action.payload,
        input: action.payload,
      };

    case CLEAR:
      return initialState;

    default:
      return state;
  }
};

export default calculatorReducer;
