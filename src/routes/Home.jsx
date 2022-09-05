import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/esm/Image';
import headerImage from '../routes/images/header.jpg'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom'
import compass from '../routes/images/Compass.svg'
import ebay from '../routes/images/ebay.svg'
import drop from '../routes/images/drop.svg'
import lazboy from '../routes/images/Lazboy.svg'
import twilio from '../routes/images/twilio.svg'
import loreal from '../routes/images/loreal.svg'
import lyft from '../routes/images/lyft.svg'
import ancestry from '../routes/images/ancestry1.svg'
import zendesk from '../routes/images/Zendesk.png'
import workflow from '../routes/images/workflow.jpg'
import timeanddate from '../routes/images/timeanddate.jpg'
import events from '../routes/images/events.jpg'
import Card from 'react-bootstrap/Card';


import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


function Home (){
    return (
        <>
        <Container className="header" >
            <Row className='header--row'>
                <Col md={5} data-aos="fade-down"  data-aos-duration="2500">
                    <h1 className="text-justify easy title">
                    Easy <br></br>scheduling <br></br>
                    <span id='ahead'>ahead</span>
                    </h1>
                    <p className="header--p">Calendly is your hub for scheduling meetings<br></br>
                     professionally and efficiently, eliminating the hassle<br></br> of back-and-forth emails so you
                    can get back to work.</p>
                                
                 <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                             <Form.Control type="email" placeholder="Enter your email" className="sign--up" />
                             <p style={{color:"rgb(71, 103, 136)"}}>Create your free account. No credit card required.</p>
                                <Button variant="primary" type="submit" className="signup--btn"
                                    style={{ fontWeight: "500", fontSize: "1.2rem",padding:"10px" }}>Sign up</Button>
                        </Form.Group>
                        </Form>
                </Col>
            <Col md={7} data-aos="fade-up" data-aos-duration="2500" >
                        <Image src={headerImage} className="header--image fluid" />
                
            </Col>
              </Row>
        </Container>
         <Container fluid data-aos="fade-up">
                  
                <Row className='brands mt-5'
                    data-aos="fade-down"
                    data-aos-duration="2500"
                    data-aos-delay="300"  
                >
                 <h2 class="schedule">Simplified scheduling for more than<br></br>
                  <span id="thousand">  10,000,000 </span>
                        users worldwide</h2>
                    <Col className="effect">
                    
                        <Image  className='brand--logo scrolling' aria-hidden="true" src={compass} />
                        <Image  className='brand--logo scrolling' aria-hidden="true" src={drop}/>
                        <Image  className='brand--logo scrolling' aria-hidden="true" src={lazboy}/>
                        <Image  className='brand--logo scrolling' aria-hidden="true" src={ebay}/>
                        <Image  className='brand--logo scrolling' aria-hidden="true" src={twilio}/>
                        <Image  className='brand--logo scrolling' aria-hidden="true" src={loreal}/>
                        <Image  className='brand--logo scrolling' aria-hidden="true" src={lyft}/>
                        <Image  className='brand--logo scrolling' aria-hidden="true" src={ancestry}/>
                        <Image  className='brand--logo scrolling' aria-hidden="true" src={zendesk}/>
              
                </Col>
            </Row>
            </Container>
      
        {/* GET BOOKED */}
        <Container>
            <Row className="getbooked" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2500" data-aos-delay="500">
                    <h3 className="gstart">We make it easy to get started</h3>
               <Col md={3}>
                   <Card style={{ width: '20rem', height:"100%" }}>
                        <Card.Body className="card--body">
                        <i class="fa-regular fa-circle-check fa-2x"></i>
                        <Card.Title className="card--title">Create simple rules</Card.Title>
                        <Card.Text className="card--text"> Let Calendly know your availability preferences and it will do the work for you.</Card.Text>
                    </Card.Body>
                  </Card>
               </Col>
               <Col md={3}>
                <Card style={{ width: '20rem', height:"100%" }}>
                        <Card.Body className="card--body">
                        <i class="fa-regular fa-circle-check fa-2x"></i>
                        <Card.Title className="card--title">Share your link</Card.Title>
                        <Card.Text className="card--text"> Send guests your Calendly link or embed it on your website.</Card.Text>
                        
                    </Card.Body>
                  </Card>
               </Col>
             <Col md={3}>
                <Card style={{ width: '20rem', height:"100%" }}>
                        <Card.Body className="card--body">
                        <i class="fa-regular fa-circle-check fa-2x"></i>
                        <Card.Title className="card--title">Get booked</Card.Title>
                        <Card.Text className="card--text">
                        They pick a time and the event is added to your calendar.
                        </Card.Text>
                    
                    </Card.Body>
                </Card>
             </Col>
            </Row>
            </Container>

            {/* SCHEDULING */}
         <Container fluid  className="schedule--section" data-aos="zoom-in"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2500" data-aos-delay="400">
                <Row>
                    <h2 className="scheduling--title">Scheduling for any meeting type</h2>
                </Row>
            <Row className="schedule--grid">
               <Col md={4}>
                   <Card className="schedule--gridcard" style={{ width: '100%', height:"13rem" }}>
                            <Card.Body className="card--schedule">
                                <i className="fa-solid fa-people-arrows-left-right fa-2x" />
                            <Card.Title className="card--title">One-on-One</Card.Title>
                            <Card.Text className="card--text">
                            Let your clients and colleagues select open meeting types from your schedule.
                            </Card.Text>
                        
                          </Card.Body>
                    </Card>
                </Col> 
               <Col md={4}>
                  <Card className="schedule--gridcard" style={{ width: '100%', height:"13rem" }}>
                            <Card.Body className="card--schedule">
                            <i class="fa-solid fa-people-group fa-2x"></i>
                            <Card.Title className="card--title">Group</Card.Title>
                            <Card.Text className="card--text">
                            Book events for multiple attendees such as webinars and training sessions.
                            </Card.Text>
                        
                        </Card.Body>
                     </Card>
                </Col> 
               <Col md={4}>
                    <Card className="schedule--gridcard" style={{ width: '100%', height:"13rem" }}>
                        <Card.Body className="card--schedule">
                            <i class="fa-solid fa-users-line fa-2x"></i>
                            <Card.Title className="card--title">Collective</Card.Title>
                            <Card.Text className="card--text">
                            Schedule <span style={{ color: "rgb(71, 103, 136)", fontWeight: "bolder" }}>across your team’s calendars</span> for events you
                            <span style={{ color: "rgb(71, 103, 136)", fontWeight: "bolder" }}>co-host</span> with others.
                            </Card.Text>
                    
                        </Card.Body>
                    </Card>
                            </Col> 
               <Col md={4}>
                  <Card className="schedule--gridcard" style={{ width: '100%', height:"13rem" }}>
                          <Card.Body className="card--schedule">
                           <i class="fa-solid fa-users-viewfinder fa-2x"></i>
                            <Card.Title className="card--title">Round robin</Card.Title>
                            <Card.Text className="card--text">
                            Balance hosting responsibilities for your team automatically.
                            </Card.Text>
                    
                         </Card.Body>
                    </Card>
                 </Col> 
            </Row>    
            </Container>
            

             {/* SOLUTIONS  */}
        <Container fluid className="solutions" data-aos="zoom-in"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2500" data-aos-delay="400">
                <Row className="">
                    <p className="s--p">Solution</p>
                    <h3 className='solution--h3'>The right Calendly for the work you do</h3>
                </Row>     
                 <Row className="solution--grid">
               <Col md={3}>
                   <Card className='solution-card' style={{ width: '21rem', height:"100%" }}>
                       <Card.Body className="card--solution">
                           <i class="fa-brands fa-salesforce fa-2x"></i>
                            <Card.Title className="card--title">Sales</Card.Title>
                            <Card.Text className="card--text">
                                    Spend more time selling, and less time on admin. Shorten your sales cycle by
                                    letting prospects schedule while they’re in peak buying mode. 
                                </Card.Text>
                               <Link className="learnmore" to="/login" >Learn More <i class="fa-solid fa-caret-right"></i></Link>
                          </Card.Body>
                    </Card>
                </Col> 
               <Col md={3}>
                   <Card className='solution-card' style={{ width: '21rem', height:"100%" }}>
                       <Card.Body className="card--solution">
                           <i class="fa-solid fa-bolt-lightning fa-2x"></i>
                            <Card.Title className="card--title">Marketing</Card.Title>
                            <Card.Text className="card--text">
                           Convert interested prospects into scheduled meetings and demos faster. Skip steps that cause customer friction.
                            </Card.Text>
                            <Link className="learnmore" to="/login" >Learn More <i class="fa-solid fa-caret-right"></i></Link>
                          </Card.Body>         
                    </Card>
                </Col> 
               <Col md={3}>
                  <Card className='solution-card' style={{ width: '21rem', height:"100%" }}>
                            <Card.Body className="card--solution">
                             <i class="fa-solid fa-users-rays fa-2x"></i>
                            <Card.Title className="card--title">Customer Success</Card.Title>
                            <Card.Text className="card--text">
                           Offer exceptional support: Your clients will be delighted with one-click scheduling and increased responsiveness. 
                            </Card.Text>
                             <Link className="learnmore" to="/login" >Learn More <i class="fa-solid fa-caret-right"></i></Link>
                        </Card.Body>         
                     </Card>
                </Col> 
               <Col md={3}>
                    <Card className='solution-card' style={{ width: '21rem', height:"100%" }}>
                            <Card.Body className="card--solution">
                             <i class="fa-solid fa-chart-line fa-2x"></i>
                            <Card.Title className="card--title">Revenue Operations</Card.Title>
                            <Card.Text className="card--text">
                                    Streamline meeting and activity data. Calendly’s native integrations
                                    with Salesforce and HubSpot ensure up-to-date reporting. 
                            </Card.Text>
                            <Link className="learnmore" to="/login" > Learn More <i class="fa-solid fa-caret-right"></i></Link> 
                        </Card.Body>
                    </Card>
                            </Col> 
               <Col md={3}>
                  <Card className='solution-card' style={{ width: '21rem', height:"100%" }}>
                          <Card.Body className="card--solution">
                          <i class="fa-solid fa-users-line fa-2x"></i>
                            <Card.Title className="card--title">Recruiting</Card.Title>
                            <Card.Text className="card--text">
                                    Simplify recruitment by smoothing every aspect of the interview
                                    scheduling process, including automated follow-ups.
                            </Card.Text>
                            <Link className="learnmore" to="/login" >Learn More <i class="fa-solid fa-caret-right"></i></Link>
                         </Card.Body>         
                    </Card>
                 </Col> 
               <Col md={3}>
                  <Card className='solution-card' style={{ width: '21rem', height:"100%" }}>
                          <Card.Body className="card--solution">
                           <i class="fa-solid fa-laptop-code fa-2x"></i>
                            <Card.Title className="card--title">Information Technology</Card.Title>
                            <Card.Text className="card--text">
                                    Increase scheduling productivity across your org while
                                    maintaining full security and control over users.
                            </Card.Text>
                             <Link className="learnmore" to="/login" >Learn More <i class="fa-solid fa-caret-right"></i></Link>
                         </Card.Body>         
                    </Card>
                 </Col> 
            </Row>    
        </Container>
         <Container className='best-section'>
                        <div style={{paddingBottom:"5rem"}} data-aos="fade-up"
                            data-aos-anchor-placement="bottom-center">
                            <h2 className='best'>Do more of what you do best</h2>
                            <p className='best-p'>With scheduling hassles and interruptions gone, your day is cleared for accomplishment.</p>
                        </div>
                
             <Row className='best-row' style={{paddingTop:"10rem"}}>
                <Col md={5}
                            data-aos="zoom-out"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="400"
                            >  
                            <div>
                            <h6 className='best-h6'>WORKFLOW MANAGEMENT</h6>
                            <h2 className='best-h2'>Automate reminders and follow-ups</h2>
                            </div> 
                            <p className='workflow'>
                            Calendly puts your entire meeting workflow on autopilot, sending everything
                            from reminder emails to thank you notes, so you can focus on the work only you can do.
                            It’s like getting an assistant, even if you’re a business of one.
                            </p>
                </Col>    
                 <Col md={5}>
                            <Image src={workflow} className="workflow--image"
                            data-aos="zoom-in"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="400"
                                />    
                </Col>    
            </Row>   
        </Container>
         <Container data-aos="fade-up"
                               data-aos-duration="3000"
                             data-aos-easing="ease-in-sine"
                            data-aos-delay="200">
             <Row className='timeanddate-row' style={{paddingTop:"10rem"}}>
                  
                 <Col md={5}>
                            <Image src={timeanddate} className="timeanddate--image"/>
                
                            
                                 
                    </Col>  
                <Col md={5}>
                           
                            <div>
                            <h6 className='best-h6'>ON-DEMANDING SCHEDULING</h6>
                            <h2 className='best-h2'>Make more connections and reduce cancellations</h2>
                            </div> 
                            <p className='workflow'>
                            Prospects can schedule meetings in just a few clicks – whenever the moment is right.
                            And cancellations go down because rescheduling is easy, fast, and on their terms.
                            </p>
                </Col>      
            </Row>   
        </Container>
         <Container className='events' data-aos="fade-up"
                               data-aos-duration="3000"
                             data-aos-easing="ease-in-sine"
                            data-aos-delay="100">
             <Row className='timeanddate-row' style={{paddingTop:"10rem"}}>
                <Col md={5}>
                           
                            <div>
                            <h6 className='best-h6'>THE COURTEOUS APPROACH</h6>
                            <h2 className='best-h2'>Delight invitees with modern scheduling</h2>
                            </div> 
                            <p className='workflow'>
                            Time is a precious commodity. Calendly is the courteous way to book meetings
                            and other appointments, because scheduling with just a few clicks makes the most of everyone's time.
                            </p>
                </Col> 
                 <Col md={5}>
                            <Image src={events} className="timeanddate--image"/> 
                 </Col>      
            </Row>   
       </Container>
        <Container className="trial" fluid>
                <Row>
                 <div>
                        <h2 className='try-h2'>Try Calendly for free</h2>   
                        <p className='try-p'>After your 14-day trial of our Teams plan, enjoy the Free version of Calendly – forever.</p>   
                </div>
                <Col className="try">
                        <Button to='/' className="btn-primary startfree--btn" style={{fontSize:"1.2rem", padding:"11px"}}>Start for free</Button>
                    </Col>'
                    <p className='try-p2'>To inquire about our Enterprise plans, click <Link to='/' className='try-link'>here</Link> </p>
'
                </Row>     
            </Container>
           
        </>
    );
}

export default Home;
