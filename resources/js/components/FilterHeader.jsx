import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import texts from '../textos/es.json';
import { Link, useForm } from "@inertiajs/react";

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
      <Container className="position-relative accesibilidad-texto">
        <Row className="justify-content-center ">
          <Col  >
            <div sm={6} className="text-center text-white ">
              {/* Page heading*/}
              <h1 className="mb-5 accesibilidad-texto">!Ahora puedes buscar tu viaje de forma mas personalizada!</h1>
              <h2 className="mb-5 accesibilidad-texto"> Busqueda avanzada</h2>
              <Form   method="POST" onSubmit={submit} className="form-subscribe" id="contactForm" >
                <Row className='m-5'>
                  {/* Departure */}
                  <Col style={{flex: '1.5 0 0%'}}>
                    <Form.Control aria-label='Origen que se quiere buscar'
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
                    <Form.Control aria-label='Destino que se quiere buscar'
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
                    <Form.Control  aria-label='fecha que se quiere buscar'className="form-control-lg" id="date" name="date" type="date" 
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
                    <Form.Control aria-label='Hora que se quiere buscar' className="form-control-lg" id="hour" name="hour" type="time" 
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
                    <Form.Control aria-label='buscar por numero de asientos'className="form-control-lg" id="seats" name="seats" type="number" 
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
                    <Form.Control aria-label='buscar por precio'className="form-control-lg" id="price" name="price" type="number" 
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
                <Col xs="auto">
                  <Link 
                  href="/travels">
                      <Button classNem='m-5'variant="warning" size="lg" id="submitButton" type="submit">
                      Ver todos los viajes
                    </Button>
                  </Link>
                  </Col>
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