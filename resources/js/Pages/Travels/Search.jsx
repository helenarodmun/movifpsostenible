import { usePage } from "@inertiajs/react";
import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";

export default function Search() {
    const { travels } = usePage().props;
    return (
        <>
            <h1>Viajes</h1>
            {travels.map((travel) => (
                <Card   key={travel.id} className="m-5 ">
                    <Card.Body>
                        <Card.Header><h5>Detalles del viaje</h5></Card.Header>
                        <Card.Text >
                        <ListGroup variant="flush">
                                <ListGroup.Item>Origen: {travel.origin}</ListGroup.Item>
                                <ListGroup.Item>Destino: {travel.destination}</ListGroup.Item>
                                <ListGroup.Item>Fecha: {travel.date}</ListGroup.Item>
                                <ListGroup.Item>Hora: {travel.hour}</ListGroup.Item>
                                <ListGroup.Item>Asientos disponibles: {travel.seats}</ListGroup.Item>
                                <small>
                                    Publicado por: {travel.driver.name}{" "}
                                    {travel.updated_at}
                                </small>
                                </ListGroup>  
                        </Card.Text>
                        <Button variant="success">Reserva tu viaje!</Button>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
}
