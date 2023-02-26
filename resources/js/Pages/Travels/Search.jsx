import React from 'react';
import { Card } from 'react-bootstrap';

export default function Search(props) {
  return (
    <>
      <h1>Viajes</h1>
      <Card>
        <Card.Body>
          <Card.Title>Detalles del viaje</Card.Title>
          <Card.Text>
            <p>Origen: {props.travel.origin}</p>
            <p>Destino: {props.travel.destination}</p>
            <p>Fecha: {props.travel.date}</p>
            <p>Hora: {props.travel.hour}</p>
            <p>Asientos disponibles: {props.travel.seats}</p>
            <small>Publicado por: {props.travel.driver.name} {props.travel.updated_at.diffForHumans()}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
