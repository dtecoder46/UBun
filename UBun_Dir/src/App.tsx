import { useState } from 'react'
import './App.css'
import './index.css'
import classnames from "classnames"

function App() {
  const [count, setCount] = useState(0)
  const h1 = "text-2xl"
  const h2 = "text-xl"
  const h3 = "text-lg"

  const center = "place-items-center place-self-center"
  const button = "text-center"

  const bold = "font-bold"

  const heading = "text-amber-300 font-mono"
  
  return (
    <>
      <img src="./graphics/UBun.svg" className={center}></img>
      <div className={ classnames( center, heading) }>
        <br></br>
        <h1 className={ classnames( h1, bold) }>Hello world!</h1>
        <h2 className={ classnames( h2, bold) }>Welcome to UBun</h2>
        <h3 className={ classnames( h3, bold) }>Feel free to fork this template</h3>
      <br></br>
      </div>

      <h3 className={ classnames( h1, bold, center, heading) }>Why UBun?</h3>
      <p className={ classnames( center ) }>Tailwind is better than regular CSS</p>
      <p className={ classnames( center ) }>But for projects with lots utility classes that are shared across multiple elements</p>

      <br></br>

      <div className={ classnames( center ) }>
          <p>Tailwind can easily waste time</p>
      </div>

      <div className={ classnames( center ) }>
          <p>So why not store shared utility classes in native Javascript variables?</p>
      </div>

      <br></br>

      <div className={ classnames( button ) }>
        <button>Now with UBun... (click to continue)</button><br></br>
        <button>Have a good day! (click to continue)</button>
      </div>
    </>
  )
}

export default App
