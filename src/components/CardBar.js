import React, {  useMemo, useState } from 'react'
import './CardBar.css'
import TinderCard from 'react-tinder-card'
import Card from './Card'
import ButtonBar from './ButtonBar'
const db=[
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
    },
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
]
let current=db.length-1
console.log(db);
const alreadyRemoved = []
function CardBar() {
    const [people, setPeople] = useState(db)
    const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])
    const onSwipe = (dir,index) => {
        alreadyRemoved.push(index)
        current-=1
    }
    const outOfFrame = (index) => {
        const charactersState = people
        charactersState.splice(index,1)
        setPeople(charactersState)
        console.log(people);
    }
    const swipe =(dir) => {
        if (current>-1)
        { console.log(current);
        alreadyRemoved.push(current) 
        childRefs[current].current.swipe(dir)
        }
    }
    return (
        <>
        <div className='cardbar'>
            <div className="cardbar__container">
            {people.map((item, index)=>(
                <TinderCard 
                ref={childRefs[index]} 
                className='swipe'
                key={index}
                onSwipe={(dir)=>onSwipe(dir,index)} 
                onCardLeftScreen={() => outOfFrame(index)}
                preventSwipe={['up', 'down']}>
                <Card 
                item={item}
                ></Card>
                </TinderCard>
            ))
            }
            </div>
            
        </div>
        <ButtonBar swipe={swipe}></ButtonBar>
        </>
    )
}

export default CardBar
