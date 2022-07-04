import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import MainPage from './page/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <MainPage/>
    </div>
  )
}

export default App
