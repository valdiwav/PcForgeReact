import React, { useState } from 'react';
import './Registro.css';

const Registro = () => {
  const [formData, setFormData] = useState({
    user: '',
    rut: '',
    email: '',
    region: '',
    comuna: '',
    password: '',
    verificarpassword: '',
    terminos: false,
  });

  const validarRut = (value) => {
    return /^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(value);
  }; 

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let validationErrors = {};

    if (!formData.user) {
      validationErrors.user = 'El nombre de usuario es obligatorio';
    }else if(formData.user.length < 5){
      validationErrors.user = 'El nombre de usuario debe ser de minimo 5 caracteres'
    }

    if (!formData.rut) {
      validationErrors.rut = 'El RUT es obligatorio';
    }else if(!validarRut(formData.rut)){
      validationErrors.rut = 'El rut ingresado no es valido';
    }

    if (!formData.email) {
      validationErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Correo electrónico inválido';
    }

    if (!formData.region) {
      validationErrors.region = 'La región es obligatoria';
    }

    if (!formData.comuna) {
      validationErrors.comuna = 'La comuna es obligatoria';
    }

    if (!formData.password) {
      validationErrors.password = 'La contraseña es obligatoria';
    }else if(formData.password.length < 8){
      validationErrors.password = 'La contraseña debe ser de minimo 8 caracteres';
    }

    if (formData.password !== formData.verificarpassword) {
      validationErrors.verificarpassword = 'Las contraseñas no coinciden';
    }

    if (!formData.terminos) {
      validationErrors.terminos = 'Debe aceptar los términos y condiciones';
    }

    if (Object.keys(validationErrors).length === 0) {
      // Aquí puedes realizar alguna acción con los datos del formulario
      console.log('Formulario enviado con éxito');
    } else {
      // Aquí puedes mostrar los errores en el formulario
      console.log('Errores en el formulario', validationErrors);
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <form action="" id="formulario" onSubmit={handleSubmit}>
        <label className="labelSign" htmlFor="user">
          Nombre de usuario
        </label>
        <input
          className="inputSign"
          type="text"
          id="user"
          name="user"
          placeholder="Nombre de Usuario"
          onChange={handleChange}
          value={formData.user}
        />
        {errors.user && <span style={{ color: 'red' }}>{errors.user}</span>}
        <br />

        <label className="labelSign" htmlFor="rut">
          Rut
        </label>
        <input
          className="inputSign"
          type="text"
          id="rut"
          name="rut"
          placeholder="Ingrese RUT"
          onChange={handleChange}
          value={formData.rut}
        />
        {errors.rut && <span style={{ color: 'red' }}>{errors.rut}</span>}
        <br />

        <label className="labelSign" htmlFor="email">
          Correo electrónico
        </label>
        <input
          className="inputSign"
          type="email"
          id="email"
          name="email"
          placeholder="Correo electrónico"
          onChange={handleChange}
          value={formData.email}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        <br />

        <label className="labelSign" htmlFor="region">
          Región
        </label>
        <input
          className="inputSign"
          type="text"
          id="region"
          name="region"
          placeholder="Seleccione su región"
          onChange={handleChange}
          value={formData.region}
        />
        {errors.region && <span style={{ color: 'red' }}>{errors.region}</span>}
        <br />

        <label className="labelSign" htmlFor="comuna">
          Comuna
        </label>
        <input
          className="inputSign"
          type="text"
          id="comuna"
          name="comuna"
          placeholder="Seleccione su comuna"
          onChange={handleChange}
          value={formData.comuna}
        />
        {errors.comuna && <span style={{ color: 'red' }}>{errors.comuna}</span>}
        <br />

        <label className="labelSign" htmlFor="password">
          Contraseña
        </label>
        <input
          className="inputSign"
          type="password"
          id="password"
          name="password"
          placeholder="Ingrese una contraseña"
          onChange={handleChange}
          value={formData.password}
        />
        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        <br />

        <label className="labelSign" htmlFor="verpassword">
          Confirmar contraseña
        </label>
        <input
          className="inputSign"
          type="password"
          id="verpassword"
          name="verificarpassword"
          placeholder="Confirme su contraseña"
          onChange={handleChange}
          value={formData.verificarpassword}
        />
        {errors.verificarpassword && (
          <span style={{ color: 'red' }}>{errors.verificarpassword}</span>
        )}
        <br />

        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChange}
          checked={formData.terminos}
        />
        <label className="labelSign" htmlFor="terminos">
          Acepto los <a href="#">términos y condiciones</a>
        </label>
        {errors.terminos && <span style={{ color: 'red' }}>{errors.terminos}</span>}

        <div className="buttonSignDiv">
          <input type="submit" value="Registrarme" id="button" />
        </div>
      </form>
    </div>
  );
};

export default Registro;
