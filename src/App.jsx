import { useState } from 'react'
import Body from './components/Body'
import Nav from './components/Nav'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App-div">
      <Nav />
      <Body />
    </div>
  )
}

export default App
