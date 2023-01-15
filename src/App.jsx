import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Menu from './components/Menu';
import RoundAnnouncement from './components/RoundAnnouncement';
import Scoreboard from './components/Scoreboard';

const App = () => {
    const [cardSet, setCardSet] = useState('animals');
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [roundStatus, setRoundStatus] = useState(null);

    useEffect(() => {
        if (score >= 15) {
            resetGame();
            setRoundStatus(true);
        }
    }, [score]);

    const updateScore = () => {
        setScore(score + 1);
        setRoundStatus(null);
    };

    const updateBestScore = () => {
        setBestScore(bestScore < score ? score : bestScore);
        setScore(0);
        setRoundStatus(false);
    };

    const resetGame = () => {
        setScore(0);
        setBestScore(0);
    };

    const clickCardSet = (e) => {
        const set = e.currentTarget.dataset.cardset;
        resetGame();
        setRoundStatus(null);
        setCardSet(set);
    };

    return (
        <div id="app">
            <div>
                <Menu cardset={clickCardSet} />
                <RoundAnnouncement status={roundStatus} />

                <div id="main">
                    <h1>Memory Game</h1>
                    <Scoreboard currentScore={score} bestScore={bestScore} />
                    <Cards
                        updateScore={updateScore}
                        updateBestScore={updateBestScore}
                        cardset={cardSet}
                    />
                </div>
            </div>
            <div id="footer">
                <a href="https://www.flaticon.com/authors/freepik">
                    Icons created by Freepik - Flaticon
                </a>
            </div>
        </div>
    );
};

export default App;
