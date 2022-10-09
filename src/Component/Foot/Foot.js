import React from "react";
import './Foot.css';
import { Footer, Container, Row, Col, Icon } from 'react-bootstrap';
import logo from './../../images/imgHome/logo2.png';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {FaYoutube} from 'react-icons/fa';


const Foot = () =>{
    return(
                 <footer >
      <section className='footer1'>
        <Container className='text-center text-md-start mt-5'>
          <Row >
            <Col md="4">
              <h4><span>E</span>DU Platform for Education</h4>
              <img src={logo} title="logo"/> 
              <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.</p>
            </Col>

            <Col md="4 text-center">
              <div className='menu'>
              <h6 >Site Menu</h6>
              <p><a href='#!' >Home</a></p>

              <p><a href='#!' >About Us</a></p>

              <p><a href='#!' >Guidance</a></p>

              <p><a href='#!'>AllCourses</a></p>
              </div>
            </Col>

            <Col md="4 text-center">
              <div className="socialmedia">
              <h5>Social Media</h5>
              <p><a className="fac" href="https://facebook.com"><FaFacebookF style={{width:'50px' , height :'25px'}}/></a></p>

              <p><a className="inst" href="https://instagram.com"><FiInstagram style={{width:'50px' , height :'25px'}}/></a></p>

             <p><a className="youtu" href="https://youtube.com"><FaYoutube style={{width:'50px' , height :'25px'}}/></a></p>
             </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className='copyrig'>
      Copyright © 2022 EDU- <a href='#'>EDU</a>
      </div>
        
        </footer>
    );
}
export default Foot;