import React, { useState } from 'react';
import Button from './Button';

const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [input, setInput] = useState('');
    const [operator, setOperator] = useState('');
    const [firstOperand, setFirstOperand] = useState('');

    const handleButtonClick = (value) => {
        if (value === 'AC') {
            setDisplay('0');
            setInput('');
            setOperator('');
            setFirstOperand('');
        } else if (value === '=') {
            if (firstOperand && operator && input) {
                try {
                    const result = eval(`${firstOperand} ${operator} ${input}`);
                    setDisplay(result);
                    setInput(result);
                    setOperator('');
                    setFirstOperand('');
                } catch {
                    setDisplay('Error');
                }
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            setFirstOperand(input);
            setOperator(value);
            setInput('');
        } else if (value === '.') {
            if (!input.includes('.')) {
                setInput(input + '.');
                setDisplay(input + '.');
            }
        } else {
            setInput(input + value);
            setDisplay(input + value);
        }
    };

    return (
        <div className="w-80 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div id="display" className="bg-gray-800 text-white text-right p-4 text-3xl">{display}</div>
            <div className="grid grid-cols-4 gap-1">
                {['AC', '/', '*', '-', '+', '=', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'].map((item) => (
                    <Button key={item} value={item} onClick={() => handleButtonClick(item)} />
                ))}
            </div>
        </div>
    );
};

export default Calculator;
