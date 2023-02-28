import { useForm } from "@inertiajs/react";
import { range } from "lodash";
import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

export default function Index() {
    // useForm es un helper diseñado para formularios
    const { data, setData, post, processing, errors } = useForm({
        origin: "",
        destination: "",
        date: "",
        hour: "",
        seats: range(6,0),
    });
    function submit(e) {
        e.preventDefault();
        // post puede recibir un parametro de parametros donde puedes complementar la funcion con mas funciones, en este caso, si se hace bien el post se sube la data a la consola
        post(
            "/publish",
            {
                onSuccess: () => {
                    console.log(data);
                },
            },
            data
        );
    }
    function seatsGenerate(data) {
        const oldSeats = ''
        const options = Array.from({ length: 7 }, (_, i) => i).reverse(); // generamos un array con los valores permitidos (del 6 al 0)
        options.forEach((option) => {
            const selected = (oldSeats == option) ? "selected" : ""; // si el valor estaba previamente seleccionado, lo marcamos como seleccionado
            const optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.selected = selected;
            optionElement.textContent = option;
            document.querySelector("select").appendChild(optionElement);

        });
    }
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Header>
                            <h3>Publica un viaje</h3>
                        </Card.Header>
                        <Card.Body>
                            <Form method="POST" onSubmit={submit}>
                                <Form.Group>
                                    <Form.Label>Origen:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="origin"
                                        placeholder="¿Cuál va a ser el punto de partida?"
                                        value={data.origin}
                                        onChange={(
                                            e // si cambia el valor se seteara el valor nuevo en el constructor
                                        ) => setData("origin", e.target.value)}
                                    />
                                    {errors.origin && (
                                        <div className="alert alert-danger">
                                            {errors.origin}
                                        </div>
                                    )}
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Destino:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="destination"
                                        placeholder="¿Cuál va a ser el destino del viaje?"
                                        value={data.destination}
                                        onChange={(
                                            e // si cambia el valor se seteara el valor nuevo en el constructor
                                        ) =>
                                            setData(
                                                "destination",
                                                e.target.value
                                            )
                                        }
                                    />
                                    {errors.destination && (
                                        <div className="alert alert-danger">
                                            {errors.destination}
                                        </div>
                                    )}
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Fecha:</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="date"
                                        placeholder="Que día va a realizar el viaje?"
                                        value={data.date}
                                        onChange={(
                                            e // si cambia el valor se seteara el valor nuevo en el constructor
                                        ) => setData("date", e.target.value)}
                                    />
                                    {errors.date && (
                                        <div className="alert alert-danger">
                                            {errors.date}
                                        </div>
                                    )}
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Hora:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="hour"
                                        placeholder="¿A qué hora se iniciará el viaje?"
                                        value={data.hour}
                                        onChange={(
                                            e // si cambia el valor se seteara el valor nuevo en el constructor
                                        ) => setData("origin", e.target.value)}
                                    />
                                    {errors.hour && (
                                        <div className="alert alert-danger">
                                            {errors.hour}
                                        </div>
                                    )}
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Asientos disponibles:
                                    </Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="seats"
                                        value={data.seats}
                                        onChange={(
                                            e // si cambia el valor se seteara el valor nuevo en el constructor
                                        ) => setData("seats", e.target.value)}
                                    >
                                        <option disabled>
                                            Escoja el número de asientos ...
                                        </option>
                                        {
                                            seatsGenerate(data.seats)
                                        }
                                    </Form.Control>
                                    {errors.seats && (
                                        <div className="alert alert-danger">
                                            {errors.seats}
                                        </div>
                                    )}
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Publicar viaje
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
