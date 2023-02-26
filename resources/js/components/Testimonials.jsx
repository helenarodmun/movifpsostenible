import React from 'react';
import ReactDOM from 'react-dom/client';
import texts from '../textos/es.json';
import { Container, Row, Col } from 'react-bootstrap';

function Testimonials() {
  return (
    <section className="testimonials text-center bg-light">
      <Container>
        <h2 className="mb-5">{texts.What}</h2>
        <Row>
          <Col lg={4}>
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-1.jpg" alt="..." />
              <h5>Margarita E.</h5>
              <p className="font-weight-light mb-0">"{texts.fantastic}"</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-2.jpg" alt="..." />
              <h5>Alfredo S.</h5>
              <p className="font-weight-light mb-0">
                "{texts.MoviFP}"
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-3.jpg" alt="..." />
              <h5>Sara W.</h5>
              <p className="font-weight-light mb-0">
                "{texts.Thanks}"
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;

if (document.getElementById('testimonials')) {
  const Index = ReactDOM.createRoot(document.getElementById("testimonials"));

  Index.render(
      <React.StrictMode>
          <Testimonials/>
      </React.StrictMode>
  )
}
