import { useState } from 'react'
import './App.css'

import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <h1>Poke API</h1>
    </>
  )
}

export default App
