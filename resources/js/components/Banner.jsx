import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import logo from '../../assets/img/movifpsostenible_v2.jpg'
function Banner() {

    return (
        <Container  >
            <image src={{logo}} alt='imagen del logo'width='100%' hei
            th='100%' 
            ></image>        
      </Container>
    )
  
}
export default Banner;


  if (document.getElementById('Banner')) {
      const Index = ReactDOM.createRoot(document.getElementById("Banner"));
  
      Index.render(
          <React.StrictMode>
              <Banner/>
          </React.StrictMode>
      )
  }
