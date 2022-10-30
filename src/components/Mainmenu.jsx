import React ,{useContext}from 'react'
import { QuizContext } from '../Helpers/Contexts'
import "../App.css";

export default function Mainmenu() {
    const {GameState, setGameState} = useContext(QuizContext) 
    // teslai access garna ko lai yo use agreko
  return (
    <div className='Menu'>
        <button onClick={() => {
            setGameState("Quiz");
        }
        }>Start Quiz</button>
    </div>
  )
}
