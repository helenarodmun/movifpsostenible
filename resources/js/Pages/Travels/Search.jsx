import { usePage } from '@inertiajs/react';
import React from 'react';
import { Card } from 'react-bootstrap';

export default function Search() {
  const {travels} = usePage().props
  return (
    
    <>
      <h1>Viajes</h1>
      <Card>
        <Card.Body>
          <Card.Title>Detalles del viaje</Card.Title>
          <Card.Text>
          {console.log(travels)}
                        {travels.map((travel) => (
                            <div key={travel.id}>
            <li>Origen: {travel.origin}</li>
            <li>Destino: {travel.destination}</li>
            <li>Fecha: {travel.date}</li>
            <li>Hora: {travel.hour}</li>
            <li>Asientos disponibles: {travels.seats}</li>
            <small>Publicado por: {travel.driver.name} {travel.updated_at}</small>
            </div>
                        ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
