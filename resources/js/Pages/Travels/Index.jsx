import {  usePage, Link} from "@inertiajs/react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default function Index() {
    const { travels, flash, booking } = usePage().props;
    function myDate(fechaHora) {
        return dayjs(fechaHora).locale("es").format("DD MMMM YYYY - HH:mm:ss");
    }
    
    return (
        <>
            <Nav></Nav>
            <Container className="accesibilidad-texto">
            {flash.message && (
          <div class="alert">{flash.message}</div>
        )}
                <Row>
                    <h1 className="m-5">Viajes</h1>
                    {console.log(booking)}
                    {travels.map((travel) => (
                        <Col key={travel.id} md={6} className="mt-3 pt-3 shadow  p-3 ">
                            <Card className="shadow">
                                <Card.Header className="h3">
                                    Origen: {travel.origin}
                                    <br />
                                    Destino: {travel.destination}
                                </Card.Header>
                                <Card.Body>
                                    <span><i class="bi bi-calendar-check"  title="Fecha del viaje"></i>   Fecha: {travel.date}</span>
                                    <br/>
                                    <span><i class="bi bi-clock" title="Hora del viaje"></i> Hora: {travel.hour}</span>
                                    <br/>
                                    <span><i className="bi bi-people pe-3" title="Asientos disponibles" />
                                        Asientos disponibles: {travel.seats}
                                    </span>
                                    <br/>
                                        <span> <i class="bi bi-currency-euro" title="Asientos disponibles"></i>
                                        Precio: {travel.price}
                                    </span>
                                    <br/>
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
            <Footer></Footer>
        </>
    );
}
