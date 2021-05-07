import React from 'react'
import './Card.css'
function Card({item}) {
    return (
        <div className='card' >
            <div className="card__img" style={{backgroundImage:`url("${item.url}")`}}></div>
            <div className="card__footer">
                <div className="card__name">{item.name}</div>
            </div>
        </div>
    )
}

export default Card
