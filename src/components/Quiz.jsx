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
        document.getElementById("A").disable = false;
        document.getElementById("B").disable = false;
        document.getElementById("C").disable = false;
        document.getElementById("D").disable = false;
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
        document.getElementById("A").disable = true;
        document.getElementById("B").disable = true;
        document.getElementById("C").disable = true;
        document.getElementById("D").disable = true;

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
