import React, { useState } from 'react';
import { ANIMAL_CARDS } from './animalCards';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

const Cards = (props) => {
    const [cards, setCards] = useState(shuffleArray([...ANIMAL_CARDS]));

    const shuffle = () => {
        setCards(() => shuffleArray([...cards]));
    };

    return (
        <div id="cards">
            {cards.map((card) => {
                return (
                    <div
                        id={`animal-card-${card.type}`}
                        className="animal-card"
                        key={`animal-card-${card.type}`}
                        onClick={(e) => {
                            props.click(e);
                            shuffle();
                        }}
                    >
                        <img src={card.img} alt="" className="card-img" />
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;
