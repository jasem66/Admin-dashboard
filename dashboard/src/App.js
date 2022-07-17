import React, { useEffect, useState } from 'react'
// import './App.css'
function App() {
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
    <div className='container'>
      <div className='time'>
        <p>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}</p> 
        <p>:{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</p> 
        <p>:{('0' + ((time / 10) % 100)).slice(-2)}</p>
      </div>
      {!timerOn ? (
        <button  className='btn'
          onClick={() => {
            settimerOn(true)
            settime(0)
          }}
        >
          Start
        </button>
      ) : (
        <button  className='btn'
          onClick={() => {
            settimerOn(false)
          }}
        >
          Stop
        </button>
      )}
   

      {!timerOn ? (
        <button  className='btn'
          onClick={() => {
            settimerOn(true)
          }}
        >
          
          Resume
        </button>
      ):(
         <button  className='btn'
        onClick={() => {
          settime(0)
          settimerOn(false)
        }}
      >
        Reset
      </button>
      )
      }

     
    </div>
  )
}

export default App
