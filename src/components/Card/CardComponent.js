import React from 'react';

import './CardComponentStyles.css'

export const CardComponent = props => (
    <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x280`} />
        <h2 key={props.monster.id}>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)