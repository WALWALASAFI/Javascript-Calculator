import React from 'react';
import { connect } from 'react-redux';
import { updateInput, setDisplay, clear } from './actions'; // Import action creators
import { evaluate } from 'mathjs'; // Place this import before './actions'
import './index.css'; // Import your CSS

const Calculator = ({ display, input, updateInput, setDisplay, clear }) => {
  const handleClick = (value) => {
    if (value === '=') {
      try {
        // Remove unnecessary spaces and ensure valid format
        const sanitizedInput = input
          .replace(/[^-()\d/*+.]/g, '') // Remove invalid characters
          .replace(/(\d)([+\-*/])(\d)/g, '$1$2$3') // Fix misplaced operators
          .replace(/([+\-*/])(\1)+/g, '$1') // Handle consecutive operators
          .replace(/([+\-*/])(\d+)([+\-*/])$/, '$2$3') // Remove trailing operator
          .replace(/(\d+)([+\-*/])$/, '$1'); // Remove trailing operators

        // Evaluate the sanitized input
        const result = evaluate(sanitizedInput);
        setDisplay(result.toString());
        updateInput(result.toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      clear();
    } else if (value === '.') {
      // Handle decimal points: add only if there's no existing decimal in the last number
      const parts = input.split(/([+\-*/])/);
      const lastPart = parts.pop();
      if (!lastPart.includes('.')) {
        updateInput(`${input}${value}`);
      }
    } else if (value !== '0' || (input !== '' && !/[+\-*/]$/.test(input))) {
      // Handle leading zeros: only append if not in the middle of a number
      if (input === '0' && value !== '.') {
        updateInput(`${value}`);
      } else {
        updateInput(`${input}${value}`);
      }
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 border rounded-lg shadow-lg bg-gray-100">
      <div id="display" className="bg-gray-200 p-4 text-right text-3xl font-bold rounded-t-lg">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4">
        <button id="clear" className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('C')}>C</button>
        <button id="decimal" className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('.')}>.</button>
        <button id="zero" className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('0')}>0</button>
        <button id="divide" className="p-4 text-xl bg-orange-500 text-white rounded-lg hover:bg-orange-600" onClick={() => handleClick('/')}>/</button>

        <button id="one" className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('1')}>1</button>
        <button id="two" className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('2')}>2</button>
        <button id="three" className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('3')}>3</button>
        <button id="multiply" className="p-4 text-xl bg-orange-500 text-white rounded-lg hover:bg-orange-600" onClick={() => handleClick('*')}>*</button>

        <button id="four" className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('4')}>4</button>
        <button id="five" className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('5')}>5</button>
        <button id="six" className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('6')}>6</button>
        <button id="subtract" className="p-4 text-xl bg-orange-500 text-white rounded-lg hover:bg-orange-600" onClick={() => handleClick('-')}>-</button>

        <button id="seven" className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('7')}>7</button>
        <button id="eight" className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('8')}>8</button>
        <button id="nine" className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('9')}>9</button>
        <button id="add" className="p-4 text-xl bg-orange-500 text-white rounded-lg hover:bg-orange-600" onClick={() => handleClick('+')}>+</button>

        <button id="equals" className="col-span-4 p-4 text-xl bg-orange-500 text-white rounded-lg hover:bg-orange-600" onClick={() => handleClick('=')}>=</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  display: state.display,
  input: state.input,
});

const mapDispatchToProps = {
  updateInput,
  setDisplay,
  clear,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
