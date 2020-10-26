import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import Image from 'react-bootstrap/Image'
import { Row, Col } from 'reactstrap';
import './App.css';



const Footer = () => {
  return (
    <MDBFooter position="static" color="red" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <Col>
                <Row>
                  <Col></Col>
                  <Col>
                    <a href="https://www.facebook.com/arjen.koinzi"><Image src={require('./images/fbk.png')} width="30" height="30" /></a>
                  </Col>
                  <Col>
                    <a href="#"><Image src={require('./images/twitter.png')} width="30" height="30" /></a>
                  </Col>
                  <Col>
                    <a href="#"><Image src={require('./images/youtube.png')} width="30" height="30" /></a>
                  </Col>
                  <Col></Col>
                </Row>
              </Col>
              &copy; {new Date().getFullYear()} Copyright
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;