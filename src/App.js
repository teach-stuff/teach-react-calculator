import React, { useState } from 'react';
// import Layout from './Components/Layout';

function App() {
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState(0);
  const [action, setAction] = useState(undefined);

  const appendDigit = (digit) => {
    const newValue = `${value}${digit}`;
    setValue(parseFloat(newValue));
  };

  const changeAction = (newAction) => {
    if (!action) {
      // if action wasn't set beforehand
      setTotal(value);
      setValue(0);
    }

    setAction(newAction);
  };

  const calculateTotal = () => {
    if (action === '+') setTotal(total + value);
    else if (action === '-') setTotal(total - value);
    else if (action === '*') setTotal(total * value);
    else if (action === '/') setTotal(total / value);

    setValue(0);
  };

  return (
    <div className="App">
      <div className="calc-body">
        <div className="calc-screen">
          <div className="calc-typed">
            {total === 0 ? '' : total} {action} {value === 0 ? '' : value}
            <span className="blink-me">_</span>
          </div>
        </div>
        <div className="calc-button-row">
          <div
            name="C"
            className="button c"
            onClick={() => {
              setTotal(0);
              setValue(0);
              setAction(undefined);
            }}
          >
            C
          </div>
          <div name="+/-" className="button l" onClick={() => undefined}>
            +/-
          </div>
          <div name="%" className="button l" onClick={() => undefined}>
            %
          </div>
          <div name="/" className="button l" onClick={() => changeAction('/')}>
            /
          </div>
        </div>
        <div className="calc-button-row">
          <div name="7" className="button" onClick={() => appendDigit(7)}>
            7
          </div>
          <div name="8" className="button" onClick={() => appendDigit(8)}>
            8
          </div>
          <div name="9" className="button" onClick={() => appendDigit(9)}>
            9
          </div>
          <div name="*" className="button l">
            *
          </div>
        </div>
        <div className="calc-button-row">
          <div name="4" className="button" onClick={() => appendDigit(4)}>
            4
          </div>
          <div name="5" className="button" onClick={() => appendDigit(5)}>
            5
          </div>
          <div name="6" className="button" onClick={() => appendDigit(6)}>
            6
          </div>
          <div name="-" className="button l" onClick={() => changeAction('-')}>
            −
          </div>
        </div>
        <div className="calc-button-row">
          <div name="1" className="button" onClick={() => appendDigit(1)}>
            1
          </div>
          <div name="2" className="button" onClick={() => appendDigit(2)}>
            2
          </div>
          <div name="3" className="button" onClick={() => appendDigit(3)}>
            3
          </div>
          <div name="+" className="button l" onClick={() => changeAction('+')}>
            +
          </div>
        </div>
        <div className="calc-button-row">
          <div name="." className="button" onClick={() => undefined}>
            .
          </div>
          <div name="0" className="button" onClick={() => appendDigit(0)}>
            0
          </div>
          <div name="CE" className="button" onClick={() => undefined}>
            CE
          </div>
          <div name="=" className="button l" onClick={() => calculateTotal()}>
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
