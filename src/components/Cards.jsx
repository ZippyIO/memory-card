import React, { useEffect, useState } from 'react';
import '../styles/Cards.css';
import ANIMAL_CARDS from './cards/animalCards';
import CHARACTER_CARDS from './cards/characterCards';
import DOG_CARDS from './cards/dogCards';
import FOOD_CARDS from './cards/foodCards';

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
    const [clickedCards, setClickedCards] = useState([]);

    useEffect(() => {
        setClickedCards([]);
        if (props.cardset === 'animals') {
            setCards(() => shuffleArray([...ANIMAL_CARDS]));
        } else if (props.cardset === 'dogs') {
            setCards(() => shuffleArray([...DOG_CARDS]));
        } else if (props.cardset === 'food') {
            setCards(() => shuffleArray([...FOOD_CARDS]));
        } else if (props.cardset === 'characters') {
            setCards(() => shuffleArray([...CHARACTER_CARDS]));
        }
    }, [props.cardset]);

    const clickCard = (e) => {
        const targetCard = e.currentTarget.id;
        if (clickedCards.find((element) => element === targetCard)) {
            incorrectCardClick();
        } else {
            correctCardClick(targetCard);
        }
    };

    const correctCardClick = (card) => {
        props.updateScore();
        setClickedCards((prevArray) => [...prevArray, card]);
    };

    const incorrectCardClick = () => {
        props.updateBestScore();
        setClickedCards([]);
    };

    const shuffle = () => {
        setCards(() => shuffleArray([...cards]));
    };

    return (
        <div id="cards">
            {cards.map((card) => {
                return (
                    <div
                        id={`card-${card.type}`}
                        className="card"
                        key={`card-${card.type}`}
                        onClick={(e) => {
                            clickCard(e);
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
