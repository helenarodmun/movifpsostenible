import { usePage } from "@inertiajs/react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "/resources/js/components/Nav";
import Footer from "/resources/js/components/Footer";
import imgProfile from "/resources/assets/img/blank-profile.jpg";

export default function Index() {
    const { auth } = usePage().props;

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
                        <h3>{auth.user.centro}</h3>
                        <br />
                        <h4>{auth.user.email}</h4>
                        <br />
                        <h4>{auth.user.tags}</h4>
                        <br />
                        <h4>{auth.user.description}</h4>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}
