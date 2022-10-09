import React, { Fragment, useCallback, useState } from 'react';
import './allcourses.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {AiFillStar} from 'react-icons/ai';
import {FiStar} from 'react-icons/fi';
import { BsBookmark } from "react-icons/bs";

const Allcourses = (props) => {
  return (
    <Fragment>
      <section className='Allcours'>
        <Container>
          <h2>To<span> N</span>ew Horizons </h2>
          <div className='row'>
            <div className='col-md-3'>
            <Card className='card' style={{ width: '18rem' }}>
              <Card.Body className='imag' style={{ height:'250px'}}>
                <a href=''><BsBookmark className='save'/></a>
                </Card.Body>
      <Card.Body className='body'>
      <Card.Title><AiFillStar className='icon' /><AiFillStar className='icon'/><AiFillStar className='icon' />
      <AiFillStar className='icon'/><FiStar className='icon'/></Card.Title>
      <Card.Text><a className='h3' href ="">Html Course</a></Card.Text>
        <Card.Text>
         By <a href='#'>EDU </a> In <a href='#'> Front End</a>
        </Card.Text>
        <Card.Text>Free</Card.Text>
        <Button href="#" className='btn'>Get Enrolled</Button>
      </Card.Body>
    </Card>
            </div>


            <div className='col-md-3'>
            <Card className='card' style={{ width: '18rem' }}>
              <Card.Body className='imag1' style={{ height:'250px'}}>
              <a href=''><BsBookmark className='save'/></a>
                </Card.Body>
      <Card.Body className='body'>
      <Card.Title><AiFillStar className='icon' /><AiFillStar className='icon'/><AiFillStar className='icon' />
      <AiFillStar className='icon'/><FiStar className='icon'/></Card.Title>
      <Card.Text><a className='h3' href ="">Css Course</a></Card.Text>
        <Card.Text>
         By <a href='#'>EDU </a> In <a href='#'> Front End</a>
        </Card.Text>
        <Card.Text>Free</Card.Text>
        <Button href="#" className='btn'>Get Enrolled</Button>
      </Card.Body>
    </Card>
              
              </div>


              <div className='col-md-3'>
              <Card className='card' style={{ width: '18rem' }}>
              <Card.Body className='imag2' style={{ height:'250px'}}>
              <a href=''><BsBookmark className='save'/></a>
                </Card.Body>
      <Card.Body className='body'>
      <Card.Title><AiFillStar className='icon' /><AiFillStar className='icon'/><AiFillStar className='icon' />
      <AiFillStar className='icon'/><FiStar className='icon'/></Card.Title>
      <Card.Text><a className='h3' href ="">JavaScript Course</a></Card.Text>
        <Card.Text>
         By <a href='#'>EDU </a> In <a href='#'> Front End</a>
        </Card.Text>
        <Card.Text>Free</Card.Text>
        <Button href="#" className='btn'>Get Enrolled</Button>
      </Card.Body>
    </Card>
              </div>
              <div className='col-md-3'>
              <Card className='card1'  style={{ width: '18rem',border:'none' }}>
      <Card.Body >
      <Card.Title>
      <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              variant="outline-success"/>
      </Card.Title>
      <Card.Text><h4 style={{color:'#fff'}}>Category</h4></Card.Text>
        <Card.Text>
              <ul style={{textAlign:'left'}}>
              <li><a href=''>Back End</a></li>
              <li><a href=''> Front End</a></li>
             </ul>
        </Card.Text>
      </Card.Body>
    </Card>
              </div>

          </div>




          <div className='row'>
            <div className='col-md-3'>
            <Card className='card' style={{ width: '18rem' }}>
              <Card.Body className='imag3' style={{ height:'250px'}}>
              <a href=''><BsBookmark className='save'/></a>
                </Card.Body>
      <Card.Body className='body'>
      <Card.Title><AiFillStar className='icon' /><AiFillStar className='icon'/><AiFillStar className='icon' />
      <AiFillStar className='icon'/><FiStar className='icon'/></Card.Title>
      <Card.Text><a className='h3' href ="">Python Course</a></Card.Text>
        <Card.Text>
         By <a href='#'>EDU </a> In <a href='#'> Back End</a>
        </Card.Text>
        <Card.Text>Free</Card.Text>
        <Button href="#" className='btn'>Get Enrolled</Button>
      </Card.Body>
    </Card>
            </div>


            <div className='col-md-3'>
            <Card className='card' style={{ width: '18rem' }}>
              <Card.Body className='imag4' style={{ height:'250px'}}>
              <a href=''><BsBookmark className='save'/></a>
                </Card.Body>
      <Card.Body className='body'>
      <Card.Title><AiFillStar className='icon' /><AiFillStar className='icon'/><AiFillStar className='icon' />
      <AiFillStar className='icon'/><FiStar className='icon'/></Card.Title>
      <Card.Text><a className='h3' href ="">Jquery Course</a></Card.Text>
        <Card.Text>
         By <a href='#'>EDU </a> In <a href='#'> Front End</a>
        </Card.Text>
        <Card.Text>Free</Card.Text>
        <Button href="#" className='btn'>Get Enrolled</Button>
      </Card.Body>
    </Card>
              </div>


              <div className='col-md-3'>
              <Card className='card' style={{ width: '18rem' }}>
              <Card.Body className='imag5' style={{ height:'250px'}}>
              <a href=''><BsBookmark className='save'/></a>
                </Card.Body>
      <Card.Body className='body'>
      <Card.Title><AiFillStar className='icon' /><AiFillStar className='icon'/><AiFillStar className='icon' />
      <AiFillStar className='icon'/><FiStar className='icon'/></Card.Title>
      <Card.Text><a className='h3' href ="">React Course</a></Card.Text>
        <Card.Text>
         By <a href='#'>EDU </a> In <a href='#'> Front End</a>
        </Card.Text>
        <Card.Text>Free</Card.Text>
        <Button href="#" className='btn'>Get Enrolled</Button>
      </Card.Body>
    </Card>
              
              </div>
              <div className='col-md-3'>
             
              </div>

          </div>






          </Container>
      </section>
    </Fragment>
  )
}

export default Allcourses
