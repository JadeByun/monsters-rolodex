import React from 'react';
import './card.styles.css';

export const Card = (props) => (
  <div className='card-container'>
    <img
      alt='monster'
      src={`https://robohash.org/set=set2/${props.monster.id}/size=180X180`}
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
