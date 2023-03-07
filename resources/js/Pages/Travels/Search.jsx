import { usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Nav from "/resources/js/components/Nav";
import Footer from "/resources/js/components/Footer";
import FilterHeader from "/resources/js/components/FilterHeader";
import { Link } from "@inertiajs/react";

export default function Search() {
    //Desestructuramos las propiedades "travels" y "reservations" de las propiedades de la página
   const { travels, reservations = [], flash } = usePage().props;
   // Definimos un estado local "reservation" y una función "setReservation" para actualizarlo
    const [reservation, setReservation] = useState([]);
    // Definimos una función para manejar la anulación de la reserva
function cancelReservation(travelId) {
    setReservation(reservation.filter((id) => id !== travelId));
}
    // Definimos una función "myDate" que formatea una fecha y hora utilizando la librería dayjs
    function myDate(fechaHora) {
        return dayjs(fechaHora).format("DD MMMM YYYY - HH:mm:ss");
    }

    return (
        <>
            <Nav />
            <FilterHeader></FilterHeader>
            <Container className="accesibilidad-texto">
                <Row>
                    {flash.message && (
                        <div class="alert alert-success">{flash.message}</div>
                    )}
                    {flash.error && (
                        <div class="alert alert-danger">
                            {flash.error}
                        </div>
                    )}
                    <h1 className="m-5">VIAJES ENCONTRADOS</h1>
                    {travels.map((travel) => (
                        <Col
                            key={travel.id}
                            md={6}
                            className="mt-3 pt-3 shadow  p-3 "
                        >
                            {" "}
                            <Card className="m-3 shadow ">
                                <Card.Header className="h3">
                                    Origen: {travel.origin}
                                    <br />
                                    Destino: {travel.destination}
                                </Card.Header>
                                <Card.Body>
                                    <span>
                                        <i
                                            className="bi bi-calendar-check"
                                            title="Fecha del viaje"
                                        ></i>{" "}
                                        Fecha: {travel.date}
                                    </span>
                                    <br />
                                    <span>
                                        <i
                                            className="bi bi-clock"
                                            title="Hora del viaje"
                                        ></i>{" "}
                                        Hora: {travel.hour}
                                    </span>
                                    <br />
                                    <span>
                                        <i
                                            className="bi bi-people pe-3"
                                            title="Asientos disponibles"
                                        />
                                        Asientos disponibles: {travel.seats}
                                    </span>
                                    <br />
                                    <span>
                                        <i
                                            className="bi bi-currency-euro"
                                            title="Asientos disponibles"
                                        ></i>
                                        Precio: {travel.price}
                                    </span>
                                    <br />
                                    {reservation.includes(travel.id) ? ( // Verifica si el ID del viaje actual está incluido en la lista de reservas
                                        <Link
                                            method="delete"
                                            href={`/booking/${travel.id}`}
                                            className="btn btn-danger mb-3 mt-3"
                                            onClick={() =>
                                                cancelReservation(travel.id)
                                            } // Llama la función cancelReservation en lugar de setReservation
                                        >
                                            Anular reserva
                                        </Link>
                                    ) : (
                                        // Si el viaje no está reservado
                                        <Link
                                            method="post"
                                            href={"/booking/" + travel.id}
                                        >
                                            <Button
                                                size="lg"
                                                variant="success"
                                                className="shadow mb-3 mt-3"
                                                onClick={() => {
                                                    setReservation([
                                                        ...reservation,
                                                        travel.id, // Agrega el ID del viaje actual a la lista de reservas
                                                    ]);
                                                }}
                                            >
                                                Reserva tu viaje!
                                            </Button>
                                        </Link>
                                    )}
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    <i
                                        className="bi bi-person-circle pe-3"
                                        title="Conductor"
                                    ></i>
                                    Publicado por:{" "}
                                    <a
                                        href={"/otheruser/" + travel.driver.id}
                                        className="text-decoration-none text-base"
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
            <Footer />
        </>
    );
}
