import React from 'react';
import './BarraNav.css';
export default function BarraNav() {
    const logoStyle={maxWidth:"15rem"};
    return (
        <div className='contenedor'>
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" style={logoStyle} className="logo"/>
            <nav className="nav" id="nav">
            {/*<button id="cerrar" className="close"><svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#e8e8e8}</style><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button>*/}
                <ul className="nav-list">
                    <li><a href="#inicio">inicio</a></li>
                    <li><a href="#PcForge">Quienes Somos</a></li>
                    <li><a href="#nuestros-programas">Contenido</a></li>
                    <li><a href="#buttons">Contactos</a></li>
                    
                </ul>
            </nav>
        </div>
      )
}
