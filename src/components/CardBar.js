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
            name:'Jeff Bezos',
            url:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg'
        }
        ,
        {
            name:'Pavel Durov',
            url:'https://storage.googleapis.com/telesite-prod/photos/629f9b10-c082-11ea-aab1-7bc436a38979-feed670-670-x.jpeg'
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
