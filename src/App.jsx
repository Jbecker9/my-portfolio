import { useState } from 'react'
import Nav from './components/Nav'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App-div">
      <Nav />
      
    </div>
  )
}

export default App
