import React from 'react';
import { Card } from 'react-bootstrap';

export default function Search(props) {

  return (
    
    <>
    {console.log(props)}
      <h1>Viajes</h1>
      <Card>
        <Card.Body>
          <Card.Title>Detalles del viaje</Card.Title>
          <Card.Text>
            <p>Origen: {props.origin}</p>
            <p>Destino: {props.destination}</p>
            <p>Fecha: {props.date}</p>
            <p>Hora: {props.hour}</p>
            <p>Asientos disponibles: {props.seats}</p>
            {/* <small>Publicado por: {props.driver.id} {props.updated_at.diffForHumans()}</small> */}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
