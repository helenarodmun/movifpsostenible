import texts from '../textos/es.json';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { usePage } from '@inertiajs/react';
import { Dropdown } from 'bootstrap';



function Nav() {
  const { auth } = usePage().props;
  return (  
    <>
      {auth.user == null &&
        <>
          <li className="nav-item">
            <a className="nav-link mx-2 active bi bi-door-open" href="login">{texts.Login}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2 bi bi-check-circle" href="register">{texts.Sign_up}</a>
          </li>
        </>
      }
      {auth.user != null &&
        <>
          <Dropdown>
            <Dropdown.Toggle variant='dark' id='dropdown-basic'>
              {auth.user.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href='#' className='bi bi bi-car-front'>{texts.My_rides}</Dropdown.Item>
              <Dropdown.Item href='#' className='bi bi bi-chat'>{texts.Messages}</Dropdown.Item>
              <Dropdown.Item href='#' className='bi bi bi-credit-card'>{texts.Payments}</Dropdown.Item>
              <Dropdown.Item href='#' className='bi bi bi-person-circle'>{texts.Profile}</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href='logout' className='bi bi bi-door-closed'>{texts.Logout}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      }
      </>
      )
    }

    export default Nav;

    if (document.getElementById('nav')) {
        const Index = ReactDOM.createRoot(document.getElementById("nav"));
    
        Index.render(
            <React.StrictMode>
                <Nav/>
            </React.StrictMode>
        )
    }