import React from 'react';


export default function Travels(props) {
    return (
        <>
        <h1>Viajes</h1>
        <div>
               <li>Origen: {props.travel.origin}</li>
               <li>Destino: {props.travel.destination}</li>
               <li>Fecha: {props.travel.date}</li>
               <li>Hora: {props.travel.hour}</li>
               <li>Asientos disponible: {props.travel.seats}</li>
               <small>Publicado por: {props.travel.driver.name} {props.travel.updated_at.diffForHumans()}</small>
               </div>
    </>
    )
} 
