import { useForm, usePage } from "@inertiajs/react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Nav from "/resources/js/components/Nav";
import Footer from "/resources/js/components/Footer";
import imgProfile from "/resources/assets/img/blank-profile.jpg";
import { useState } from "react";

export default function Index() {
    const { auth } = usePage().props;
    const { data, setData, put, processing, errors } = useForm({
        name: '',
        center: '',
        email: '',
        description: '',
        tags: '',
        password: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
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

    return (
        <>
            <Nav />
            <Container>
                <Row className="m-5 ">
                    <Col sm={12} className="mt-3 pt-3 shadow p-3 ">
                        <Form onSubmit={handleSubmit}>
                            <img
                                className="float-left rounded-circle mr-2 p-1"
                                src={imgProfile}
                                width="120"
                                height="120"
                                alt="Imagen del perfil"
                            ></img>
                            <Form.Group className="mb-3 p-3">
                                <Form.Label>Nombre:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder={auth.user.name}
                                    defaultValue={auth.user.name}
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
                                    type="text"
                                    name="center"
                                    placeholder={auth.user.center}
                                    defaultValue={auth.user.center}
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
                                    type="email"
                                    name="email"
                                    placeholder={auth.user.email}
                                    defaultValue={auth.user.email}
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
                                    type="text"
                                    name="description"
                                    placeholder={auth.user.description}
                                    defaultValue={auth.user.description}
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
                                    type="text"
                                    name="tags"
                                    placeholder={auth.user.tags}  
                                    defaultValue={auth.user.tags} 
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
                            <Form.Group className="mb-3 p-3">
                                <Form.Label>Contraseña:</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                {errors.password && (
                                    <div className="alert alert-danger">
                                        {errors.password}
                                    </div>
                                )}
                            </Form.Group>

                            <Button
                                type="submit"
                                variant="success"
                                aria-label="Actualizar los datos del perfil"
                            >
                                Actualizar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}
