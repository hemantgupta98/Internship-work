import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './About/About'
import Term from './Terms/Term'
import Privacy from './Privacy/Privacy'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Privacy />

    </>
  )
}

export default App
