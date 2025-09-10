import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div
      className="Card"
      style={{ width: '33%', border: '1px solid ash',borderRadius: '5px', padding: '10px', margin: '10px' }}
    >
      <h2>{title}</h2>
      <h3> 3.2/5 ★</h3>
      <p>This is a simple card component.</p>
      <button onClick={()=>setHasLiked(!hasLiked)}>
        { hasLiked ? '❤️' : '🩶' }
      </button>
    </div>
  )
}

const App = () => {
  
  return (
    <div>
      <h1>My First React App</h1>
      <div
        style={{ display: 'flex', flexDirection: 'row' }}
        className="card-container"
      >
        <Card title="Avatar" />
        <Card title="Moomin" />
        <Card title="Deadwind" />
      </div>
    </div>
  )
}

export default App
