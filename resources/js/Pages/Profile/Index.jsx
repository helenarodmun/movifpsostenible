import { usePage } from "@inertiajs/react";
import { Container, Row, Col, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import Nav from "/resources/js/components/Nav";
import Footer from "/resources/js/components/Footer";
import imgProfile from "/resources/assets/img/blank-profile.jpg";

export default function Index() {
    const { auth } = usePage().props;
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Editar perfil
        </Tooltip>
      );
    return (
        <>
            <Nav />
            <Container className="m-5">
                <Row className="m-5">
                    <Col xl={12} className="mt-3 pt-3 shadow">
                        <img
                            className="float-left rounded-circle mr-2"
                            src={imgProfile}
                            width="120"
                            height="120"
                            alt="Imagen del perfil"
                        ></img>
                        <h1>{auth.user.name}</h1>
                        <br />
                        <h2><small>Centro educativo:</small>{auth.user.centro}</h2>
                        <br />
                        <h4><small>Correo:</small>{auth.user.email}</h4>
                        <br />
                        <h4><small>Tags:</small>{auth.user.tags}</h4>
                        <br />
                        <h4><small>Descripción:</small>{auth.user.description}</h4>
                        <>
                        <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button className="btn btn-secondary float-right m-3">
          <i className="bi bi-pencil-square"></i>
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
