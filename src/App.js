import React, { useState } from "react"
import Square from './components/Square'
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const handleGamyPlay = (index) => {
    alert(index)
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameboard">
      {board.map((value, index) => {
        return <Square 
        value={value} 
        key={index} 
        index={index}
        handleGamyPlay={handleGamyPlay}/>
      })}
    </div>
    </>
  )
}

export default App
