import React, { useState } from 'react';
import './AppRecuperar.css';

export default function AppRecuperar() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email) {
            setError('Por favor, ingrese su dirección de correo electrónico.');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Por favor, ingrese una dirección de correo electrónico válida.');
        } else {
            setError('');
            console.log('Correo electrónico enviado con éxito');
        }
    };

    return (
        <div className='contenedorRec' style={{backgroundImage: `url("img/camille-couvez-H5PnIYI_1I0-unsplash.jpg")`}}>
            <div id="recuperar">
                <h1 className='tituloRec'>Recuperar contraseña</h1>
                <p className='parrafoRec'>Ingrese la direccion de email con la que se registró y enseguida le enviaremos las instrucciones para reestablecer su contraseña</p>
                <form onSubmit={handleSubmit}>
                    <label className='labelRec' htmlFor="email">Email
                        <br />
                        <input className='inputRec' type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    {error && <span style={{ color: 'red' }}>{error}</span>}
                    <div class="button">
                        <input className='inputRec' type="submit" value="Recuperar contraseña" id="button" />
                    </div>
                </form>
            </div>
        </div>
    );
}
