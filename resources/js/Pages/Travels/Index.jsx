import { useForm, usePage, Link} from "@inertiajs/react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Nav from "../../components/Nav";
export default function Index() {
    const { travels, booking } = usePage().props;
    function myDate(fechaHora) {
        return dayjs(fechaHora).locale("es").format("DD MMMM YYYY - HH:mm:ss");
    }
    
    return (
        <>
            <Nav></Nav>
            <Container>
                <Row>
                    <h1 className="m-5">Viajes</h1>
                    {console.log(booking)}
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
                                        {" "}
                                        {/* <Link href={"/travels/" + travel.id}> */}
                                        {" "}
                                        <Button
                                            variant="success"
                                            className="mb-3 mt-3"
                                        >
                                             Reserva tu viaje!
                                        </Button>
                                    {/* </Link> */}
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    Publicado por:{" "}
                                    <a
                                        href="/profile"
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
        </>
    );
}
