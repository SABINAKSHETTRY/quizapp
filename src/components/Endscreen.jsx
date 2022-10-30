import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import { Questions } from '../Helpers/QuestionBank';
import "../App.css";


export default function Endscreen() {

    const {Score, setScore, setGameState} = useContext(QuizContext);
  
    const restart=()=>{
        setScore(0);
        setGameState("menu");
    };


  return (
    <div className='endscreen'><h1>Quiz Completed</h1>
    <h3>{Score} / {Questions.length}</h3>
    <button onClick={restart}>Restart Quiz</button>
    </div>
  )
}
