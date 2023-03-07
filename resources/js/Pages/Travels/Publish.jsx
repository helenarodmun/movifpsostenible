import { useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
export default function Index({children}) {
    const { flash } = usePage().props
      // Estado local para controlar el envío del formulario
      const [isSubmitting, setIsSubmitting] = useState(false);
    // useForm es un helper diseñado para formularios
    const { data, setData, post, processing, errors } = useForm({
        origin: "",
        destination: "",
        date: "",
        hour: "",
        seats: '',
        price: ''
    });
    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
      
        post(
            "/publish",
            {
                onSuccess: () => {
                    console.log(data);
                },
            },
            data
        );
        setIsSubmitting(false);
    }
 
    return (
        <>
            <Nav></Nav>
            <Container className="align-items-center justify-content-center">
            {flash.message && (
          <div class="alert">{flash.message}</div>
        )}
        {children}
                <Row>
                    <Col sm={12} className="mt-3 pt-3 shadow p-3 " >
                        <Card>
                            <Card.Header >
                            <p className="h2"> Publica un viaje</p>
                            </Card.Header>
                            <Card.Body >
                                <Form  >
                                    <Form.Group>
                                        <Form.Label>Origen:</Form.Label>
                                        <Form.Control 
                                            type="text"
                                            name="origin"
                                            placeholder="¿Cuál va a ser el punto de partida?"
                                            value={data.origin}
                                            onChange={(
                                                e // si cambia el valor se seteara el valor nuevo en el constructor
                                            ) =>
                                                setData(
                                                    "origin",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.origin && (
                                            <div className="alert alert-danger">
                                                {errors.origin}
                                            </div>
                                        )}
                                    </Form.Group>
                                    <Form.Group className='m-2'>
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
                                            ) =>
                                                setData("date", e.target.value)
                                            }
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
                                            ) =>
                                                setData(
                                                    "hour",
                                                    e.target.value
                                                )
                                            }
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
                                        <Form.Select
                                            as="select"
                                            name="seats"
                                            value={data.seats}
                                            onChange={(
                                                e // si cambia el valor se seteara el valor nuevo en el constructor
                                            ) =>
                                                setData("seats", e.target.value)
                                            }
                                        >
                                            <option>
                                                Escoja el número de asientos ...
                                            </option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </Form.Select>
                                        {errors.seats && (
                                            <div className="alert alert-danger">
                                                {errors.seats}
                                            </div>
                                        )}
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Precio:</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="price"
                                            placeholder="¿Que precio tiene el viaje?"
                                            value={data.price}
                                            onChange={(
                                                e // si cambia el valor se seteara el valor nuevo en el constructor
                                            ) =>
                                                setData(
                                                    "price",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.price && (
                                            <div className="alert alert-danger">
                                                {errors.price}
                                            </div>
                                        )}
                                    </Form.Group>
                                    </Form>
                                    </Card.Body>
                                    <Card.Footer>
                                    <Button 
                                        size="lg" 
                                        clasName='m-3 shadow'
                                        variant="primary" 
                                        disabled={isSubmitting}
                                        onClick={handleSubmit} 
                                        aria-label="Publicar un nuevo viaje"
                                        >
                                          {isSubmitting
                                               ? "Publicando..."
                                               : "Publicar viaje"}
                                         
                                       </Button>
                                    </Card.Footer>
                               
                           
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
}
