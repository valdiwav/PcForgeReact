import React from 'react'
import txt from '../data/programa.json';
import Acerca from '../components/Acerca';

const titulo={
    display: 'flex',
    justifyContent: 'center',
    marginTop: '100px',
    fontSize: '3em'
};

export default function Conocimiento() {
  return (
    <div>
        <h1 style={titulo}>Conocimiento de Hardware</h1>
        <section>
            <ul >
                {txt.map(function(txt){
                return <Acerca key={txt.titulo} txt={txt} />
                })}
            </ul>
        </section>
    </div>
  )
}
