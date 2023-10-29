import React from 'react'
import './Acerca.css';

const ulStyle={    
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: '50px',
    color:'whitesmoke',
    padding:'20px'
};

const pStyle={
    display: 'flex',
    justifyContent: 'center',
    margin: '30px'
}

export default function Acerca({txt}) {
    return (
        <div className='lista' style={ulStyle}>
            <li >
                <h2 className='tituloAcerca'>Metodo de Aprendizaje</h2>
                <div style={pStyle}>
                    <p className='parrafo'>{txt.metodo}</p>
                </div>
                <h2>Proposito</h2>
                <div style={pStyle}>
                    <p className='parrafo'>{txt.proposito}</p>
                </div>
                <h2>Objetivos</h2>
                <div>
                    <div style={pStyle}><p className='parrafo'>{txt.objetivos.o1}</p></div>
                    <div style={pStyle}><p className='parrafo'>{txt.objetivos.o2}</p></div>
                    <div style={pStyle}><p className='parrafo'>{txt.objetivos.o3}</p></div>
                    
                </div>
            </li>
        </div>
      )
}
