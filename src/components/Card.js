import React from 'react'
import './Card.css'
function Card() {
    return (
        <div className='card'>
            <img src='../img/musk.jpg'   className='card__img'/>
            <div className="card__footer">
                <div className="card__name">Ilon,22</div>
            </div>
        </div>
    )
}

export default Card
