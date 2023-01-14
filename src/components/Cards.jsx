import React, { useState } from 'react';

const ANIMAL_CARDS = [
    {
        type: 'alpaca',
        img: '/src/assets/animals/alpaca.png',
    },
    {
        type: 'beaver',
        img: '/src/assets/animals/beaver.png',
    },
    {
        type: 'boar',
        img: '/src/assets/animals/boar.png',
    },
    {
        type: 'chicken',
        img: '/src/assets/animals/chicken.png',
    },
    {
        type: 'cow',
        img: '/src/assets/animals/cow.png',
    },
    {
        type: 'giraffe',
        img: '/src/assets/animals/giraffe.png',
    },
    {
        type: 'kangaroo',
        img: '/src/assets/animals/kangaroo.png',
    },
    {
        type: 'koala',
        img: '/src/assets/animals/koala.png',
    },
    {
        type: 'panda',
        img: '/src/assets/animals/panda.png',
    },
    {
        type: 'parrot',
        img: '/src/assets/animals/parrot.png',
    },
    {
        type: 'pig',
        img: '/src/assets/animals/pig.png',
    },
    {
        type: 'raccoon',
        img: '/src/assets/animals/raccoon.png',
    },
    {
        type: 'snake',
        img: '/src/assets/animals/snake.png',
    },
    {
        type: 'tiger',
        img: '/src/assets/animals/tiger.png',
    },
    {
        type: 'wolf',
        img: '/src/assets/animals/wolf.png',
    },
];

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
