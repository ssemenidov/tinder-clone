import React, { useState } from 'react'
import './CardBar.css'
import Card from './Card'
import TinderCard from 'react-tinder-card'
function CardBar() {
    const [people, setpeople] = useState([
        {
            name:'Elon Musk',
            url:'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg'
        },
        {
            name:'Joe',
            url:'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg'
        }
        ,
        {
            name:'Joe',
            url:'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg'
        }
    ])
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }
    
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }
    return (
        <div className='cardbar'>
            <div className="cardbar__container">
            {people.map((item, index)=>(
                <TinderCard 
                className='swipe'
                key={index}
                onSwipe={onSwipe} 
                onCardLeftScreen={() => onCardLeftScreen(item.name)} 
                preventSwipe={['up', 'down']}>
                <Card 
                item={item}
                ></Card>
                </TinderCard>
         
            ))
            }
            </div>
        </div>
    )
}

export default CardBar
