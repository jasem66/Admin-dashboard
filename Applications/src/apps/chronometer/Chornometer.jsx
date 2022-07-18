import React from 'react'
import { useState, useEffect } from 'react'
import '../chronometer/chornometer.css'
function Chronometer() {
  const [time, settime] = useState(0)
  const [timerOn, settimerOn] = useState(false)
  useEffect(() => {
    let interval
    if (timerOn) {
      interval = setInterval(() => {
        settime((prev) => prev + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timerOn])

  return (
    <div>
      <h2 className='chronometerTitle' id='Chronometer '>
        Chronometer
      </h2>
      <div className='container'>
        <div className='row'>
          <h3 className='time'>
            <span className='timeItem'>
              {('0' + Math.floor((time / 60000) % 60)).slice(-2)}
            </span>
            <span className='timeItem'>
              :{('0' + Math.floor((time / 1000) % 60)).slice(-2)}
            </span>
            <span className='timeItem'>
              :{('0' + ((time / 10) % 100)).slice(-2)}
            </span>
          </h3>

          <div className='buttonContainer'>
            {!timerOn ? (
              <button
                className='btn'
                onClick={() => {
                  settimerOn(true)
                  settime(0)
                }}
              >
                Start
              </button>
            ) : (
              <button
                className='btn'
                onClick={() => {
                  settimerOn(false)
                }}
              >
                Stop
              </button>
            )}

            {!timerOn ? (
              <button
                className='btn'
                onClick={() => {
                  settimerOn(true)
                }}
              >
                Resume
              </button>
            ) : (
              <button
                className='btn'
                onClick={() => {
                  settime(0)
                  settimerOn(false)
                }}
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chronometer 
