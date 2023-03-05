import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import texts from '../textos/es.json';

function Calltoaction() {
  return (
    <section className="call-to-action text-white text-center accesibilidad-texto" id="signup">
      <Container className="position-relative">
        <Row className="justify-content-center">
          <Col xl="6">
            <h2 className="mb-4 accesibilidad-texto">{texts.Ready}</h2>
            <Form className="form-subscribe" id="contactFormFooter">
              <Row>
                <Col md="8" className="mb-2 mb-md-0">
                  <Form.Control type="email" placeholder="Email" />
                </Col>
                <Col md="4">
                  <Button variant="primary" size="lg" type="submit">
                    {texts.Signup}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Calltoaction;


  if (document.getElementById('call')) {
      const Index = ReactDOM.createRoot(document.getElementById("call"));
  
      Index.render(
          <React.StrictMode>
              <Calltoaction/>
          </React.StrictMode>
      )
  }