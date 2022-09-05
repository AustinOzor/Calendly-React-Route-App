import React from 'react';
import appStore from '../routes/images/appStore.jpg'
import download1 from '../routes/images/store.jpg'
import Image from 'react-bootstrap/esm/Image';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const Footer = () => {
    return (
        <>
           <Container  className='footer'>
                <Row>
                    <Col md={4}>
                    <h3 className='footer--h3'>
                    Easy <br></br>
                    <span className="ehead">ahead</span>
                    </h3>
                    <p className='footer--p'>We take the work out of connecting with<br></br>
                        others so you can accomplish more.</p>
                      
                       <Form.Select aria-label="Default select example" className='form'>
                        <option value="1">English</option>
                        <option value="2">French</option>
                        <option value="3">Espanol</option>
                        <option value="3">Deutsch</option>
                        <option value="3">Portugues</option>
                        </Form.Select>
                        
                   
                        <div    className="footer-logo">
                        <Image className='footer--img' src={appStore} width="126px" alt="apple logo"/>
                        <Image className='footer--img' src={download1} width="126px" alt="googleplay"/>
                        </div>
                    <div className="social-icons" >
                    <Link to="/"><i className="fa-brands fa-twitter footer--i"></i></Link>
                    <Link to="/"><i className="fa-brands fa-facebook-f footer--i"></i></Link>
                    <Link to="/"><i className="fa-brands fa-instagram footer--i"></i></Link>
                    <Link to="/"><i className="fa-brands fa-linkedin-in footer--i"></i></Link>
                    <Link to="/"><i className="fa-brands fa-youtube footer--i"></i></Link>
                    </div>
                     <span className='copyright'>Copyright Calendly 2022</span>
                    </Col>
                    <Col md={3} className='foot--nav'>           
                        <ul >
                            <h4>About</h4>
                            <li><Link to="/" className='foot--links'>About Calendley</Link></li>
                            <li><Link to="/" className='foot--links'>Contact Sales</Link></li>
                            <li><Link to="/" className='foot--links'>Newsroom</Link ></li>
                            <li><Link to="/" className='foot--links'>Careers</Link></li>
                            <li><Link to="/" className='foot--links'>Security</Link></li>
                        </ul>
                        <ul>
                            <h4>Support</h4>
                            <li> <Link to="/" className='foot--links'>Help Center</Link></li>
                            <li><Link to="/" className='foot--links'>Video Tutorials</Link></li>
                            <li><Link to="/" className='foot--links'>Cookies Settings</Link></li>
                        </ul>
                    </Col>
                    <Col md={3} className='foot--nav'>           
                        <ul >
                            <h4>Solutions</h4>
                            <li><Link to="/" className='foot--links'>Customer Service</Link></li>
                            <li><Link to="/" className='foot--links'>Sales</Link></li>
                            <li><Link to="/" className='foot--links'>Recruiting</Link ></li>
                            <li><Link to="/" className='foot--links'>Information Technology</Link></li>
                            <li><Link to="/" className='foot--links'>Marketing</Link></li>
                        </ul>
                        <ul>
                            <h4>Add-Ons</h4>
                            <li> <Link to="/" className='foot--links'>Download for Chrome</Link></li>
                            <li><Link to="/" className='foot--links'>Download for Firefox</Link></li>
                            <li><Link to="/" className='foot--links'>Cookies Settings</Link></li>
                        </ul>
                    </Col>
                    <Col md={2} className='foot--nav'>           
                        <ul >
                            <h4>Popular Features</h4>
                            <li><Link to="/" className='foot--links'>Embed Calendar</Link></li>
                            <li><Link to="/" className='foot--links'>Availability</Link></li>
                            <li><Link to="/" className='foot--links'>Sending Notifications</Link ></li>
                            <li><Link to="/" className='foot--links'>Using Calendly Mobile</Link></li>
                        </ul>
                        <ul>
                            <h4>Developers Tools</h4>
                            <li> <Link to="/" className='foot--links'>Developers Tools</Link></li>
                            
                        </ul>
                    </Col>
               </Row>
            </Container>  
        </>
    );
}

export default Footer;
