import { useState } from 'react'
import './App.css'

import Board from './Board';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <h2>Chess Board</h2>
      <Board /> 
      </div>
        
    </>
  )
}

export default App
