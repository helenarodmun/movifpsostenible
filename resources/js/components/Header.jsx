import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import texts from '../textos/es.json';
import { useForm } from "@inertiajs/react";

function Header() {
   // useForm es un helper diseñado para formularios
   const { data, setData, post, processing, errors } = useForm({
    origin: "",
    destination: "",
    date: "",
});
function submit(e) {
    e.preventDefault();
    // post puede recibir un parametro de parametros donde puedes complementar la funcion con mas funciones, en este caso, si se hace bien el post se sube la data a la consola
    post(
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
          <Col xl={10}>
            <div className="text-center text-white">
              {/* Page heading*/}
              <h1 className="mb-5">{texts.Where}</h1>
              <Form  method="POST"
                                onSubmit={submit} className="form-subscribe" id="contactForm">
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
                      {texts.Departure_required}
                    </Form.Control.Feedback>
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
                    <Form.Control.Feedback type="invalid" className="text-white">
                      {texts.Date_}
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


    export default Header;

    if (document.getElementById('header')) {
        const Index = ReactDOM.createRoot(document.getElementById("header"));
    
        Index.render(
            <React.StrictMode>
                <Header/>
            </React.StrictMode>
        )
    }