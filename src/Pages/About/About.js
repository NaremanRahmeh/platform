import React, { Fragment } from 'react';
import './about.css';
import about1 from './../../images/imgAbout/about1.jpg';
import logo from './../../images/imgAbout/html-logo.png';
import logo1 from './../../images/imgAbout/react-logo.png';
import logo2 from './../../images/imgAbout/ce-logo.png';
import logo3 from './../../images/imgAbout/css-logo.png';
import logo4 from './../../images/imgAbout/javascript-logo.png';
import logo5 from './../../images/imgAbout/python.png';
// import { BsArrowRight } from "react-icons/bs";


const about = () => {
  return (
     <Fragment>
      <section className='AboutUS'>

      <div className='about1'>
        <div className='container'>
        <div className='row'>

          <div className='col-md-6'>
          <h2><span>W</span>ho We Are</h2>
      <p className='p1'>LeewayHertz is a leading software development company, designing <br></br>and delivering tailor-made digital solutions 
        to enterprises and startups worldwide. Our team of 250+ full-stack developers, designers and innovators have designed
         100+ digital solutions.</p>
          </div>

          <div className='col-md-6'>
          <img src={about1} style={{borderRadius:'20px'}} />
          </div>
          </div>
        </div>

      </div>

      <div className='abou'>
         <div className='row'>
          <div className='col-md-4'>
          <h3>25000<span>+</span></h3>
          <p>Views</p>
          </div>

          <div className='col-md-4'>
            <h3>10<span>+</span></h3>
            <p>Courses</p>
          </div>

          <div className='col-md-4'>
            <h3>2019<span>+</span></h3>
            <p>Since</p>
            </div>
          </div>
          </div>

      <div className='glimpse'>
        <div className='container'>
      <h2>Organs responsible for the production of courses</h2>
      <div className='row'>
        <div className='col-md-4'>
         <img src={logo}  style={{width:'100px', height:'100px'}}/>
         <h4>Osama ElZero</h4>
         <a href='' className='btn'> More</a>
        </div>
        <div className='col-md-4'>
        <img src={logo1} style={{width:'100px', height:'100px'}} />
         <h4>Nour Homsi</h4>
         <a href='' className='btn'> More </a>
        </div>
        <div className='col-md-4'>
        <img src={logo2} style={{width:'100px', height:'100px'}}/>
         <h4>Muhammed Essa</h4>
         <a href='' className='btn'> More </a>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-4'>
         <img src={logo3}  style={{width:'100px', height:'100px'}}/>
         <h4>Osama ElZero</h4>
         <a href='#' className='btn'> More </a>
        </div>
        <div className='col-md-4'>
        <img src={logo4} style={{width:'100px', height:'100px'}} />
         <h4>Nour Homsi</h4>
         <a href='#' className='btn'> More </a>
        </div>
        <div className='col-md-4'>
        <img src={logo5} style={{width:'100px', height:'100px'}}/>
         <h4>Muhammed Essa</h4>
         <a href='#' className='btn'> More </a>
        </div>
      </div>
      
      </div>
        </div>

          

         </section>
     </Fragment>
  );
}

export default about;
