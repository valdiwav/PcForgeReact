import React from 'react'

const h2Style={fontsize:'2.7em',color: 'whitesmoke'};
const pStyle={fontsize:'1.25em',color:'whitesmoke'};
const divStyle={padding:'100px 12px',display:'flex'}

export default function SomosPcForge() {
  return (
    <div style={divStyle}>

        <div>
            <img src={'img/somosPcForge.jpg'} width={500} height={300} style={{ borderRadius: '20px' }} alt="" />
        </div>

        <div style={{padding:'40px'}}> 
            <h2 style={h2Style}>Somos <span style={{color:'blueviolet'}}>PcForge</span></h2>
            <br />
            <p style={pStyle}>Estamos aquí para brindarte la información y las herramientas necesarias para que puedas convertirte en un experto en la construcción de computadoras personales. Nuestra plataforma está diseñada para ayudarte a comprender y dominar cada paso del proceso de ensamblaje, desde seleccionar los componentes adecuados hasta poner en marcha tu PC recién construida.</p>
        </div>
        
    </div>
  )
}
