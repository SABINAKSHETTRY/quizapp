import "./App.css";
import React, { useState, useContext } from "react";
import Mainmenu from "./components/Mainmenu";
import Quiz from "./components/Quiz";
import Endscreen from "./components/Endscreen";

import {QuizContext} from "./Helpers/Contexts";

function App() {
    const [GameState, setGameState] = useState("menu");
    const [Score,setScore]=useState(0);

    return (
        <div className="App">
            <h1>Quiz App</h1>
            <QuizContext.Provider value={{GameState,setGameState,Score,setScore}}>

            {GameState === "menu" && <Mainmenu />}
            {GameState === "Quiz" && <Quiz />}
            {GameState === "Endscreen" && <Endscreen />}
            </QuizContext.Provider>
        </div>
    );
}

export default App;
