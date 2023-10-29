import React from 'react'
import './Login.css';
export default function Login() {
    return (
        
        <div className='formContainer' style={{backgroundImage: `url("img/camille-couvez-H5PnIYI_1I0-unsplash.jpg")`}}>
            <h1 className='tituloLogin'>Inicio de Sesion</h1>
            <form className='formLog' action="">
                <i className="fa-solid fa-user"></i>
                <label className='labelLog' htmlFor="usuer"></label>
                <input className='inputLog' type="text" id="user" placeholder="Nombre de usuario" />
            
                <br /><br /><br />
            
                <i className="fa-solid fa-lock"></i>
                <label className='labelLog' htmlFor="password"></label>
                <input className='inputLog' type="password" id="password" placeholder="Contraseña" />
            
                <div className="recuerdame">
                    <input type="checkbox" id="recordar" />
                    <label  htmlFor="recordar">Recuerdame</label>
                </div>
                <div className="divButtonLog">
                    <input className='buttonLog' type="submit" value="Iniciar Sesión" id="buttonLog" />
                </div>
            </form>

            <div class="enlaces">
                <a href="#" class="registro">Registrarme</a>
                
                <a href="#" class="recuperar">Recuperar contraseña</a>
            </div>
        </div>
    );
    
}
