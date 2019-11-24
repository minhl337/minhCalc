import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [form, setForm] = useState({
    operator: '',
    display: '0',
    result: '',
    reset: false,
    equals: false,
    eValue: '0'
  });

  const { operator, display, result, reset, equals, eValue } = form;

  const handleNum = e => {
    e.preventDefault();
    display === '0' || reset
      ? setForm({
          ...form,
          display: e.target.innerText,
          reset: false
        })
      : setForm({
          ...form,
          display: display + e.target.innerText
        });
  };

  const handleDot = e => {
    e.preventDefault();
    if (display !== '0' && !reset && !display.includes('.')) {
      const numDisplay = display + '.';
      setForm({
        ...form,
        display: numDisplay
      });
    }
  };

  const handleSign = e => {
    e.preventDefault();
    if ((display !== '0' && !reset) || equals === true) {
      let numDisplay = Number(display);
      numDisplay = numDisplay * -1;
      numDisplay = numDisplay.toString();
      setForm({
        ...form,
        display: numDisplay
      });
    }
  };

  const handleOp = e => {
    e.preventDefault();

    if (operator && !equals) {
      let newResult;

      if (operator === '%') {
        newResult = (Number(result) % Number(display)).toFixed(2);
      }
      if (operator === '/') {
        newResult = (Number(result) / Number(display)).toFixed(2);
      }
      if (operator === '*') {
        newResult = (Number(result) * Number(display)).toFixed(2);
      }
      if (operator === '-') {
        newResult = (Number(result) - Number(display)).toFixed(2);
      }
      if (operator === '+') {
        newResult = (Number(result) + Number(display)).toFixed(2);
      }

      if (newResult.split('.')[1] === '00') {
        newResult = newResult.split('.')[0];
      }

      setForm({
        ...form,
        operator: e.target.name,
        display: newResult,
        result: newResult,
        reset: true,
        equals: false
      });
    } else {
      const newResult = display;
      setForm({
        ...form,
        operator: e.target.name,
        result: newResult,
        reset: true,
        equals: false
      });
    }
  };

  const handleEquals = e => {
    e.preventDefault();
    if (operator && display && result && !equals) {
      let newResult;

      if (operator === '%') {
        newResult = (Number(result) % Number(display)).toFixed(2);
      }
      if (operator === '/') {
        newResult = (Number(result) / Number(display)).toFixed(2);
      }
      if (operator === '*') {
        newResult = (Number(result) * Number(display)).toFixed(2);
      }
      if (operator === '-') {
        newResult = (Number(result) - Number(display)).toFixed(2);
      }
      if (operator === '+') {
        newResult = (Number(result) + Number(display)).toFixed(2);
      }
      if (newResult.split('.')[1] === '00') {
        newResult = newResult.split('.')[0];
      }
      let repeat = display;
      setForm({
        ...form,
        display: newResult,
        result: newResult,
        reset: true,
        equals: true,
        eValue: repeat
      });
    } else if (equals === true) {
      let newResult;

      if (operator === '%') {
        newResult = (Number(display) % Number(eValue)).toFixed(2);
      }
      if (operator === '/') {
        newResult = (Number(display) / Number(eValue)).toFixed(2);
      }
      if (operator === '*') {
        newResult = (Number(display) * Number(eValue)).toFixed(2);
      }
      if (operator === '-') {
        newResult = (Number(display) - Number(eValue)).toFixed(2);
      }
      if (operator === '+') {
        newResult = (Number(display) + Number(eValue)).toFixed(2);
      }
      if (newResult.split('.')[1] === '00') {
        newResult = newResult.split('.')[0];
      }
      setForm({
        ...form,
        display: newResult,
        result: newResult,
        reset: true,
        equals: true
      });
    }
  };

  const handleClear = e => {
    e.preventDefault();
    if (display !== '0') {
      setForm({
        ...form,
        display: '0'
      });
    } else if (display === '0') {
      setForm({
        operator: '',
        display: '0',
        result: '',
        reset: false,
        equals: false,
        eValue: '0'
      });
    }
  };

  return (
    <div className='calc'>
      <div className='display'>{display}</div>
      <div className='buttons'>
        <button onClick={e => handleClear(e)} className='mbutton'>
          {display === '0' ? 'AC' : 'C'}
        </button>
        <button onClick={e => handleSign(e)} className='mbutton'>
          +/-
        </button>
        <button className='mbutton' name='%' onClick={e => handleOp(e)}>
          %
        </button>
        <button className='obutton' name='/' onClick={e => handleOp(e)}>
          ÷
        </button>

        <button onClick={e => handleNum(e)}>7</button>
        <button onClick={e => handleNum(e)}>8</button>
        <button onClick={e => handleNum(e)}>9</button>
        <button className='obutton' name='*' onClick={e => handleOp(e)}>
          X
        </button>

        <button onClick={e => handleNum(e)}>4</button>
        <button onClick={e => handleNum(e)}>5</button>
        <button onClick={e => handleNum(e)}>6</button>
        <button className='obutton' name='-' onClick={e => handleOp(e)}>
          -
        </button>

        <button onClick={e => handleNum(e)}>1</button>
        <button onClick={e => handleNum(e)}>2</button>
        <button onClick={e => handleNum(e)}>3</button>
        <button className='obutton' name='+' onClick={e => handleOp(e)}>
          +
        </button>

        <button onClick={e => handleNum(e)} id='zbutton'>
          <span style={{ marginLeft: '20%' }}>0</span>
        </button>
        <button onClick={e => handleDot(e)}>.</button>
        <button onClick={e => handleEquals(e)} className='obutton'>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
