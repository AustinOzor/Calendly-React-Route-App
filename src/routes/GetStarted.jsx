import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
function GetStarted() {
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
    return (
        <>
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
         <Modal.Body>
         <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Button type="submit" className='btn-primary' size="lg">Get Started</Button>
            </Form.Group>
            <p>Or</p>
            <Button variant="primary" type="submit" size='lg'>Sign Up with Google</Button>
            <Button variant="primary" type="submit" size='lg'>Sign Up with Microsoft</Button>
            </Form>       
        </Modal.Body>
        
      </Modal>
       
            </>
    );
}

export default GetStarted;
