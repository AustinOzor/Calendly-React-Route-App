import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import logo from '../routes/images/logo.png'
import Image from 'react-bootstrap/esm/Image';
import l1 from '../routes/images/l1.png'
import l2 from '../routes/images/l2.png'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
function Navbars() {
    const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
  return (
    <>
    
    <Navbar fixed="top" bg="light" className='nav  mb-5' collapseOnSelect expand="lg"  style={{color:"#ccc"}}>
      <Container>
          <Navbar.Brand><Link to="/home">
            <Image src={logo} style={{width:"auto", height:"60px"}} className="nav--logo"/>
          </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navlinks" >
            <Nav.Link><Link className="links" to="/individual">Individual</Link></Nav.Link>
            <Nav.Link><Link className="links" to="/teams">Teams</Link></Nav.Link>
            <Nav.Link><Link className="links" to="/enterprise">Enterprise</Link></Nav.Link>
            <NavDropdown className='links' title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link><Link className="links" to="/teams">Pricings</Link></Nav.Link>

            <NavDropdown className='links' title="Resources" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              </NavDropdown>           
          </Nav>
          <Nav>
            <Nav.Link><Link to="/login" className="links" >Log In</Link></Nav.Link>
            <Button type="submit" className='btn-primary' size="sm" onClick={handleShow}  >Get Started</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      
     <Modal show={show} onHide={handleClose} animation={false} className="modal" >
        <Modal.Header closeButton >
        </Modal.Header>
         <h6 className="modal-title" style={{textAlign:"center"}}>Get Stared Today</h6>
         <Modal.Body>
         <Form className='modal-form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter your email" style={{padding:"17px"}}/>
            <Button type="submit" className='btn-primary modal-btn' size="lg">Get Started</Button>
            </Form.Group>
            <p style={{textAlign:"center"} }>OR</p>
            <Button className="modal-btn" variant="outline-dark" type="submit" size="lg">Sign Up with Google <Image src={l1} style={{ width: "60px", height: "45px" }}/></Button>
            <Button className="modal-btn" variant="outline-dark" type="submit" size="lg">Sign Up with Microsoft <Image src={l2} style={{ width: "60px", height: "45px" }} /></Button>
          </Form>       
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default Navbars;
