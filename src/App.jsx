import React, { useState } from 'react'


const App = () => {
  const [A, SetA] = useState(0)



  return(
    <div>
      <h1>COUNTER:</h1>
      <h1>{A}</h1>
      <button onClick={() =>SetA(A+1)}>increment</button>
      <button onClick={() =>SetA(A-1)}>decrement</button>
      <button onClick={() =>SetA(0)}>reset</button>
    </div>
  )
}

export default App