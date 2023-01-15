import React from 'react';
import '../styles/RoundAnnouncement.css';

const RoundAnnouncement = (props) => {
    if (props.status !== null) {
        return (
            <div id="round-announcement" className={`round-${props.status}`}>
                <h2>You {props.status ? 'won!' : 'lost, try again!'}</h2>
            </div>
        );
    } else {
        return null;
    }
};

export default RoundAnnouncement;
