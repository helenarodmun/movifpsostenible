import { usePage } from "@inertiajs/react";
import React from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import Nav from "/resources/js/components/Nav";
import Footer from "/resources/js/components/Footer";
import FilterHeader from "/resources/js/components/FilterHeader";
import { Link } from "@inertiajs/react";


export default function Search() {
    const { travels } = usePage().props;
    function myDate(fechaHora) {
        return dayjs(fechaHora).format("DD MMMM YYYY - HH:mm:ss");
    }
 
    return (
        <>
            <Nav />
            <FilterHeader></FilterHeader>
            <Container>
            <Row>
            <h1 className="m-5">VIAJES ENCONTRADOS</h1>
            {travels.map((travel) => (
                <Col key={travel.id} md={6} className="mt-3 pt-3 shadow  p-3 ">
                    {" "}
                    <Card className="m-3 shadow ">
                        <Card.Header className="h3">
                                    Origen: {travel.origin}
                                    <br />
                                    Destino: {travel.destination}
                                </Card.Header>
                                <Card.Body>
                                    <span
                                    ><i className="bi bi-calendar-check" title="Fecha del viaje"></i>   Fecha: {travel.date}</span>
                                    <br/>
                                    <span>
                                    <i className="bi bi-clock" title="Hora del viaje"></i>   Hora: {travel.hour}</span>
                                    <br/>
                                    <span>
                                         <i className="bi bi-people pe-3" title="Asientos disponibles"/>
                                        Asientos disponibles: {travel.seats}
                                    </span>
                                    <br/>
                                        <span>
                                            <i className="bi bi-currency-euro" title="Asientos disponibles"></i>
                                        Precio: {travel.price}
                                    </span>
                                    <br/>
                                     <Link 
                                        method="post"
                                        href={"/booking/"+travel.id}>
                                          <Button
                                          size='lg'
                                            variant="success"
                                            className="mb-3 mt-3 shadow" >Reserva tu viaje! 
                                            </Button> 
                                        </Link>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    <i className="bi bi-person-circle pe-3" title="Conductor"></i>
                                    Publicado por:{" "}
                                    <a
                                        href={"/otheruser/"+ travel.driver.id}
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
