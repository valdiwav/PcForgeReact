import './HwCard.css';
export function HwCard({ datosHw }) {
    return (
      <li className='containerAll'>
        {datosHw.id % 2 === 0 ? (
          <div className="img-container">
            <h2 className='mi-titulo'>{datosHw.titulo}</h2>
            <img className="hw-img" src={`/img/${datosHw.imagen}`} alt={datosHw.id} />
          </div>
        ) : (
          <div className="desc-container">
            <p className='mi-descripcion'>{datosHw.descripcion}</p>
          </div>
        )}
  
        {datosHw.id % 2 !== 0 ? (
          <div className="img-container">
            <h2 className='mi-titulo'>{datosHw.titulo}</h2>
            <img className="hw-img" src={`/img/${datosHw.imagen}`} alt={datosHw.id} />
          </div>
        ) : (
          <div className="desc-container">
            <p className='mi-descripcion'>{datosHw.descripcion}</p>
          </div>
        )}
      </li>
    );
  }
  