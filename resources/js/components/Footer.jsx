import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import texts from '../textos/es.json';

function Footer() {
  return (
    <footer className="footer bg-light">
      <Container>
        <Row>
          <Col lg={6} className="h-100 text-center text-lg-start my-auto">
            <ul className="list-inline mb-2">
              <li className="list-inline-item"><a href="#!">{texts.About}</a></li>
              <li className="list-inline-item">⋅</li>
              <li className="list-inline-item"><a href="#!">{texts.Contact}</a></li>
              <li className="list-inline-item">⋅</li>
              <li className="list-inline-item"><a href="#!">{texts.Terms}</a></li>
              <li className="list-inline-item">⋅</li>
              <li className="list-inline-item"><a href="#!">{texts.Privacy}</a></li>
            </ul>
            <p className="text-muted small mb-4 mb-lg-0">© MoviFP 2023. {texts.All}</p>
          </Col>
          <Col lg={6} className="h-100 text-center text-lg-end my-auto">
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-4">
                <a href="#!"><i className="bi-facebook fs-3" /></a>
              </li>
              <li className="list-inline-item me-4">
                <a href="#!"><i className="bi-twitter fs-3" /></a>
              </li>
              <li className="list-inline-item">
                <a href="#!"><i className="bi-instagram fs-3" /></a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

if (document.getElementById('footer')) {
  const Index = ReactDOM.createRoot(document.getElementById("footer"));

  Index.render(
    <React.StrictMode>
      <Footer/>
    </React.StrictMode>
  )
}
