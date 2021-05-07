import React from 'react'
import './Card.css'
function Card({item}) {
    return (
        <div className='card' style={{backgroundImage:`url("${item.url}")`}}>
            <div className="card__footer">
                <div className="card__name">{item.name}</div>
            </div>
        </div>
    )
}

export default Card
