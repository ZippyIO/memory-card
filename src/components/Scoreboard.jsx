import React from 'react';

const Scoreboard = (props) => {
    return (
        <div id="scoreboard">
            <p>Score: {props.currentScore}</p>
            <p>Best Score: {props.bestScore}</p>
        </div>
    );
};

export default Scoreboard;
