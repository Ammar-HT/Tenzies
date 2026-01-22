import { useState } from 'react'
import Die from "./component/Die.jsx"

function App() {

  const [dice, setDice] = useState(generateAllNewDice())

  function generateAllNewDice(){
    const newDice = []
    for (let i = 0; i < 10; i++){
      const randomNum = Math.ceil(Math.random() * 6)
      newDice.push(randomNum)
    }
    return newDice;
  }

  function rollDice(){
    setDice(generateAllNewDice())
  }

  const diceElements = dice.map(num => <Die value={num} />)

  return (
    <main>
      <div className='dice-container'>
        {diceElements}
      </div>

      <button className='roll-dice' onClick={rollDice}>Roll Dice</button>

    </main>
  )
}

export default App
