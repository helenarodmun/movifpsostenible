import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import texts from '../textos/es.json';
import { useForm } from "@inertiajs/react";

function FilterHeader() {
   // Utilizar el hook useForm para crear variables que manejen el estado del formulario
   const { data, setData, get, processing, errors } = useForm({
    origin: "",
    destination: "",
    date: "",
    hour:"",
    seats:"",
    price:""
});
//función para manejar el evento submit del formulario
function submit(e) {
    e.preventDefault();
    // Utilizar la función get del hook useForm para hacer una solicitud POST a la ruta /search
    // Si la solicitud es exitosa, se imprimirá la data en la consola
    get(
        "/search",
        {
            onSuccess: () => {
                console.log(data);
            },
        },
        data
    );
}
  return (
    <header className="masthead">
      <Container className="position-relative">
        <Row className="justify-content-center">
          <Col >
            <div className="text-center text-white">
              {/* Page heading*/}
              <h1 className="mb-5">!Ahora puedes buscar tu viaje de forma mas personalizada!</h1>
              <h2 className="mb-5"> Busqueda avanzada</h2>
              <Form  method="POST" onSubmit={submit} className="form-subscribe" id="contactForm">
                <Row>
                  {/* Departure */}
                  <Col style={{flex: '1.5 0 0%'}}>
                    <Form.Control 
                    className="form-control-lg" 
                    id="origin" 
                    name="origin" 
                    type="text" 
                    value={data.origin} // el valor del imput lo sacara del constructor 
                    onChange={(e) => // si cambia el valor se seteara el valor nuevo en el constructor
                        setData(
                            "origin",
                            e.target.value
                        )
                    }
                    placeholder={texts.Leaving} />
                    <Form.Control.Feedback type="invalid" className="text-white">
                      {texts.Departure_not_valid}
                    </Form.Control.Feedback>
                  </Col>
                  {/* Destination */}
                  <Col style={{flex: '1.5 0 0%'}}>
                    <Form.Control 
                    className="form-control-lg" 
                    id="destination" 
                    name="destination" 
                    type="text"
                    value={data.destination} // el valor del imput lo sacara del constructor 
                    onChange={(e) => // si cambia el valor se seteara el valor nuevo en el constructor
                        setData(
                            "destination",
                            e.target.value
                        )
                    }
                    placeholder={texts.Going} />
                    <Form.Control.Feedback type="invalid" className="text-white">
                      {texts.Destination}
                    </Form.Control.Feedback>
                  </Col>
                  {/* Date*/}
                  <Col style={{flex: '1 0 0%'}}>
                    <Form.Control className="form-control-lg" id="date" name="date" type="date" 
                     value={data.date} // el valor del imput lo sacara del constructor 
                     onChange={(e) => // si cambia el valor se seteara el valor nuevo en el constructor
                         setData(
                             "date",
                             e.target.value
                         )
                     }/>
                    <Form.Control.Feedback type="invalid" className="text-white">
                      {texts.Date_}
                    </Form.Control.Feedback>
                  </Col>
                  <Col style={{flex: '1 0 0%'}}>
                    <Form.Control className="form-control-lg" id="hour" name="hour" type="time" 
                     value={data.hour} // el valor del imput lo sacara del constructor 
                     onChange={(e) => // si cambia el valor se seteara el valor nuevo en el constructor
                         setData(
                             "hour",
                             e.target.value
                         )
                     }/>
                    <Form.Control.Feedback type="invalid" className="text-white">
                      Formato de hora no válido
                    </Form.Control.Feedback>
                  </Col>
                  <Col style={{flex: '1 0 0%'}}>
                    <Form.Control className="form-control-lg" id="seats" name="seats" type="number" 
                     value={data.seats} // el valor del imput lo sacara del constructor 
                     onChange={(e) => // si cambia el valor se seteara el valor nuevo en el constructor
                         setData(
                             "seats",
                             e.target.value
                         )
                     }/>
                    <Form.Control.Feedback type="invalid" className="text-white">
                      Formato de número no válido
                    </Form.Control.Feedback>
                  </Col>
                  <Col style={{flex: '1 0 0%'}}>
                    <Form.Control className="form-control-lg" id="price" name="price" type="number" 
                     value={data.price} // el valor del imput lo sacara del constructor 
                     onChange={(e) => // si cambia el valor se seteara el valor nuevo en el constructor
                         setData(
                             "price",
                             e.target.value
                         )
                     }/>
                    <Form.Control.Feedback type="invalid" className="text-white">
                    Formato de precio no válido
                    </Form.Control.Feedback>
                  </Col>
                  <Col xs="auto">
                    <Button variant="primary" size="lg" id="submitButton" type="submit">
                      {texts.Submit}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};


    export default FilterHeader;

    if (document.getElementById('FilterHeader')) {
        const Index = ReactDOM.createRoot(document.FilterHeader("FilterHeader"));
    
        Index.render(
            <React.StrictMode>
                <FilterHeader/>
            </React.StrictMode>
        )
    }