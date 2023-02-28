import { usePage } from "@inertiajs/react";
// import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Nav from '../../components/Nav'
export default function Index() {
    const {travels} = usePage().props
    return (
        <>
            <Nav></Nav>
            <Container>
                <Row>
                    <Col md={8}>
                        <h1>Viajes</h1>
                        {console.log(travels)}
                        {travels.map((travel) => (
                            <div key={travel.id}>
                                {console.log(travel.driver.name)}
                                <ul>
                                    <li>Origen: {travel.origin}</li>
                                    <li>Destino: {travel.destination}</li>
                                    <li>Fecha: {travel.date}</li>
                                    <li>Hora: {travel.hour}</li>
                                    <li>
                                        Asientos disponibles: {travel.seats}
                                    </li>
                                    <small>
                                        Publicado por: {travel.driver.name}{" * "}
                                        {travel.updated_at}
                                    </small>
                                </ul>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    );
}
