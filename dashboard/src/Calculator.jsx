import React from 'react'
import './calculator.css'
import { useState } from 'react'
function Calculator() {
  const [calc, setCalc] = useState('')
  const [result, setResult] = useState('')

  const operators = ['/', '*', '-', '+', '.']

  const updateCalc = (val) => {
    if (
      operators.includes(val) && calc === '' ||
      operators.includes(val) && operators.includes(calc.slice(-1))
    ) {
      return;
    }
    setCalc(calc + val);

    if(!operators.includes(val)){
     setResult(eval(calc + val).toString())
    }
  }

  const calcualte=()=>{
   setCalc(eval(calc).toString())
  }
  const del=()=>{
   if(calc == ''){
    return;
   }
   const value =calc.slice(0,-1)
   setCalc(value)
  }

  const createDigits = () => {
    const digit = []
    for (let i = 1; i < 10; i++) {
      digit.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      )
    }
    return digit
  }

  return (
    <div className='app'>
      <div className='calculator'>
        <div className='display'>
          {result ? <span>{result}</span> : ''} {calc || '0'}
        </div>

        <div className='operator'>
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={del}>DEL</button>
        </div>
        <div className='digits'>
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calcualte}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
