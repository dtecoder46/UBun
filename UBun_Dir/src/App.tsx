import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello world!</h1>
      <h2>These have the same colors</h2>
      <h3>This is a template</h3>

      <p>Same font styles</p>
      <p>Same font styles</p>
      <p>Same font styles</p>

      <div>
          <p>Same border settings and colors</p>
      </div>

      <div>
          <p>Same border settings and colors</p>
      </div>
    </>
  )
}

export default App
