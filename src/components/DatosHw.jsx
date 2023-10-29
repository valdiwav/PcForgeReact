import React from 'react'
import datosHw from '../data/datosHw.json';
import { HwCard } from './HwCard';
export function DatosHw(){
    return(
        <ul>
            {datosHw.map(function(datosHw){
                return <HwCard key={datosHw.titulo} datosHw={datosHw} />
            })}
        </ul>
    );
}
