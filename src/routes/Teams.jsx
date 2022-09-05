import React from 'react';
import Image from 'react-bootstrap/esm/Image';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import team from '../routes/images/team.png'
import availability from '../routes/images/availability.png'
import meeting from '../routes/images/meeting.png'
import discovery from '../routes/images/discovery.png'
import consistency from '../routes/images/consistency.png'
// import Ratio from 'react-bootstrap/Ratio';
// import video from '../routes/images/video.mp4';

function Individual () {
    return (
        <>
        <Container style={{marginTop:"11rem"}} >
             <Row className="individual"> 
                 <Col md={5}>
                        <div className="individual--div">
                     <h6 className='team--h6'>CALENDLY FOR TEAMS</h6>
                     <h2  className="individual--h2">
                       Smarter scheduling for teams
                        </h2>
                      <p id="aheadp" className="header--p pt-2 pb-3 text-nowrap">
                                Whether your team’s performance is measured by<br />
                                sales revenue,
                                recruiting pipeline, or customer<br/> retention, scheduling
                                automation enables your<br/> team to hit goals faster.
                            </p>
                            <div className='teams-button'>
                                <Button type="submit" variant='primary'
                                    style={{ fontWeight: "500", fontSize: "1.2rem", padding: "10px", marginBottom:"2rem" }}>
                                    Sign up for free
                                </Button>
                                <Button type="submit" variant='outline-primary'
                                    style={{
                                        fontWeight: "500", fontSize: "1.2rem",
                                        padding: "10px", marginBottom: "2rem",
                                        outline: "1px solid rgb(0, 107, 255)"
                                    }}>
                                    Contact Sales
                                </Button>
                                
                            </div>
                 </div>
                 </Col>
                 <Col md={7}>
                    <Image src={team} className="individual--image"/>
                    </Col> 
            </Row>   
        </Container>
        <Container fluid style={{marginTop:"2.5rem"}} className="team--section">
                <Row className="booking--row"> 
                 
                  <Col md={4}
                            data-aos="zoom-out"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="400"
                            >  
                            <div className="booking--content">
                            <h6 className='booking--h6'>SPEED CONNECTION</h6>
                            <h2 className='booking--h2'>Outperform the competition with faster connections</h2>
                            </div> 
                            <p className='booking'>
                            You can’t waste time when prospects, clients, and candidates express interest.
                            Avoid missed opportunities by automatically qualifying and routing website
                            visitors to specific team members. You can also pool scheduling availabilit
                            y together to offer more options to connect.
                        </p>
                         
                    </Col>    
                    <Col md={5}data-aos="zoom-in"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="500">
                    <Image src={availability} className="booking--image"/>
                    </Col> 
               </Row>   
       </Container>
        <Container fluid style={{marginTop:"4rem"}}>
                <Row className="booking--row"> 
                    <Col md={5}data-aos="zoom-in"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="500">
                    <Image src={meeting} className="booking--image"/>
                    </Col> 
                    <Col md={4}
                            data-aos="zoom-out"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="500"
                            >  
                            <div className="booking--content">
                            <h6 className='booking--h6'>TIME MANAGEMENT</h6>
                            <h2 className='booking--h2'>Automate scheduling, improve team performance</h2>
                            </div> 
                            <p className='booking'>
                            Scheduling automation eliminates time-consuming admin tasks so your
                            team can focus on higher priorities. With actionable insights into
                            your team’s scheduling activities and integrations with your team’s
                            favorite tools, you can identify potential process improvements and
                            empower your team to work more efficiently.
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
                            <h6 className='booking--h6'>TEAM STANDARDIZATION</h6>
                            <h2 className='booking--h2'>Improve the customer experience with consistent scheduling</h2>
                            </div> 
                            <p className='booking'>
                            Managed Events let you assign and lock Event Type details
                            — such as meeting descriptions, invitee questions, and
                            notifications — so your team delivers a reliable and professional experience every time.
                        </p>
                         
                    </Col>    
                     <Col md={5}data-aos="zoom-in"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="400">
                    <Image src={discovery} className="booking--image"/>
                    </Col> 
            </Row>   
        </Container>
        <Container fluid style={{marginTop:"8rem"}}>
                <Row className="booking--row"> 
                    <Col md={5}data-aos="zoom-in"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="500">
                        <Image src={consistency} className="booking--image"/>
                    </Col> 
                    <Col md={4}
                            data-aos="zoom-out"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="500"
                            >  
                            <div className="booking--content">
                            <h6 className='booking--h6'>CONSISTENCY IN EXECUTION</h6>
                            <h2 className='booking--h2'>Streamline communications across the meeting lifecycle</h2>
                            </div> 
                            <p className='booking'>
                            From pre-call email questionnaires and confirmation texts to post-call
                            follow-up links, meeting best practices can be automatically applied
                            across your team. These templates and workflows increase engagement and
                            ensure consistent, professional communications with your customers and candidates.
                        </p>
                         
                    </Col>    
                     
            </Row>   
            </Container>
            
            <Container className="trial smart--scheduling" fluid
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                 data-aos-easing="ease-in-sine"
                data-aos-delay="300"    
            >
                <Row>
                 <div>
                        <h2 className='smart-h2'>Smarter scheduling for teams</h2>   
                        <p className='smart-p'>Get started on the scheduling automation platform that enables teams to hit <br/>goals faster.</p>   
                </div>
                <Col className="try">
                        <Button to='/' className="btn-primary startfree--btn" style={{fontSize:"1.2rem", padding:"14px"}}>Start for free</Button>
                        <Button to='/' variant="outline-primary"  style={{fontSize:"1.2rem", padding:"11px",color:"white"}}>Talk with Sales</Button>
                    </Col>
                </Row>     
            </Container>
           
        </>
    );
}

export default Individual;
