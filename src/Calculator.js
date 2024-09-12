import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateDisplay, performOperation, clearDisplay } from './redux/actions';

const Calculator = () => {
  const dispatch = useDispatch();
  const display = useSelector(state => state.display);

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

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 border rounded-lg shadow-lg bg-gray-100">
      <div id="display" className="bg-gray-200 p-4 text-right text-3xl font-bold rounded-t-lg">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {/* Number and operator buttons */}
        {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '=', '/'].map(value => (
          <button
            key={value}
            id={value === '=' ? 'equals' : value === '0' ? 'zero' : value === '1' ? 'one' : value === '2' ? 'two' : value === '3' ? 'three' : value === '4' ? 'four' : value === '5' ? 'five' : value === '6' ? 'six' : value === '7' ? 'seven' : value === '8' ? 'eight' : value === '9' ? 'nine' : value === '+' ? 'add' : value === '-' ? 'subtract' : value === '*' ? 'multiply' : value === '/' ? 'divide' : 'decimal'}
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
