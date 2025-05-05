import React, { useState } from 'react'

function Counter() {

const [counter, setCounter] = useState(0)
const increment = () => {
  if(counter<5){
    setCounter(counter+1)
}
else{
  alert("Counter cannot be greater than 5")}
}
const decrement = () => {
  if(counter>-2){
    setCounter(counter-1)
}
else{
  alert("Counter cannot be less than -2")
}
}

  return (
    <div>
    <button onClick={increment}>+</button>
    <h3>{counter}</h3>
    <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter