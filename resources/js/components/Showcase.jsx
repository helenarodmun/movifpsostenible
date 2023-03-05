import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container, Row, Col } from 'react-bootstrap';
import texts from '../textos/es.json';

function Showcase() {
  return (
    <section className="showcase accesibilidad-texto">
      <Container fluid>
        <Row>
          <Col lg={{ order: 2 }} className="text-white showcase-img" style={{backgroundImage: 'url("assets/img/bg-showcase-1.jpg")'}} />
          <Col lg={{ order: 1 }} className="my-auto showcase-text">
            <h2>{texts.Environment}</h2>
            <ul>
              <li className="lead mb-0 bi bi-check-circle">{texts.Control}</li>
              <li className="lead mb-0 bi bi-check-circle">{texts.Best}</li>
              <li className="lead mb-0 bi bi-check-circle">{texts.Prevent}</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col lg className="text-white showcase-img" style={{backgroundImage: 'url("assets/img/bg-showcase-2.jpg")'}} />
          <Col lg className="my-auto showcase-text">
            <h2>{texts.Drivers_Benefits}</h2>
            <ul>
              <li className="lead mb-0 bi bi-check-circle">{texts.Save_costs}</li>
              <li className="lead mb-0 bi bi-check-circle">{texts.Open}</li>
              <li className="lead mb-0 bi bi-check-circle">{texts.Comfortable}</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col lg={{ order: 2 }} className="text-white showcase-img" style={{backgroundImage: 'url("assets/img/bg-showcase-3.jpg")'}} />
          <Col lg={{ order: 1 }} className="my-auto showcase-text">
            <h2>{texts.Passengers_Benefits}</h2>
            <ul>
              <li className="lead mb-0 bi bi-check-circle">{texts.Less}</li>
              <li className="lead mb-0 bi bi-check-circle">{texts.Passengers_insured}</li>
              <li className="lead mb-0 bi bi-check-circle">{texts.Choose}</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

    
  export default Showcase;

  if (document.getElementById('showcase')) {
      const Index = ReactDOM.createRoot(document.getElementById("showcase"));
  
      Index.render(
          <React.StrictMode>
              <Showcase/>
          </React.StrictMode>
      )
  }
  