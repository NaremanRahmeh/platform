import React from "react";
import './Header.css';
// import {Animator ,ScrollContainer ,ScrollPage, Sticky, Fade, MoveOut, batch } from 'react-scroll-motion';
import Carousel from 'react-bootstrap/Carousel';
import slid1 from './../../images/imgheader/1.jpg';
import slid2 from './../../images/imgheader/2.jpg';
import slid3 from './../../images/imgheader/3.jpg';
import header from '../../images/imgHome/1.png';
import { Form } from "react-bootstrap";

const Header= () =>{
    return(

 <header>
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slid1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="slid">
          <h3><span>P</span>latform Edu</h3>
          <p>that offers you many software specialties</p>
     <p>and you can browse the platform and choose the right specialization for you</p>
     <button>Learn More</button>
     </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slid2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className="slid">
          <h3>To<span>N</span>ew Horizons</h3>
     <p>and you can browse the platform and choose the right specialization for you</p>
     <button>Learn More</button>
     </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slid3}
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className="slid">
          <h3><span>E</span>du</h3>
          <p>that offers you many software specialties</p>
     <p>and you can browse the platform and choose the right specialization for you</p>
     <button>Learn More</button>
     </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {/* <div className="container">
        <div className="row">
        <div className="col-md-6">
         <div className="div1">
      <h2><span>P</span>latform Edu</h2>
      <p> that offers you many software specialties
     and you can browse the platform and choose the right specialization for you</p>
     <button>Learn More</button>
        </div>
        </div>
        <div className="col-md-6">
       
         <div  className="div2">
        <img src={header} title="header" />
                </div>
                </div>
    </div>
    </div> */}
 </header>
    );
}
export default Header;