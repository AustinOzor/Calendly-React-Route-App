import React from 'react';
import Image from 'react-bootstrap/esm/Image';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import individualhero from '../routes/images/individual.png'
import zach from '../routes/images/zach.png'
import calendar from '../routes/images/calendar.png'
import createworkflow from '../routes/images/createworkflow.png'
import payments from '../routes/images/payments.png'
import clients from '../routes/images/clients.png'
// import Ratio from 'react-bootstrap/Ratio';
// import video from '../routes/images/video.mp4';

function Individual () {
    return (
        <>
        <Container style={{marginTop:"11rem"}} >
             <Row className="individual"> 
                 <Col md={5}>
                 <div className="individual--div">
                     <h2  className="individual--h2">
                      The genius way to work
                     <span className="individual--span"> better</span>
                        </h2>
                      <p id="aheadp" className="header--p pt-2 pb-3 text-nowrap">
                        Calendly makes it easy to work smarter when<br/> you’re
                        working solo. Meetings, sessions, and <br/>appointments
                        become more efficient ways to<br/> achieve success and
                        accomplish goals.
                            </p>
                            <Button type="submit" variant='primary'
                                style={{ fontWeight: "500", fontSize: "1.2rem", padding: "10px", marginBottom:"2rem" }}>
                                Sign up for free
                            </Button>
                 </div>
                 </Col>
                 <Col md={7}>
                    <Image src={individualhero} className="individual--image"/>
                    </Col> 
            </Row>   
        </Container>
        <Container fluid style={{marginTop:"2.5rem"}} className="booking--section">
                <Row className="booking--row"> 
                  <Col md={5}data-aos="zoom-in"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="500">
                    <Image src={zach} className="booking--image"/>
                    </Col> 
                  <Col md={4}
                            data-aos="zoom-out"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="400"
                            >  
                            <div className="booking--content">
                            <h6 className='booking--h6'>THE CALENDLY BOOK LINK</h6>
                            <h2 className='booking--h2'>Save time with your own <br/>personalized booking links</h2>
                            </div> 
                            <p className='booking'>
                            Time is a precious commodity. Calendly is the courteous way to book meetings
                            and other appointments, because scheduling with just a few clicks makes the
                            most of everyone’s time.
                        </p>
                         <Button type="submit" variant='primary'
                                style={{ fontWeight: "500", fontSize: "1.2rem", padding: "12px", marginBottom:"2rem" }}>
                                Get Your Link
                         </Button>
                </Col>    
               
            </Row>   
        </Container>
        <Container fluid style={{marginTop:"4rem"}}>
                <Row className="booking--row"> 
                    <Col md={4}
                            data-aos="zoom-out"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="500"
                            >  
                            <div className="booking--content">
                            <h6 className='booking--h6'>A CURATED CALENDAR</h6>
                            <h2 className='booking--h2'>Book up efficiently</h2>
                            </div> 
                            <p className='booking'>
                            When invitees select a meeting slot from your schedule, they only see the times
                            you’re available, and only the length and type of meeting you want to have.
                            Your schedule fills up efficiently, and everyone avoids excess email exchanges.
                        </p>
                         <Link to="/" type="submit" variant='primary' className="calendar--links">
                            Learn More  <i class="fa-light fa-greater-than"></i>
                         </Link>
                    </Col>    
               <Col md={5}data-aos="zoom-in"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="500">
                    <Image src={calendar} className="booking--image"/>
                    </Col> 
            </Row>   
        </Container>
        <Container fluid style={{marginTop:"8rem"}}>
                <Row className="booking--row"> 
                     <Col md={5}data-aos="zoom-in"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="400">
                    <Image src={createworkflow} className="booking--image"/>
                    </Col> 
                    <Col md={4}
                            data-aos="zoom-out"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="500"
                            >  
                            <div className="booking--content">
                            <h6 className='booking--h6'>AUTOMATED NOTIFICATIONS & FOLLOW-UPS</h6>
                            <h2 className='booking--h2'>Work like you have a personal assistant</h2>
                            </div> 
                            <p className='booking'>
                            Because Calendly automates administrative tasks like sending reminder
                            emails and follow-ups, you can focus on the work that builds your
                            business and brings customers back for more.
                        </p>
                         <Link to="/" type="submit" variant='primary' className="calendar--links">
                            Learn More  <i class="fa-light fa-greater-than"></i>
                         </Link>
                    </Col>    
              
            </Row>   
        </Container>
        <Container fluid style={{marginTop:"8rem"}}>
                <Row className="booking--row"> 
                    <Col md={4}
                            data-aos="zoom-out"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="500"
                            >  
                            <div className="booking--content">
                            <h6 className='booking--h6'>COLLECT PAYMENT</h6>
                            <h2 className='booking--h2'>Erase billing hassles</h2>
                            </div> 
                            <p className='booking'>
                            Stripe and PayPal integrations enable your clients to submit payment
                            as soon as they schedule a meeting. You get paid on time, every time,
                            without dealing with bills or invoices.
                        </p>
                         <Link to="/" type="submit" variant='primary' className="calendar--links">
                            Learn More  <i class="fa-light fa-greater-than"></i>
                         </Link>
                    </Col>    
                     <Col md={5}data-aos="zoom-in"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="500">
                        <Image src={payments} className="booking--image"/>
                    </Col> 
            </Row>   
            </Container>
            <Container fluid style={{marginTop:"8rem"}} >
                <Row className="booking--row"> 
                     <Col md={5}data-aos="zoom-in-"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="500">
                    <Image src={clients} className="booking--image"/>
                    </Col> 
                    <Col md={4}
                            data-aos="zoom-up"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="300"
                            >  
                            <div className="booking--content">
                            <h6 className='booking--h6'>AUTOMATED NOTIFICATIONS & FOLLOW-UPS</h6>
                            <h2 className='booking--h2'>Retain more clients</h2>
                            </div> 
                            <p className='booking'>
                            Happy clients are long-term clients. With Calendly, prospects can schedule
                            with you instantly so no one slips through the cracks, and everything about
                            your interaction is personal, professional, and respectful of their time.
                        </p>
                         
                    </Col>    
              
            </Row>   
            </Container>
            <Container className="trial" fluid
                data-aos="fade-in"
                data-aos-anchor-placement="center-bottom"
                 data-aos-easing="ease-in-sine"
                data-aos-delay="400"    
            >
                <Row>
                 <div>
                        <h2 className='try-h2'>Do more with our integrations</h2>   
                        <p className='try-p'>A Smart scheduling will change the way you – and your tools – work</p>   
                </div>
                <Col className="try">
                        <Button to='/' className="btn-primary startfree--btn" style={{fontSize:"1.2rem", padding:"14px"}}>View all</Button>
                        <Button to='/' variant="outline-primary"  style={{fontSize:"1.2rem", padding:"11px",}}>Start for free</Button>
                    </Col>
                </Row>     
            </Container>
            <Container fluid style={{ backgroundColor: "#ccc", padding: "5rem" }}
                       data-aos="fade-up"
                        data-aos-easing="ease-in-sine"
                       data-aos-anchor-placement="center-bottom"
                       data-aos-delay="500"  
                     >
                <Row style={{}}>
                    <h6 className="work--h6">HOW IT WORKS</h6>
                    <h3 className="work--h3">See Calendly in action</h3>
                    <p className="work--p">With scheduling hassles and interruptions gone, your day is cleared for <br/> accomplishment.</p>
                </Row>
                <Row>
                 {/* <Ratio>
                     <video src={video} type="video/mp4" aspectRatio={4/3}/> 
                 </Ratio> */}
                </Row>
            </Container>
        </>
    );
}

export default Individual;
