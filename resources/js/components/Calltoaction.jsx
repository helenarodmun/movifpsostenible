import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import texts from '../textos/es.json';

function Calltoaction() {
      return (
  
        <section className="call-to-action text-white text-center" id="signup">
          <div className="container position-relative">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <h2 className="mb-4">{texts.Ready}</h2>
                <form className="form-subscribe" id="contactFormFooter">
                  {/* Email address input*/}
                  <div className="row">              
                    <Link href='register' className="btn btn-primary btn-lg" role="button">{texts.Signup}</Link>         
                  </div>                    
                </form>
              </div>
            </div>
          </div>
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