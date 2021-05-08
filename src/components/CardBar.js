import React, {  useEffect, useMemo, useState } from 'react'
import TinderCard from 'react-tinder-card'
import Card from './Card'
import ButtonBar from './ButtonBar'
import axios from '../axios'
import './CardBar.css'


let current=0
const alreadyRemoved = []
function CardBar() {
    const [people, setPeople] = useState([])
    const [childRefs, setchildRefs] = useState([])
    useEffect(() => {
        async function fetchData(){
            const req= await axios.get('/tinder/card');
             setPeople(req.data)


        }
        fetchData()
    }, [])
    useEffect(() => {
        async function fetchData(){
            console.log(people);
            const ref = await Array(people.length).fill(0).map(i => React.createRef())
            console.log(ref);
            setchildRefs(ref)

        }
        fetchData()
    }, [people])




  
    const onSwipe = (dir,index) => {
        alreadyRemoved.push(index)
        deleteCard(current)
    }
    const deleteCard= (index) => {
        const charactersState = people
        charactersState.splice(index,1)
        setPeople(charactersState)
    }
    const swipe =(dir) => {
        const current=people.length-1
        if (current>-1)
        {
        alreadyRemoved.push(current) 
  
        childRefs[current].current.swipe(dir)
        deleteCard(current)
        
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
                onCardLeftScreen={() => deleteCard(index)}
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
