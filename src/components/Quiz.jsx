import React, { useState, useContext, useRef } from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Contexts";
import classes from "../App.css";

export default function Quiz() {
    const { Score, setScore, setGameState } = useContext(QuizContext);

    const [currQuestion, setCurrQuestion] = useState(0);
    // const [optionChosen, setOptionChosen] = useState(" ");
    let optionChosen = useRef("");

    const nextQuestion = () => {
        if (Questions[currQuestion].answer == optionChosen) {
            setScore(Score + 1);
        }
        document.getElementById("A").disabled = false;
        document.getElementById("B").disabled = false;
        document.getElementById("C").disabled = false;
        document.getElementById("D").disabled = false;
        let element = document.getElementById(optionChosen);
        element.classList.remove("correct");
        element.classList.remove("incorrect");

        // alert(Score);
        setCurrQuestion(currQuestion + 1);
    };

    const finishQuiz = () => {
        if (Questions[currQuestion].answer == optionChosen) {
            setScore(Score + 1);
        }
        setGameState("Endscreen");
    };
    const disableButton = () => {
        document.getElementById("A").disabled = true;
        document.getElementById("B").disabled = true;
        document.getElementById("C").disabled = true;
        document.getElementById("D").disabled = true;

        if (Questions[currQuestion].answer === optionChosen) {
            let element = document.getElementById(optionChosen);
            element.classList.add("correct");
        } else {
            let element = document.getElementById(optionChosen);
            element.classList.add("incorrect");
        }
    };

    return (
        <div className="quiz">
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className="options">
                <button
                    id="A"
                    // disable={true}
                    onClick={() => {
                        optionChosen = "A";
                        disableButton();
                    }}
                >
                    {Questions[currQuestion].optionA}
                </button>
                <button
                    id="B"
                    onClick={() => {
                        optionChosen = "B";
                        disableButton();
                    }}
                >
                    {Questions[currQuestion].optionB}
                </button>
                <button
                    id="C"
                    onClick={() => {
                        optionChosen = "C";
                        disableButton();
                    }}
                >
                    {Questions[currQuestion].optionC}
                </button>
                <button
                    id="D"
                    onClick={() => {
                        optionChosen = "D";
                        disableButton();
                    }}
                >
                    {Questions[currQuestion].optionD}
                </button>
            </div>
            {currQuestion == Questions.length - 1 ? (
                <button onClick={finishQuiz}>Finish Quiz</button>
            ) : (
                <button onClick={nextQuestion}>Next Question</button>
            )}
        </div>
    );
}
