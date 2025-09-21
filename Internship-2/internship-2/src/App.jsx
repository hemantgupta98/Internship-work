import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './About/About'
import Term from './Terms/Term'
import Privacy from './Privacy/Privacy'
import Affiliate from './Affiliate/Affiliate'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Affiliate />

    </>
  )
}

export default App
