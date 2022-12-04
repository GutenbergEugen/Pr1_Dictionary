import React from 'react'
import Card from './Card'

export default function CardsContainer({cards, change}) {
    const cardsContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px',
        margin: '50px 0',
        gridAutoRows: '300px',
       
    } 

  return (
    <div style = {cardsContainerStyle}>
        {
        cards.map(elem => <Card key={elem.id} change={change} {...elem}/>)
        }
    </div>
  )
}
