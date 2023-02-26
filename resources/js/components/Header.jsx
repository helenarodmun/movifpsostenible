import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import texts from '../textos/es.json';

function Header() {
  return (
    <header className="masthead">
      <Container className="position-relative">
        <Row className="justify-content-center">
          <Col xl={10}>
            <div className="text-center text-white">
              {/* Page heading*/}
              <h1 className="mb-5">{texts.Where}</h1>
              <Form className="form-subscribe" id="contactForm">
                <Row>
                  {/* Departure */}
                  <Col style={{flex: '1.5 0 0%'}}>
                    <Form.Control className="form-control-lg" id="departure" name="departure" type="text" placeholder={texts.Leaving} />
                    <Form.Control.Feedback type="invalid" className="text-white">
                      {texts.Departure_required}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid" className="text-white">
                      {texts.Departure_not_valid}
                    </Form.Control.Feedback>
                  </Col>
                  {/* Destination */}
                  <Col style={{flex: '1.5 0 0%'}}>
                    <Form.Control className="form-control-lg" id="destination" name="destination" type="text" placeholder={texts.Going} />
                    <Form.Control.Feedback type="invalid" className="text-white">
                      {texts.Destination}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid" className="text-white">
                      {texts.Destination}
                    </Form.Control.Feedback>
                  </Col>
                  {/* Date*/}
                  <Col style={{flex: '1 0 0%'}}>
                    <Form.Control className="form-control-lg" id="date" name="date" type="date" />
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