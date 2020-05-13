import React from 'react';
import './CardListComponentStyles.css';
import { CardComponent } from '../Card/CardComponent';

export const CardListComponent = (props) => (
    <div className='card'>
        {props.monsters.map(monster => 
            <CardComponent monster={monster} />
        )}
    </div>
)