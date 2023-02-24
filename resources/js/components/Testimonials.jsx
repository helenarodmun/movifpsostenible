import React from 'react';
import ReactDOM from 'react-dom/client';
import texts from '../textos/es.json';
function Testimonials() {
      return (
  
        <section className="testimonials text-center bg-light">
          <div className="container">
            <h2 className="mb-5">{texts.What}</h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-1.jpg" alt="..." />
                  <h5>Margarita E.</h5>
                  <p className="font-weight-light mb-0">"{texts.fantastic}"</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-2.jpg" alt="..." />
                  <h5>Alfredo S.</h5>
                  <p className="font-weight-light mb-0">
                    "{texts.MoviFP}"
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-3.jpg" alt="..." />
                  <h5>Sara W.</h5>
                  <p className="font-weight-light mb-0">
                    "{texts.Thanks}"
                  </p>
                </div>
              </div>
            </div>
          </div>
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