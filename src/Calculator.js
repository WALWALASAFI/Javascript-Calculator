import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [input, setInput] = useState('');

  const isOperator = (char) => ['+', '-', '*', '/'].includes(char);

  const handleClick = (value) => {
    const updateInput = (newInput) => {
      // Remove leading zeros if there's no decimal point and more than one digit
      if (newInput.startsWith('0') && newInput.length > 1 && !isOperator(newInput[1]) && newInput[1] !== '.') {
        newInput = newInput.replace(/^0+/, '');
        if (newInput === '' || newInput[0] === '.') newInput = '0' + newInput;
      }

      // Handle multiple decimal points in the same segment
      const parts = newInput.split(/(\D)/);
      const lastPart = parts[parts.length - 1];
      if (lastPart.includes('.') && (lastPart.match(/\./g) || []).length > 1) {
        return input;
      }

      // Handle multiple consecutive operators
      if (isOperator(value)) {
        // Remove the last operator if it exists and not start with a negative sign
        const trimmedInput = newInput.replace(/[\+\-\*\/]$/, '');
        if (trimmedInput === '' && value === '-') {
          return newInput + value; // Handle negative sign
        }
        if (trimmedInput === '') {
          return newInput;
        }
        return trimmedInput + value;
      }

      return newInput;
    };

    if (value === '=') {
      try {
        // Replace non-numeric characters and evaluate the expression
        const result = eval(input.replace(/[^-()\d/*+.]/g, ''));
        setDisplay(result.toString());
        setInput(result.toString());
      } catch (error) {
        setDisplay('Error');
        setInput('');
      }
    } else if (value === 'C') {
      setDisplay('0');
      setInput('');
    } else {
      const newInput = updateInput(input + value);
      setInput(newInput);
      setDisplay(newInput);
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

export default Calculator;
