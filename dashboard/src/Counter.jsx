import React from 'react'
import { useState, useEffect } from 'react'
function Counter() {
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(false)
  useEffect(() => {
    let interval
    if (start) {
      interval = setInterval(() => {
        setTime((prev) => {
          return prev + 1
        })
      }, 1000)
  
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [start])

  const limit=(num)=>{
if(num===5){
setStart(false)
return( setTime(0) 
 )

 
}

return num
  }

  return (
    <>
      <div>{limit(time)}</div>
      
      <button onClick={() => setStart(true)}>Start</button>
      <button
        onClick={() => {
          setStart(false)
        }}
      >
        stop
      </button>
      <button onClick={()=>{setStart(false) 
      setTime(0) }
      
      } >  reset</button>
     
     
    </>
  )
}

export default Counter
