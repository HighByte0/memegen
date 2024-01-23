import './App.css';
import React,{useEffect, useState} from 'react';


import Die from './components/die.js';
import {nanoid} from "nanoid"
import Confetti from "react-confetti";



function App() {
  function genernewdice() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      id: nanoid(),
      isheld: false,
    };
  }

  function setnewdice() {
    if (!tenzies) {
      setDices((prevDices) =>
        prevDices.map((dice) => (dice.isheld ? dice : genernewdice()))
      );
    } else {
      settenzies(false);
      setDices(allnewdice());
    }
  }

  function allnewdice() {
    return Array.from({ length: 3 }, genernewdice);
  }

  const [dices, setDices] = useState(allnewdice());
  const [tenzies, settenzies] = useState(false);

  const diceElem = dices.map((dice, key) => (
    <Die key={dice.id} value={dice.value} isheld={dice.isheld} holddice={() => holddice(dice.id)} />
  ));

  function holddice(id) {
    setDices((prevDices) =>
      prevDices.map((dice) => (dice.id === id ? { ...dice, isheld: !dice.isheld } : dice))
    );
  }

  useEffect(() => {
    const isAllHeld = dices.every((dice) => dice.isheld);
    const firstValue = dices[0].value;
    const isSameValue = dices.every((dice) => dice.value === firstValue);

    if (isAllHeld && isSameValue) {
      settenzies(true);
      console.log('You won!');
    }
  }, [dices]);

  return (
    <main>
      <div>
        {tenzies && (
          <Confetti
            width={1000}
            height={600}
            numberOfPieces={200}
          />
        )}
      </div>
      <h1 align="center">tenzies</h1>
      <p>Roll until all dice are the same value. Click each die to freeze it.</p>
      <div className="die--elem">{diceElem}</div>
      <button onClick={setnewdice} className="roll--dice">
        {tenzies ? 'New Game' : 'Roll'}
      </button>
    </main>
  );
}

export default App;