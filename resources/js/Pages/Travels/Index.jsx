import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

export default function Index(props) {
    return (
        <Container>
            <Row>
                <Col md={8}>
                    <h1>Viajes</h1>
                    {props.travels.map((travel) => (
                        <div key={travel.id}>
                            <ul>
                                <li>Origen: {travel.origin}</li>
                                <li>Destino: {travel.destination}</li>
                                <li>Fecha: {travel.date}</li>
                                <li>Hora: {travel.hour}</li>
                                <li>Asientos disponibles: {travel.seats}</li>
                                <small>Publicado por: {travel.driver.name} {travel.updated_at.diffForHumans()}</small>
                            </ul>
                        </div>
                    ))}
                </Col>         
            </Row>
        </Container>
    );
}
