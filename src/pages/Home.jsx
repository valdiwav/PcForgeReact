import React from 'react'
import SomosPcForge from '../components/SomosPcForge'
import './css/Home.css';
import card from '../data/programCards.json'
import ProgramCard from '../components/ProgramCard';

export default function Home() {
  return (
    <div>
        <section className='Titulo'>
            <h1>Aprende A Montar Tu PC</h1>
            <button>Comenzar</button>
        </section>
        <section className='somosPc'>
            <SomosPcForge/>
        </section>
        <section className='programa'>
            <div className="nuestros-programas">
                <h2>Nuestros Programas</h2>
                <ul className='listaHome'>
                    {card.map(function(card){
                        return <ProgramCard key={card.titulo} card={card} />
                    })}
                </ul>
            </div>
        </section>
        <section className='contacto'>
            
        </section>
    </div>
  )
}
