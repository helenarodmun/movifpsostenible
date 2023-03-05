import { usePage } from "@inertiajs/react";
import {Container, Row, Col, Form, Card,} from "react-bootstrap";
import Nav from "/resources/js/components/Nav";
import Footer from "/resources/js/components/Footer";
import imgProfile from "/resources/assets/img/blank-profile.jpg";
import logo from '/resources/assets/img/movifpsostenible_v2.jpg';

export default function Index() {

    const { user, travels} = usePage().props;
    function myDate(fechaHora) {
        return dayjs(fechaHora).locale("es").format("DD MMMM YYYY - HH:mm:ss");
    }
    return (
        <>
            <Nav />
            <Container className="accesibilidad-texto">
            <div className="capa shadow">         
            <img
              src={logo}
              className=" capa"
              alt="React Bootstrap logo"
            />           
            </div>
                <Row className="m-5 ">
                    <Col sm={12} className="mt-3 pt-3 shadow  p-3 ">
                        <img
                            className="shadow m-5 float-left rounded-circle mr-2 p-1"
                            src={imgProfile}
                            width="120"
                            height="120"
                            alt="Imagen del perfil"
                        ></img>
                        <h1>{user.name}</h1>
                        <br />
                        <Form.Group className="mb-3 p-3">
                            <Form.Label >Centro educativo:</Form.Label>
                            <Form.Control aria-label="nombre del centro educativo"
                                placeholder={user.center}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 p-3">
                            <Form.Label >Correo:</Form.Label>
                            <Form.Control aria-label="direccion de correo electrónico"
                                placeholder={user.email}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 p-3">
                            <Form.Label >Description:</Form.Label>
                            <Form.Control aria-label="descripción personal"
                                placeholder={user.description}
                                readOnly
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 p-3">
                            <Form.Label >Tags:</Form.Label>
                            <Form.Control aria-label="características del conductor"
                                placeholder={user.tags}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                <h1 className="m-5">VIAJES DE {user.name.toUpperCase()}</h1>
                    {travels.map((travel) => (
                        <Col key={travel.id} md={6} className="mt-3 pt-3 shadow  p-3 ">
                            <Card className="shadow m-3">
                                <Card.Header className="h3">
                                    Origen: {travel.origin}
                                    <br />
                                    Destino: {travel.destination}
                                </Card.Header>
                                <Card.Body>
                                    <span><i class="bi bi-calendar-check" itle="Fecha del viaje"></i>    Fecha: {travel.date}</span>
                                    <br/>
                                    <span><i class="bi bi-clock" title="Hora del viaje"></i>  Hora: {travel.hour}</span>
                                    <br/>
                                    <span><i className="bi bi-people pe-3" title="Asientos disponibles" />
                                        Asientos disponibles: {travel.seats}
                                    </span>
                                    <br/>
                                    <span>  <i class="bi bi-currency-euro" title="Precio del viaje"></i>
                                        Precio: {travel.price}
                                    </span>
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
            <Footer />
        </>
        
    );
}
