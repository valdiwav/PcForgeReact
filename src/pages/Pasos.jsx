import React from 'react'
import card from '../data/pasos.json'
import PasosCard from '../components/PasosCard'
import './css/Pasos.css';

export default function Pasos() {
  return (
    <div>
        <h1 className='titulo'>Da Tus Primeros Pasos</h1>
        <ul className='listado'>
        {card.map(function(card){
                return <PasosCard key={card.titulo} card={card} />
            })}

        </ul>
    </div>
  )
}
