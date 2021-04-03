import React from 'react';
import Logo from '../../Logo/Logo';
import "./card.css";
const Card = (props) => {
    return (
        <div className="card">
            {props.children}
        </div>
    );
};

export default Card;