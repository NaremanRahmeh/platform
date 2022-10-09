import React from 'react';
import './Navs.css';
import { links } from '../../data';
import { NavLink } from 'react-router-dom';
import {Container, Navbar } from 'react-bootstrap';
import logo from './../../images/imgHome/logo2.png';
import { useState } from 'react';
import { Fragment } from 'react';


const Navs = () => {

 const [color, setColor]= useState(false)
 const changeColor =()=> {
  if(window.scrollY >= 90){
    setColor(true)
  }
  else{
    setColor(false)
  }
 }
 window.addEventListener('scroll', changeColor)
 const activeLink = "text-black  w-full h-16 shadow centered font-bold  rounded-br-3xl ";
const normalLink =" "

  return (
    <Fragment>
      <section>
        <Navbar className={color ? 'nav na-bg' :'nav'} expand="lg" fixed='top' id ='menu-area'>
        <Container>
        <Navbar.Brand className='logo'>
         <img src={logo} title="logo" style={{width:'5rem'}}/>
          </Navbar.Brand>
          {
            links.map((item , index) => {
          return (
             <div key={index} >
              <div className='uppercase centered'>
                <NavLink to ={item.path}
                className={( {isActive}) =>
                isActive ? activeLink :normalLink
              }
                >
                <span> {item.name}</span>
                </NavLink>
             
             </div>
             </div>
          )
            })
          }
          </Container>
        </Navbar>
        </section>
    {/* <Navbar className={color ? 'nav na-bg' :'nav'} expand="lg" fixed='top' id ='menu-area'>
      <Container>
      <Navbar.Brand className='logo'>
         <img src={logo} title="logo" style={{width:'5rem'}}/>
          </Navbar.Brand>

        <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='nav-link '>{
            links.map(({name,path},index) =>{
                 return(
                    <NavLink to={path}
                   className ={({ isActive }) =>
                   isActive ? activeLink : normalLink
                  }
                   > 
                  {name} </NavLink>
                
                 )
             })
         }
         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    </Fragment>
  )
}

export default Navs
