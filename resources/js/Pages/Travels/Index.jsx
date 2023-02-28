import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

export default function Index(props) {
    return (
        <Container>
            <Row>
                <Col md={8}>
                    <h1>Viajes</h1>
                    {console.log(props)}
                    {props.travels.data.map((travel) => (
                        <div key={travel.id}>
                            <ul>
                                <li>Origen: {travel.origin}</li>
                                <li>Destino: {travel.destination}</li>
                                <li>Fecha: {travel.date}</li>
                                <li>Hora: {travel.hour}</li>
                                <li>Asientos disponibles: {travel.seats}</li>
                                <small>
                                    Publicado por: {travel.user_id}{" "}
                                    {travel.updated_at}
                                </small>
                            </ul>
                        </div>
                    ))}
                </Col>
                <Col>
                    <Form>
                        <Col>
                            {" "}
                            <label htmlFor="origin">Origin </label>
                            <br />
                            <input type="text" name="origin" id="" />
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
