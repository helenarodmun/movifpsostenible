import { Link, usePage } from "@inertiajs/react";
import { Container,Row, Col, Button, OverlayTrigger, Tooltip, Form,} from "react-bootstrap";
import Nav from "/resources/js/components/Nav";
import Footer from "/resources/js/components/Footer";
import imgProfile from "/resources/assets/img/blank-profile.jpg";

export default function Index() {
     // Obtenemos la propiedad "auth" de las props de la página utilizando el hook "usePage"
    const { auth } = usePage().props;
    console.log(auth)
    // Creamos una función llamada "renderTooltip" que recibe un objeto "props"
    // Esta función retorna un componente "Tooltip" de Bootstrap que muestra el mensaje "Editar perfil" cuando el usuario coloca el cursor sobre un botón
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Editar perfil
        </Tooltip>
    );
    return (
        <>
            <Nav />
            <Container >
                <Row className="m-5 ">
                    <Col sm={12} className="mt-3 pt-3 shadow  p-3 " >
                        <img
                            className=" m-5 shadow float-left rounded-circle mr-2 p-1"
                            src={imgProfile}
                            width="120"
                            height="120"
                            alt="Imagen del perfil"
                        ></img>
                        <h1>{auth.user.name}</h1>
                        <br />
                        <Form.Group className="mb-3 p-3">
                            <Form.Label>Centro educativo:</Form.Label>
                            <Form.Control
                                placeholder={auth.user.center}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 p-3">
                            <Form.Label>Correo:</Form.Label>
                            <Form.Control
                                placeholder={auth.user.email}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 p-3">
                            <Form.Label>Description:</Form.Label>
                            <Form.Control
                                placeholder={auth.user.description}
                                readOnly
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 p-3">
                            <Form.Label>Tags:</Form.Label>
                            <Form.Control
                                placeholder={auth.user.tags}
                                disabled
                            />
                        </Form.Group>
                        <>
                            {/* OverlayTrigger envuelve el botón y la herramienta de información sobre herramientas y 
                            muestra la herramienta de información sobre herramientas cuando el usuario pasa el cursor sobre el botón */}
                            <OverlayTrigger
                                placement="bottom"// coloca la herramienta de información sobre herramientas debajo del botón
                                delay={{ show: 250, hide: 400 }}// establece un retraso antes de que se muestre la herramienta de información sobre herramientas
                                overlay={renderTooltip}// especifica qué función se usa para renderizar la herramienta de información sobre herramientas
                            >
                                <Button className="btn btn-secondary  m-3 shadow" size='lg'>
                                <Link
                                    href="/editProfile"
                                    as="button"
                                    className=" shadow bi bi-pencil-square"
                                />
                                </Button>
                            </OverlayTrigger>
                        </>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}
