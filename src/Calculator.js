// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [value, setValue] = useState('');

    const handleClick = (buttonValue) => {
        if (buttonValue === '=') {
            calculate();
        } else if (buttonValue === 'C') {
            setValue('');
        } else {
            setValue(value + buttonValue);
        }
    };

    const calculate = () => {
        try { 
            setValue(eval(value).toString());
        } catch (e) {
            setValue('error');
        }
    };

    return (
        <div className="calculator">
            <Display value={value} />
            <div className="buttons">
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((button) => (
                    <Button key={button} value={button} handleClick={handleClick} />
                ))}
            </div>
        </div>
    );
};

const Display = ({ value }) => (
    <div className="display">{value}</div>
);

const Button = ({ value, handleClick }) => (
    <button onClick={() => handleClick(value)}>{value}</button>
);

export default Calculator;
