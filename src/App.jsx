import { useState } from 'react'
import Name from './components/Name'
import Nav from './components/Nav'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App-div">
      <Nav />
      <Name />
    </div>
  )
}

export default App
