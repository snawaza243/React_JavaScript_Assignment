import React from 'react'
/**
 * Assignment 1 | Q C20
 * Write a JavaScript code to demonstrate any four event handlers.
 */
function AC20_Demonstrate_Handle() {

  function fn1() {
    alert("Onclick event working")

  }

  function fn2() {
    alert(`By onblur Your input is ${document.getElementById('bid2').value}`)

  }

  function fn3(x) {
    x.style.background = 'black'
    x.style.color = 'white'
  }

  function fn4() {
    alert("Onmouseover() event working")

  }

  return (
    <div>
      <button id="bid1" onclick="fn1()">Onclick() button</button>
      <input id="bid2" type="text" onBlur={fn2} placeholder="Onblur()" />
      <input id="bid3" type="text" onFocus={fn3} placeholder="Onfocus()" />
      <button id="bid4" onMouseOver={fn4}>Onmouseover() event working</button>

    </div>
  )
}

export default AC20_Demonstrate_Handle
