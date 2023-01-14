import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Scoreboard from './components/Scoreboard';

const App = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);

    const clickCard = (e) => {
        const targetCard = e.currentTarget.id;
        if (clickedCards.find((element) => element === targetCard)) {
            setBestScore(bestScore < score ? score : bestScore);
            setScore(0);
            setClickedCards([]);
        } else {
            setScore(score + 1);
            setClickedCards((prevArray) => [...prevArray, targetCard]);
        }
    };

    return (
        <div id="app">
            <div id="main">
                <h1>Memory Game</h1>
                <Scoreboard currentScore={score} bestScore={bestScore} />
                <Cards click={clickCard} />
            </div>
            <div id="footer">
                <a href="https://www.flaticon.com/packs/animals-148">
                    Animal icons created by Freepik - Flaticon
                </a>
            </div>
        </div>
    );
};

export default App;
