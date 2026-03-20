import { useState } from 'react'
import './App.css'
import './index.css'
import classnames from "classnames"

function App() {
  const h1 = "text-2xl"
  const h2 = "text-xl"
  const h3 = "text-lg"

  const center = "place-items-center place-self-center"
  const button = "text-center"

  const bold = "font-bold"

  const heading = "text-amber-300 font-mono"

  const paragraph = "font-serif text-lg tracking-wider"

  const fuchsia = "text-fuchsia-400"
  const violet = "text-violet-300"
  // As shown below, 
  // Tailwind utility classes can pile up and make your frontend HTML look ugly
  // Hence why UBun is needed to bundle these long lines of utility classes and
  // make them shareable across multiple components!
  const purple = "bg-purple-600 text-mauve-800 font-black p-2 rounded-full border-double border-purple-400 border-4 focus:border-purple-600 focus:bg-purple-400"
  
  const white = "text-white"

  let click_counter = 1;
  let click_counter2 = 1;

  // While React does have their own way of updating HTML content
  // I feel that using regular DOM manipulation is more familiar
  // and is easier to implement

  function click() {
    const p1: any = document.getElementById("text1")

    if (click_counter % 2 == 0) { 
      // Each odd numbered click hides text
      p1.innerHTML = ""
    }
    else {
      // Each even numbered click shows text
      p1.innerHTML = "Styling with Tailwind comes with less struggle!"
    }

    click_counter += 1
  }

  function click2() {
    const p2: any = document.getElementById("text2")

    if (click_counter2 % 2 == 0) { 
      // Each odd numbered click hides text
      p2.innerHTML = ""
    }
    else {
      // Each even numbered click shows text
      p2.innerHTML = "Stay safe and healthy! :)"
    }

    click_counter2 += 1
  }

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
      <p className={ classnames( center, paragraph, fuchsia ) }>Tailwind is better than regular CSS</p>
      <p className={ classnames( center, paragraph, fuchsia ) }>But for projects with lots utility classes that are shared across multiple elements</p>

      <br></br>

      <div className={ classnames( center, paragraph, violet ) }>
          <p>Tailwind can easily waste time</p>
      </div>

      <div className={ classnames( center, paragraph, violet ) }>
          <p>So why not store shared utility classes in native Javascript variables?</p>
      </div>

      <br></br>

      <div className={ classnames( button ) }>
        <button onClick={click} className={purple}>Now with UBun... (click to continue)</button>

        <br></br>
        <br></br>

        <p id="text1" className={classnames(white, paragraph)}></p>

        <br></br>
        <br></br>

        <button onClick={click2} className={purple}>Have a good day! (click to continue)</button>

        <br></br>
        <br></br>

        <p id="text2" className={classnames(white, paragraph)}></p>
      </div>
    </>
  )
}

export default App
