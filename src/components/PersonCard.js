import React from 'react';

const PersonCard = ({ firstName, lastName, age, hairColor }) => (
    <div className="card">
        <h2 className="card__title">{firstName}, {lastName}</h2>
        <p className="card__description">Age: {age}</p>
        <p className="card__description">Air Color: {hairColor}</p>
    </div>
);

export default PersonCard;