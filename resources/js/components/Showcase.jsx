import React from 'react';
import ReactDOM from 'react-dom/client';
import texts from'../textos/es.json';
function Showcase() {
      return (
  
        <section className="showcase">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: 'url("assets/img/bg-showcase-1.jpg")'}} />
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>{texts.Environment}</h2>
                <p className="lead mb-0 bi bi-check-circle">
                  {texts.Control}
                </p>
                <p className="lead mb-0 bi bi-check-circle">
                  {texts.Best}
                </p>
                <p className="lead mb-0 bi bi-check-circle">
                  {texts.Prevent}
                </p>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-lg-6 text-white showcase-img" style={{backgroundImage: 'url("assets/img/bg-showcase-2.jpg")'}}>
              </div>
              <div className="col-lg-6 my-auto showcase-text">
                <h2>{texts.Drivers_Benefits}</h2>
                <p className="lead mb-0 bi bi-check-circle">
                  {texts.Save_costs}
                </p>
                <p className="lead mb-0 bi bi-check-circle">
                  {texts.Open}
                </p>
                <p className="lead mb-0 bi bi-check-circle">
                  {texts.Comfortable}
                </p>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: 'url("assets/img/bg-showcase-3.jpg")'}} />
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>{texts.Passengers_Benefits}</h2>
                <p className="lead mb-0 bi bi-check-circle">
                  {texts.Less}
                </p>
                <p className="lead mb-0 bi bi-check-circle">
                  {texts.Passengers_insured}
                </p>
                <p className="lead mb-0 bi bi-check-circle">
                  {texts.Choose}
                </p>
              </div>
            </div>
          </div>
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
  