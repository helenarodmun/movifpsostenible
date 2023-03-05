import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import {  Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import Nav from "/resources/js/components/Nav";
import Footer from "/resources/js/components/Footer";
export default function ModifyTravel(props) {
    // Obtener la información del viaje desde las props de la página utilizando usePage()
     const { travel } = usePage().props;
     console.log(props)
     // Estado local para controlar el envío del formulario
    const [isSubmitting, setIsSubmitting] = useState(false);
    // Usar useForm() para crear un formulario controlado con valores iniciales predefinidos
    const { data, setData, put, delete:destroy, processing, errors } = useForm({
        origin: travel.origin,
        destination: travel.destination,
        date: travel.date,
        hour: travel.hour,
        seats: travel.seats,
        price: travel.price,
    });
     // Función para manejar el envío del formulario
    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        // Llamar a la función put() para enviar una solicitud PUT al servidor con los nuevos datos del viaje
        put(
            `/modifytravel/${travel.id}`,
            {
                onSuccess: () => {
                    console.log(data); },
            },            
            data            
        );
        setIsSubmitting(false);
    }
    // Función para manejar la eliminación del viaje
    function handleSubmitDelete(e) {
        e.preventDefault();
        setIsSubmitting(true);
        // Llamar a la función delete() para enviar una solicitud DELETE al servidor y eliminar el viaje
        destroy(
            `/deletetravel/${travel.id}`,
            {
                onSuccess: () => {
                    console.log(data); },
            },            
            data            
        );
        setIsSubmitting(false);
    }


    return (
        <>
            <Nav/>
            <Container>
                <Row className="m-5 ">
                <h1 className="m-3">Modificación viaje</h1>
                    <Col sm={12} className="mt-3 pt-3 shadow p-3 ">
                        <Card className="shadow">
                            <Card.Header closeButton>
                                <Card.Title >
                                    <p className="h2"> Viaje {travel.id}</p>
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formOrigin">
                                        <Form.Label>Origen</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="origin"
                                            value={data.origin}
                                            onChange={(e) =>
                                              setData("origin", e.target.value)
                                          }
                                      />
                                      {errors.origin && (
                                          <div className="alert alert-danger">
                                              {errors.origin}
                                          </div>
                                      )}
                                    </Form.Group>

                                    <Form.Group controlId="formDestination">
                                        <Form.Label>Destino</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="destination"
                                            value={data.destination}
                                            onChange={(e) =>
                                              setData("destination", e.target.value)
                                          }
                                      />
                                      {errors.destination && (
                                          <div className="alert alert-danger">
                                              {errors.destination}
                                          </div>
                                      )}
                                    </Form.Group>

                                    <Form.Group controlId="formDate">
                                        <Form.Label>Fecha</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="date"
                                            value={data.date}
                                            onChange={(e) =>
                                              setData("date", e.target.value)
                                          }
                                      />
                                      {errors.date && (
                                          <div className="alert alert-danger">
                                              {errors.date}
                                          </div>
                                      )}
                                    </Form.Group>

                                    <Form.Group controlId="formHour">
                                        <Form.Label>Hora</Form.Label>
                                        <Form.Control
                                            type="time"
                                            name="hour"
                                            value={data.hour}
                                            onChange={(e) =>
                                              setData("hour", e.target.value)
                                          }
                                      />
                                      {errors.hour && (
                                          <div className="alert alert-danger">
                                              {errors.hour}
                                          </div>
                                      )}
                                    </Form.Group>

                                    <Form.Group controlId="formSeats">
                                        <Form.Label>
                                            Asientos disponibles
                                        </Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="seats"
                                            value={data.seats}
                                            min="1"
                                            max="6"
                                            onChange={(e) =>
                                              setData("seats", e.target.value)
                                          }
                                      />
                                      {errors.seats && (
                                          <div className="alert alert-danger">
                                              {errors.seats}
                                          </div>
                                      )}
                                    </Form.Group>

                                    <Form.Group controlId="formPrice">
                                        <Form.Label>Precio</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="price"
                                            value={data.price}
                                            min="0"
                                            onChange={(e) =>
                                              setData("price", e.target.value)
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
                                className='m-3 shadow' 
                                variant="primary"
                                size='lg'
                                 disabled={isSubmitting}
                                 onClick={handleSubmit} 
                                 aria-label="Modificar los datos del viaje"
                                 >
                                   {isSubmitting
                                        ? "Guardando..."
                                        : "Guardar cambios"}
                                  
                                </Button>
                                <Button className="m-3 shadow"
                                type="submit"
                                variant="danger"
                                size='lg'
                                disabled={isSubmitting}
                                aria-label="Eliminar los datos del viaje"
                                onClick={handleSubmitDelete} 
                                >
                                  {isSubmitting
                                       ? "Eliminando..."
                                       : "Eliminar registro"}
                            
                               
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
