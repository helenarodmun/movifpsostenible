import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import texts from '../textos/es.json';

function Login() {
    const { data, setData, post, reset, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
      })
    {progress && (
        <progress value={progress.percentage} max="100">
            {progress.percentage}%
        </progress>
    )}
      function submit(e) {
        e.preventDefault()
        post('/login', {
            preserveScroll: true,
            onSuccess: () => reset('password'),
        })
      }
      return (
        <div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">{texts.Login}</div>
                  <div className="card-body">
                    <form onSubmit={submit}>
                      <div className="row mb-3">
                        <label htmlFor="email" className="col-md-4 col-form-label text-md-end">{twxts.Email_Address}</label>
                        <div className="col-md-6">
                        <input type="text" value={data.email} onChange={e => setData('email', e.target.value)} />
                            {errors.email && <div className="invalid-feedback" role="alert">{errors.email}</div>}                          
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="password" className="col-md-4 col-form-label text-md-end">{texts.Password}</label>
                        <div className="col-md-6">
                        <input type="password" value={data.password} onChange={e => setData('password', e.target.value)} />
                            {errors.password && <div className="invalid-feedback" role="alert">{errors.password}</div>}                     
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6 offset-md-4">
                          <div className="form-check">
                          <input type="checkbox" checked={data.remember} onChange={e => setData('remember', e.target.checked)} />
                            <label className="form-check-label" htmlFor="remember">
                              {texts.Remember_Me}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="col-md-8 offset-md-4">
                        <button type="submit" disabled={processing}>
                            {texts.Login}
                          </button>
                          @if (Route::has('password.request'))
                          <Link className="btn btn-link" href="password.request">
                            {texts.Forgot}
                          </Link>
                          @endif
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          @endsection
        </div>
      );
    }
    export default Login;

    if (document.getElementById('loginForm')) {
        const Index = ReactDOM.createRoot(document.getElementById("loginForm"));
    
        Index.render(
            <React.StrictMode>
                <Login/>
            </React.StrictMode>
        )
    }