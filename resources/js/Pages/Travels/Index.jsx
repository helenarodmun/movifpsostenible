import { usePage } from "@inertiajs/react";
// import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Nav from "../../components/Nav";
export default function Index() {
    const { travels } = usePage().props;
    function myDate(fechaHora) {
        return dayjs(fechaHora).format("DD MMMM YYYY - HH:mm:ss");
    }
    return (
        <>
            <Nav></Nav>
            <Container>
                <Row>
                    <h1>Viajes</h1>
                    {travels.map((travel) => (
                        <Col key={travel.id} md={6} className="-ml-3">
                                <Card>
                                    <Card.Title className="m-4">
                                        Origen: {travel.origin}
                                        <br />
                                        Destino: {travel.destination}
                                    </Card.Title>
                                    <Card.Body>
                                        <span>Fecha: {travel.date}</span>
                                        {" / "}
                                        <span>Hora: {travel.hour}</span>
                                        {" / "}
                                        <span>
                                            {" "}
                                            Asientos disponibles: {travel.seats}
                                        </span>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">
                                        Publicado por:{" "}
                                        <a
                                            href="/profile"
                                            className="text-decoration-none text-base   "
                                        >
                                            {travel.driver.name}
                                        </a>
                                        {" - "}
                                        {myDate(travel.updated_at)}
                                    </Card.Footer>
                                </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}
