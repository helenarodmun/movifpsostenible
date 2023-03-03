import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import texts from '../textos/es.json';

function IconsGrid() {
  return (
    <section className="features-icons bg-light text-center">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div className="features-icons-icon d-flex"><i className="bi bi-search m-auto text-primary" /></div>
              <h3>{texts.Search_a_ride}</h3>
              <p className="lead mb-0">{texts.Pick_your_ride}</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div className="features-icons-icon d-flex"><i className="bi bi-calendar2-check m-auto text-primary" /></div>
              <h3>{texts.Book}</h3>
              <p className="lead mb-0">{texts.Book_your_ride}</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
              <div className="features-icons-icon d-flex"><i className="bi bi-car-front m-auto text-primary" /></div>
              <h3>{texts.Travel_together}</h3>
              <p className="lead mb-0">{texts.Enjoy}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default IconsGrid;

if (document.getElementById('iconsGrid')) {
  const Index = ReactDOM.createRoot(document.getElementById("iconsGrid"));
  Index.render(
    <React.StrictMode>
      <IconsGrid/>
    </React.StrictMode>
  )
}
