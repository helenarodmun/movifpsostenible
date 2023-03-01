import { usePage } from "@inertiajs/react";
import React from "react";
<<<<<<< HEAD
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
=======
import { Button, Card, Col, ListGroup } from "react-bootstrap";
>>>>>>> d3faab33b67f8c0c6f7821ab658af1e08cd52c8d
import Nav from "/resources/js/components/Nav";
import Footer from "/resources/js/components/Footer";

export default function Search() {
    const { travels } = usePage().props;
        function myDate(fechaHora) {
        return dayjs(fechaHora).format("DD MMMM YYYY - HH:mm:ss");
    }
    return (
        <>
            <Nav />
<<<<<<< HEAD
            <Container>
                <Row>
                    <h1 className="m-5">Viajes</h1>
                    {travels.map((travel) => (
                        <Col sm={6} key={travel.id}>
                            <Card  className="m-5 ">
                                <Card.Body>
                                    <Card.Header>
                                        <h5>Detalles del viaje</h5>
                                    </Card.Header>
                                    <Card.Text>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>
                                                Origen: {travel.origin}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Destino: {travel.destination}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Fecha: {travel.date}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Hora: {travel.hour}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Asientos disponibles:{" "}
                                                {travel.seats}
                                            </ListGroup.Item>
                                            <small>
                                                Publicado por:{" "}
                                                {travel.driver.name}{" "}
                                                {travel.updated_at}
                                            </small>
                                        </ListGroup>
                                    </Card.Text>
                                    <Button variant="success">
                                        Reserva tu viaje!
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
=======
            <h1 className="m-5">Viajes</h1>
            {travels.map((travel) => (
                <Col key={travel.id} md={6}> <Card  className="m-5 ">
                    <Card.Body>
                        <Card.Header>
                            <h5>Detalles del viaje</h5>
                        </Card.Header>
                        <Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    Origen: {travel.origin}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Destino: {travel.destination}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Fecha: {travel.date}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Hora: {travel.hour}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Asientos disponibles: {travel.seats}
                                </ListGroup.Item>
                                <small>
                                    Publicado por: {travel.driver.name}{" "}
                                    {myDate( travel.updated_at)}
                                </small>
                            </ListGroup>
                        </Card.Text>
                        <Button variant="success">Reserva tu viaje!</Button>
                    </Card.Body>
                </Card></Col>
               
            ))}
>>>>>>> d3faab33b67f8c0c6f7821ab658af1e08cd52c8d
            <Footer />
        </>
    );
}
