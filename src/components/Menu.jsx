import React from 'react';
import '../styles/Menu.css';

const Menu = (props) => {
    return (
        <div id="menu">
            <button data-cardset="animals" onClick={props.cardset} className="cardset-button">
                Animals
            </button>
            <button data-cardset="dogs" onClick={props.cardset} className="cardset-button">
                Dogs
            </button>
            <button data-cardset="food" onClick={props.cardset} className="cardset-button">
                Food
            </button>
            <button data-cardset="characters" onClick={props.cardset} className="cardset-button">
                Characters
            </button>
        </div>
    );
};

export default Menu;
