import React, { Fragment } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Header from "./Header";
import './Home.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import programming from '../../images/imgHome/programming.png';
import programming2 from '../../images/imgHome/programming2.png';
import  programming3 from '../../images/imgHome/programming.jpg';
import logo from '../../images/imgHome/html-logo.png';
import logo1 from '../../images/imgHome/css-logo.png';
import logo2 from '../../images/imgHome/javascript-logo.png';
import logo3 from '../../images/imgHome/react-logo.png';
import logo4 from '../../images/imgHome/bootstrap-logp.png';
import logo5 from '../../images/imgHome/python.png';
import logo6 from '../../images/imgHome/Django-logo.png';
import logo7 from '../../images/imgHome/jquery-logo.png';
import logoo from '../../images/imgHome/ce-logo.png';
// import {FiDatabase} from 'react-icons/fi';
import { Container } from "react-bootstrap";
// import { BsArrowLeft } from "react-icons/bs";
// import { BsArrowRight } from "react-icons/bs";
const Home = () =>{
    return(
     <Fragment>
      <Header />

   {  /* section learning map */ }
    <section className="learning">
        <div className="container">
        <h1>Learning Map </h1>
        <div className="learn">
         <div className="row">
            <div className="col-md-6">
          <h3>1# Programming Courses</h3>
          <p>Here there are many courses that start \n with you from scratch so you can start with them</p>
            </div>
            <div className="col-md-6">
         <img src={programming} title="programming" style={{width:'550px', height:'300px' ,borderRadius:'20px'}}/>
            </div>
            </div>
      
            <div className="row">
            <div className="col-md-6">
         <img src={programming2} title="programming2" style={{width:'550px', height:'300px' ,borderRadius:'20px'}}/>
            </div>
            <div className="col-md-6">
          <h3>2# Problem Solving</h3>
          <p>After you have finished learning a programming language or a particular programming discipline, 
            you should test your understanding and comprehension of what you have learned. </p>
            </div>
            </div>
            <div className="row">
            <div className="col-md-6">
          <h3>3# Project work</h3>
          <p>After completing the programming specialization that you learned in the platform, you can now make projects to crown your effort,
             and you can send these projects to our group on Facebook to be evaluated by thousands of programmers.</p>
            </div>
            <div className="col-md-6">
         <img src={programming3} title="programming3" style={{width:'550px', height:'300px' ,borderRadius:'20px'}}/>
            </div>
           
            </div>
         </div>
        </div>
      </section>

      {  /* section courses */ }
      <section className="courses">
      <div className="container">
     <h1>courses </h1>
     
     <Carousel fade>
      <Carousel.Item>
        <div className="row">
            <div className="col-md-4 active">
            <Card.Link href="#" className="card " style={{ width: '25rem',height:'25rem' ,}}>
        <Card.Body>
          <Card.Title><main><h2><span>H</span>TML5</h2><img src={logo} title="logo" style={{width:'100px', height:'100px'}}/></main></Card.Title>
          <Card.Text>
          You will learn the HTML5 language with practical applications to be able to build a complete web structure,
           identify and know all the elements of HTML and differentiate between them.
          </Card.Text>
        </Card.Body>
      </Card.Link>
            </div>
            <div className="col-md-4">
            <Card.Link href="#" className="card " style={{ width: '25rem',height:'25rem' ,}}>
        <Card.Body>
          <Card.Title><main><h2><span>C</span>SS3</h2><img src={logo1} title="logo1" style={{width:'100px', height:'100px'}}/></main></Card.Title>
          <Card.Text>
          You will learn the CSS language with practical applications to be able to format and beautify
           any web page and add a lot of effects to the web page through the CSS.
          </Card.Text>
        </Card.Body>
      </Card.Link>  
            </div>
            <div className="col-md-4">
            <Card.Link href="#" className="card " style={{ width: '25rem',height:'25rem' }}>
        <Card.Body>
          <Card.Title><main><h2><span>J</span>avaScript</h2><img src={logo2} title="logo2" style={{width:'100px', height:'100px'}}/></main></Card.Title>
          <Card.Text>
          The JavaScript course is considered one of the most important programming languages and JavaScript
           is considered the most important step for you in the field of front end as well.
          </Card.Text>
        </Card.Body>
      </Card.Link>
            </div>
        </div>
          



      </Carousel.Item>
      <Carousel.Item>
      <div className="row">
            <div className="col-md-4">
            <Card.Link href="#" className="card " style={{ width: '25rem',height:'25rem' }}>
        <Card.Body>
          <Card.Title><main><h2><span>R</span>eact</h2><img src={logo3} title="logo3" style={{width:'100px', height:'100px'}}/></main></Card.Title>
          <Card.Text>
          React Library is commonly used in the construction of site interfaces
           where the main objective of the React Library was to deal with user interfaces in websites,
          </Card.Text>
        </Card.Body>
      </Card.Link>
            </div>
            <div className="col-md-4">
            <Card.Link href="#" className="card " style={{ width: '25rem',height:'25rem' }}>
        <Card.Body>
          <Card.Title><main><h2><span>B</span>ootstrap</h2><img src={logo4} title="logo4" style={{width:'100px', height:'100px'}}/></main></Card.Title>
          <Card.Text>
          Bootstrap is one of the most famous libraries used by website programmers ever,
         as the development of websites in its modern form no longer needs to write every movement of the site's pages.
          </Card.Text>
        </Card.Body>
      </Card.Link>  
            </div>
            <div className="col-md-4">
            <Card.Link href="#" className="card " style={{ width: '25rem',height:'25rem'}}>
        <Card.Body>
          <Card.Title><main><h2><span>P</span>ython</h2><img src={logo5} title="logo5" style={{width:'100px', height:'100px'}}/></main></Card.Title>
          <Card.Text>
          This course is aimed at completely novice people who want to learn Python to do many things whether websites,
           entering artificial intelligence, data analysis and others.
          </Card.Text>
        </Card.Body>
      </Card.Link>
            </div>
        </div>



      </Carousel.Item>
      <Carousel.Item>
      <div className="row">
            <div className="col-md-4">
            <Card.Link href="#" className="card " style={{ width: '25rem',height:'25rem' }}>
        <Card.Body>
          <Card.Title><main><h2><span>D</span>jango</h2><img src={logo6} title="logo6" style={{width:'100px', height:'100px'}}/></main></Card.Title>
          <Card.Text>
          You'll learn the Django framework completely, where you'll learn all the basics of the framework 
        so that you can do anything you imagine in the web and backend specifically, so this framework is primarily for programmers.
          </Card.Text>
        </Card.Body>
      </Card.Link>
            </div>
            <div className="col-md-4">
            <Card.Link href="#" className="card " style={{ width: '25rem',height:'25rem' }}>
        <Card.Body>
          <Card.Title><main><h2><span>J</span>Query</h2><img src={logo7} title="logo7" style={{width:'100px', height:'100px'}}/></main></Card.Title>
          <Card.Text>
          A JavaScript library, which shortens many duplicate scripts and known tasks, in order to facilitate programming, creating animations, handling events, and developing AJAX applications.
          jequery also provides capabilities for developers to create plug-ins on a JavaScript library.
          </Card.Text>
        </Card.Body>
      </Card.Link>  
            </div>
            <div className="col-md-4">
            <Card.Link href="#" className="card " style={{ width: '25rem',height:'25rem' }}>
        <Card.Body>
          <Card.Title><main><h2><span>C</span>#</h2><img src={logoo} title="logoo" style={{width:'100px', height:'100px'}}/></main></Card.Title>
          <Card.Text>
          It is a multi-style programming language that has a static profiling and is considered object-oriented, 
          and is a general-purpose language designed to develop applications on Microsoft basic operating systems.
          </Card.Text>
        </Card.Body>
      </Card.Link>
            </div>
        </div>

      </Carousel.Item>
    </Carousel>
   
        </div>
      </section>


      {/* section contact */}
      <section className="contact">
        <h1 className="h1"><span>L</span>et’s discuss your project</h1>
        <Form >
          <Container>
            <div className="formcontact">
      <Row>
        <Col>
          <Form.Control className="proj" placeholder="Name" style={{ backgroundColor:' rgb(46, 54, 124,0.5 )'}} />
        </Col>
        <Col>
        <Form.Group controlId="formGridEmail">
          <Form.Control className="proj" type="email" placeholder="Enter email" />
        </Form.Group>
        </Col>
        <Col>
          <Form.Control className="proj" placeholder="Phone" />
        </Col>
      </Row>
      <Row >
      <Col>
          <Form.Control className="proj" type="text" placeholder="Tell US About Your Project " style={{width:'900px',height:'80px'}}/>
        </Col>
      </Row>
      <Button className="but" type="submit">
        Submit
      </Button>
      </div>
      </Container>
    </Form>
      </section>


      {/* section */}
       <section className="About-us">
      <div className="container">
      <h1>About</h1>
        <div className="About">
          <div className="row">
           <div className="col-md-6">
            <div className="Glimpse" style={{borderRadius:'40px'}}>
              <p>It is a platform that was established with the aim of teaching programming online for free, this platform helps the student to
                 understand his programming material significantly, and there are many disciplines such as the Webfront End and Backend.</p>
            </div>
            </div>
            <div className="col-md-6">
              <div className="Glimpse1">
           <h2><span>N</span>umerous software disciplines</h2>
           <p>EDU offers many software specialties and you can browse
             the platform and choose the right specialization for you and study it for free.</p>
           </div>
           </div>
          </div>
        </div>
        </div>
      </section> 

      </Fragment>
    );
}
export default Home;