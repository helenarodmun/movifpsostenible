import React from 'react';
import { InertiaLink } from '@inertiajs/react';

//Este componente muestra los datos de un viaje en una fila de una tabla y agrega un enlace para editar el viaje
const Travel = ({ travel }) => {
    return (
        <tr>
            <td>{travel.origin}</td>
            <td>{travel.destination}</td>
            <td>{travel.date}</td>
            <td>{travel.hour}</td>
            <td>{travel.seats}</td>
            <td><InertiaLink href={`travels/${travel.id}/edit`}>Editar</InertiaLink></td>
        </tr>
    );
}

export default Travel;
