import React from 'react';
import ReactDOM from 'react-dom/client';
import texts from '../textos/es.json'
function Header() {
      return (
  
        <header className="masthead">
          <div className="container position-relative">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="text-center text-white">
                  {/* Page heading*/}
                  <h1 className="mb-5">{texts.Where}</h1>
                  <form method='POST'  className="form-subscribe" id="contactForm">
                    <div className="row">
                      {/* Departure */}
                      <div className="col" style={{flex: '1.5 0 0%'}}>
                        <input className="form-control form-control-lg" id="departure" name="origin" type="text" placeholder={texts.Leaving} />
                        <div className="invalid-feedback text-white">
                          {'{'}{'{'} __('Departure is required.') {'}'}{'}'}</div>
                        <div className="invalid-feedback text-white">
                          {'{'}{'{'} __('Departure is not valid.') {'}'}{'}'}</div>
                      </div>
                      {/* Destination */}
                      <div className="col" style={{flex: '1.5 0 0%'}}>
                        <input className="form-control form-control-lg" id="destination" name="destination" type="text" placeholder={texts.Going} />
                        <div className="invalid-feedback text-white">
                          {'{'}{'{'} __('Destination is required.') {'}'}{'}'}</div>
                        <div className="invalid-feedback text-white">
                          {'{'}{'{'} __('Destination is not valid.') {'}'}{'}'}</div>
                      </div>
                      {/* Date*/}
                      <div className="col" style={{flex: '1 0 0%'}}>
                        <input className="form-control form-control-lg" id="date" name="date" type="date" />
                        <div className="invalid-feedback text-white">
                          {'{'}{'{'} __('Date is required.') {'}'}{'}'}</div>
                        <div className="invalid-feedback text-white">
                          {'{'}{'{'} __('Date is not valid.') {'}'}{'}'}</div>
                      </div>
                      <div className="col-auto"><button className="btn btn-primary btn-lg " id="submitButton" type="submit">{texts.Submit}</button></div>
                    </div>
                    <div className="row" style={{}}>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
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