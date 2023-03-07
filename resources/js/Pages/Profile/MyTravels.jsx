import {  usePage} from "@inertiajs/react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Nav from "../../components/Nav";

export default function UserTravels() {

    const { travels, flash} = usePage().props; 

      function myDate(fechaHora) {
        return dayjs(fechaHora).locale("es").format("DD MMMM YYYY - HH:mm:ss");
    }
    
    return (
        <>
            <Nav></Nav>
            <Container className="accesibilidad-texto">
                <Row>
                    {flash.edit && (
                        <div class="alert alert-success" role={"alert"}>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="alert"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                            {flash.edit}
                        </div>
                    )}
                    <h1 className="m-5">MIS VIAJES</h1>
                    {travels.map((travel) => (
                        <Col
                            key={travel.id}
                            md={6}
                            className="mt-3 pt-3 shadow  p-3 "
                        >
                            <Card className="shadow">
                                <Card.Header className="h3">
                                    Origen: {travel.origin}
                                    <br />
                                    Destino: {travel.destination}
                                </Card.Header>
                                <Card.Body>
                                    <span>Fecha: {travel.date}</span>
                                    <br />
                                    <span>Hora: {travel.hour}</span>
                                    <br />
                                    <span>
                                        Asientos disponibles: {travel.seats}
                                    </span>
                                    <br />
                                    <span>Precio: {travel.price}</span>
                                    <br />
                                    <Button
                                        size="lg"
                                        className="btn btn-success  m-3 shadow"
                                        href={"/modifytravel/" + travel.id}
                                    >
                                        Modifica el viaje
                                    </Button>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    Fecha de publicación:{" "}
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
