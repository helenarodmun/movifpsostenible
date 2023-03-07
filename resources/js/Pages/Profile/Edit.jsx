import { useForm, usePage } from "@inertiajs/react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Nav from "/resources/js/components/Nav";
import Footer from "/resources/js/components/Footer";
import imgProfile from "/resources/assets/img/blank-profile.jpg";
import logo from "/resources/assets/img/movifpsostenible_v2.jpg";

export default function Index() {
    // Obtener la información de autenticación del usuario desde las props de la página actual
    const { auth, flash } = usePage().props;
    // Declarar un estado interno de formularios utilizando el hook useForm, inicializarlo con los datos del usuario autenticado
    const { data, setData, put, processing, errors, delete:destroy } = useForm({
        name: auth.user.name,
        center: auth.user.center,
        email: auth.user.email,
        description: auth.user.description,
        tags: auth.user.tags,
    });
    // Función manejadora de envío del formulario
    function handleSubmit(e) {
        e.preventDefault();

        // Realizar una solicitud PUT a la ruta "/updateProfile" con los datos del formulario
        put(
            "/updateProfile",
            {
                onSuccess: () => {
                    console.log(data);
                },
            },
            data
        );
    }
    function handleSubmitDelete(e) {
        e.preventDefault();
                console.log(e);
        // Llamar a la función delete() para enviar una solicitud DELETE al servidor y eliminar el viaje
        destroy(
            `/deleteUser/${auth.user.id}`,
            {
                onSuccess: () => {
                    console.log(data);
                },
            },
            data
        );
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
                <Row className="m-5">
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
                    <Col sm={12} className="mt-3 pt-3 shadow p-3 ">
                        <Form onSubmit={handleSubmit}>
                            <img
                                className="shadow m-5 float-left rounded-circle mr-2 p-1"
                                src={imgProfile}
                                width="120"
                                height="120"
                                alt="Imagen del perfil"
                            ></img>
                            <Form.Group className="mb-3 p-3">
                                <Form.Label>Nombre:</Form.Label>
                                <Form.Control
                                    aria-label="nombre completo del usuario"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                {errors.name && (
                                    <div className="alert alert-danger">
                                        {errors.name}
                                    </div>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3 p-3">
                                <Form.Label>Centro educativo:</Form.Label>
                                <Form.Control
                                    aria-label="nombre del centro educativo"
                                    type="text"
                                    name="center"
                                    value={data.center}
                                    onChange={(e) =>
                                        setData("center", e.target.value)
                                    }
                                />
                                {errors.center && (
                                    <div className="alert alert-danger">
                                        {errors.center}
                                    </div>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3 p-3">
                                <Form.Label>Correo:</Form.Label>
                                <Form.Control
                                    aria-label="direccion de correo electrónico"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                {errors.email && (
                                    <div className="alert alert-danger">
                                        {errors.email}
                                    </div>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3 p-3">
                                <Form.Label>Description:</Form.Label>
                                <Form.Control
                                    aria-label="descripción personal"
                                    type="text"
                                    name="description"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />
                                {errors.description && (
                                    <div className="alert alert-danger">
                                        {errors.description}
                                    </div>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3 p-3">
                                <Form.Label>Tags:</Form.Label>
                                <Form.Control
                                    aria-label="características del conductor"
                                    type="text"
                                    name="tags"
                                    value={data.tags}
                                    onChange={(e) =>
                                        setData("tags", e.target.value)
                                    }
                                />
                                {errors.tags && (
                                    <div className="alert alert-danger">
                                        {errors.tags}
                                    </div>
                                )}
                            </Form.Group>
                            <Button
                                size="lg"
                                className="shadow"
                                type="submit"
                                variant="success"
                                aria-label="Actualizar los datos del perfil"
                            >
                                Actualizar
                            </Button>
                            <Button
                                className="m-3 shadow"
                                type="submit"
                                variant="danger"
                                size="lg"
                                aria-label="Eliminar los datos del viaje"
                                onClick={handleSubmitDelete}
                            >
                                <strong>Eliminar cuenta</strong>
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}
