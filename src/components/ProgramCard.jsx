import React from 'react'
import './ProgramCard.css';


export default function ProgramCard({card}) {
  return (
    <li className='programas'>
        <div className='carta' style={{backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("img/${card.imagen}")`}}>
            <h3 style={{color:'whitesmoke'}}>{card.titulo}</h3>
            <div className='contP'>
                <p style={{color:'whitesmoke'}}>{card.descripcion}</p>
            </div>
            <button>+Info</button>
        </div>
        
    </li>
  )
}
