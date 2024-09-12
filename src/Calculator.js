/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable no-eval */
import { useSelector, useDispatch } from 'react-redux';
import { updateDisplay, performOperation, clearDisplay } from './redux/actions';

const Calculator = () => {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.display);

  // Handle button click events
  const handleButtonClick = (value) => {
    if (value === '=') {
      dispatch(performOperation());
    } else if (value === 'C') {
      dispatch(clearDisplay());
    } else {
      dispatch(updateDisplay(value));
    }
  };

  // Helper function to get button id based on value
  const getButtonId = (value) => {
    switch (value) {
      case '=':
        return 'equals';
      case '0':
        return 'zero';
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      case '+':
        return 'add';
      case '-':
        return 'subtract';
      case '*':
        return 'multiply';
      case '/':
        return 'divide';
      case '.':
        return 'decimal';
      default:
        return '';
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 border rounded-lg shadow-lg bg-gray-100">
      <div id="display" className="bg-gray-200 p-4 text-right text-3xl font-bold rounded-t-lg">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {/* Number and operator buttons */}
        {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '=', '/'].map((value) => (
          <button
            key={value}
            id={getButtonId(value)}
            className="p-4 bg-blue-200 rounded hover:bg-gray-300"
            onClick={() => handleButtonClick(value)}
          >
            {value}
          </button>
        ))}
        {/* Clear button */}
        <button
          id="clear"
          className="p-4 bg-blue-500 text-white rounded hover:bg-red-600 col-span-4"
          onClick={() => handleButtonClick('C')}
        >
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
