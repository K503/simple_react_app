import React from 'react';
import './Card.css'

const Card =(props) =>{
    return (
        <div className='card-container'>
            <img alt='robohash-cat' src={`https://robohash.org/${props.monster.id}?set=set3&size=180x180`}/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    );
}

export default Card; 