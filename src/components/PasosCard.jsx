import React from 'react'
import './PasosCard.css';
export default function PasosCard({card}) {
  return (
      <li className='lista'>
          <h2 className='paso'>Paso <span className='span'>{card.id}</span></h2>
          <div className='img' style={{backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("img/${card.imagen}")`}}>
            <h3 className='cardTit'>{card.titulo}</h3>
          </div>
          <div className='divtext'><p className='text'>{card.descripcion}</p></div>
          
      </li>

  )
}
