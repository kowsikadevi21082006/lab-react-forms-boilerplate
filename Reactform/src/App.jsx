import { useState } from 'react'
import './App.css'
import Formapp from './components/Formapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Formapp />
    </>
  )
}

export default App