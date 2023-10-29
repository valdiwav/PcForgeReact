import React from 'react'
import Registro from './components/Registro'

export default function AppSign() {
  return (
    <div className='contenedorSign' style={{backgroundImage: `url("img/jeremy-perkins-FsK54FVNRfM-unsplash.jpg")`}}>
        <div id='signup'>
            <h1 className='tituloSign'>Registro</h1>
            <Registro/>
        </div>
    </div>
  )
}
