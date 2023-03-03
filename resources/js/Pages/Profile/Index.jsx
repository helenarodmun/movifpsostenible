import { Link, usePage } from "@inertiajs/react";
import { Container,Row, Col, Button, OverlayTrigger, Tooltip, Form,} from "react-bootstrap";
import Nav from "/resources/js/components/Nav";
import Footer from "/resources/js/components/Footer";
import imgProfile from "/resources/assets/img/blank-profile.jpg";

export default function Index() {
    const { auth } = usePage().props;
    console.log(auth)
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
                            className="float-left rounded-circle mr-2 p-1"
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
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <Button className="btn btn-secondary  m-3">
                                <Link
                                    href="/editProfile"
                                    as="button"
                                    className="bi bi-pencil-square"
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
