import React, { useState } from 'react';
import './Calculator.css'; // Importing the CSS file

// Button Component
const Button = ({ onClick, children }) => (
  <button className="button" onClick={onClick}>{children}</button>
);

// Display Component
const Display = ({ value }) => (
  <div className="display">{value}</div>
);

// Calculator Component
const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    // Logic for calculator operations
    if (value === '=') {
      try {
        setDisplay(eval(display));
      } catch {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      <Display value={display} />
      <div className="buttons">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', 'C'].map((value) => (
          <Button key={value} onClick={() => handleClick(value)}>
            {value}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
