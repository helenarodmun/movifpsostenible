import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

export default function Index(props) {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Header>
                            <h3>Publica un viaje</h3>
                        </Card.Header>
                        <Card.Body>
                            <Form method="POST" action="/travels">
                                <Form.Group>
                                    <Form.Label>Origen:</Form.Label>
                                    <Form.Control type="text" name="origin" placeholder="¿Cuál va a ser el punto de partida?" value={props.formValues.origin} onChange={props.handleInputChange} />
                                    {props.errors.origin && <div className="alert alert-danger">{props.errors.origin}</div>}
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Destino:</Form.Label>
                                    <Form.Control type="text" name="destination" placeholder="¿Cuál va a ser el destino del viaje?" value={props.formValues.destination} onChange={props.handleInputChange} />
                                    {props.errors.destination && <div className="alert alert-danger">{props.errors.destination}</div>}
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Fecha:</Form.Label>
                                    <Form.Control type="date" name="date" placeholder="Que día va a realizar el viaje?" value={props.formValues.date} onChange={props.handleInputChange} />
                                    {props.errors.date && <div className="alert alert-danger">{props.errors.date}</div>}
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Hora:</Form.Label>
                                    <Form.Control type="text" name="hour" placeholder="¿A qué hora se iniciará el viaje?" value={props.formValues.hour} onChange={props.handleInputChange} />
                                    {props.errors.hour && <div className="alert alert-danger">{props.errors.hour}</div>}
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Asientos disponibles:</Form.Label>
                                    <Form.Control as="select" name="seats" value={props.formValues.seats} onChange={props.handleInputChange}>
                                        <option disabled>Escoja el número de asientos ...</option>
                                        {props.seatsOptions.map((option) => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </Form.Control>
                                    {props.errors.seats && <div className="alert alert-danger">{props.errors.seats}</div>}
                                </Form.Group>
                                <Button variant="primary" onClick={props.handleSubmit}>Publicar viaje</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
