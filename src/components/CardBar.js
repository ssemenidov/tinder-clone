import React, {  useEffect, useMemo, useState } from 'react'
import TinderCard from 'react-tinder-card'
import Card from './Card'
import ButtonBar from './ButtonBar'
import axios from '../axios'
import './CardBar.css'


var db=[]
let current=db.length-1
console.log(db);
const alreadyRemoved = []
function CardBar() {
    const [people, setPeople] = useState([])
    useEffect(() => {
        async function fetchData(){
            var req= await axios.get('/tinder/card');

            setPeople(req.data)

        }
        fetchData()
    }, [])


   

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
