/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { updateInput, setDisplay, clear } from './actions';
import { evaluate } from 'mathjs';

const Calculator = ({ display, input, updateInput, setDisplay, clear }) => {

  const isOperator = (char) => ['+', '-', '*', '/'].includes(char);
  const isDecimal = (char) => char === '.';

  const handleClick = (value) => {
    if (value === '=') {
      try {
        // Replace non-numeric characters and evaluate the expression
        const sanitizedInput = input.replace(/[^-()\d/*+.]/g, '');
        const result = evaluate(sanitizedInput); // Use mathjs to evaluate the expression
        setDisplay(result.toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      clear();
    } else {
      updateInput(`${input}${value}`);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 border rounded-lg shadow-lg bg-gray-100">
      <div id="display" className="bg-gray-200 p-4 text-right text-3xl font-bold rounded-t-lg">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4">
        <button className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('C')}>C</button>
        <button className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('.')}>.</button>
        <button className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('0')}>0</button>
        <button className="p-4 text-xl bg-orange-500 text-white rounded-lg hover:bg-orange-600" onClick={() => handleClick('/')}>/</button>

        <button className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('1')}>1</button>
        <button className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('2')}>2</button>
        <button className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('3')}>3</button>
        <button className="p-4 text-xl bg-orange-500 text-white rounded-lg hover:bg-orange-600" onClick={() => handleClick('*')}>*</button>

        <button className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('4')}>4</button>
        <button className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('5')}>5</button>
        <button className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('6')}>6</button>
        <button className="p-4 text-xl bg-orange-500 text-white rounded-lg hover:bg-orange-600" onClick={() => handleClick('-')}>-</button>

        <button className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('7')}>7</button>
        <button className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('8')}>8</button>
        <button className="p-4 text-xl bg-gray-300 rounded-lg hover:bg-gray-400" onClick={() => handleClick('9')}>9</button>
        <button className="p-4 text-xl bg-orange-500 text-white rounded-lg hover:bg-orange-600" onClick={() => handleClick('+')}>+</button>

        <button className="col-span-4 p-4 text-xl bg-orange-500 text-white rounded-lg hover:bg-orange-600" onClick={() => handleClick('=')}>=</button>
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
