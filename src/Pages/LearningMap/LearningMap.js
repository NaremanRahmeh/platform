import React, { Fragment } from 'react';
import './learningmap.css';


const Guidance = () => {
  return (
    <Fragment>
      <section className='learn1'>
        <div className='container'>
        <h2><span>L</span>earning Map</h2>
      <p>In this section we deal with a map of the Web Full Stack Developer to become a professional web programmer</p>

          <div className='row'>
            <div className='col-md-6 col-sm-12'>

              <div className='body1'>
            <div className='design1'>
              <h5>UI UX</h5>
            </div>
            </div>

            </div>
            <div className='col-md-6 col-sm-12'>

            <div className='body2'>
            <div className='design1'>
              <h5>JS Framework</h5>
            </div>
            </div>

              </div>
          </div>


          <div className='row'>
            <div className='col-md-4 col-sm-12'>

            <div className='body3'>
              <div className='design2'>
              <h5>HTML</h5>
              </div>
            </div>

            </div>
            <div className='col-md-4 col-sm-12'>

            <div className='body4'>
              <div className='design2'>
              <h5>Css</h5>
              </div>
            </div>
              
              </div>
              <div className='col-md-4 col-sm-12'>

              <div className='body5'>
              <div className='design2'>
              <h5>JavaScript</h5>
              </div>
            </div>
              
              </div>
          
          </div>
           

          <div className='row'>
            <div className='col-md-6 col-sm-12'>

              <div className='body7'>
            <div className='design1'>
              <h6>Programming Language</h6>
            </div>
            </div>

            </div>
            <div className='col-md-6 col-sm-12'>

            <div className='body8'>
            <div className='design1'>
              <h6>Framework</h6>
            </div>
            </div>

              </div>
          </div>


          <div className='row'>
            <div className='col-md-4 col-sm-12'>

            <div className='body9'>
              <div className='design2'>
              <h5>MySQL</h5>
              </div>
            </div>

            </div>
            <div className='col-md-4 col-sm-12'>

            <div className='body10'>
              <div className='design2'>
              <h5>Python</h5>
              </div>
            </div>
              
              </div>
              <div className='col-md-4 col-sm-12'>

              <div className='body11'>
              <div className='design2'>
              <h5>Publish your site</h5>
              </div>
            </div>
              
              </div>
             
          </div>

        </div>

      {/* <h2><span>L</span>earning Map</h2>
      <p>In this section we deal with a map of the Web Full Stack Developer to become a professional web programmer</p>

      <div className='container'>
        <div className='front'>
        <Row >
          <div className='col-md-5 col-sm-12' >
          <Card  className='card1' style={{ width: '25rem', height :'25rem' }}>
      <Card.Body >
        <Card.Title><h2><span>U</span>I UX</h2></Card.Title>
        <Card.Text>
        Learning UI UX will make you able to deliver the best user experience in terms of design
Many may think that UI UX is not important or that companies can do without it, but on the contrary,
 UI UX is one of the most important functions, without it you will not know what is the optimal design that users prefer,
  and you will be unable to provide the best user experience.

        </Card.Text>
      </Card.Body>
    </Card>
          </div>

          <div className='col-md-2 col-sm-6' >
          <div className='learning' >
        </div >
          </div>

          <div className='col-md-5 col-sm-6' >
            <div className='design1'>
            <p>Design</p>
            </div>
          </div>

          </Row>

        <div className='row'>
          <div className='col-md-5 col-sm-12'>
          <div className='design1'>
            <p>Front End</p>
            </div>
          </div>

          <div className='col-md-2 col-sm-6'>
          <div className='learning'>
        </div >
          </div>

          <div className='col-md-5 col-sm-12'>
          <Card  style={{ width: '25rem', height :'25rem' }}>
      <Card.Body>
        <Card.Title><h2><span>H</span>tml</h2></Card.Title>
        <Card.Text>
        You can consider HTML as the actual first step in building your website,
         through HTML you can design the structure of the site and without it you can not enter this field .
        </Card.Text>
      </Card.Body>
    </Card>
          </div>

        </div>

        <div className='row'>
          <div className='col-md-5 col-sm-12'>
          <Card  className='card1'  style={{ width: '25rem', height :'25rem' }}>
      <Card.Body>
        <Card.Title><h2><span>C</span>ss</h2></Card.Title>
        <Card.Text>
        After you have designed the structure of the site with HTML, you should format this structure and arrange
         it and the language that does this is Css, 
        you use Css to make a format for your site and adjust its dimensions and make different effects and add images and colors 
        and make it look great
        </Card.Text>
      </Card.Body>
    </Card>
          </div>

          <div className='col-md-2 col-sm-6'>
          <div className='learning'>
        </div >
          </div>

          <div className='col-md-5 col-sm-12'>
          <div className='design1'>
            <p>Front End</p>
            </div>
          </div>

        </div>

        <div className='row'>
          <div className='col-md-5 col-sm-12'>
          <div className='design1'>
            <p>Front End</p>
            </div>
          </div>

          <div className='col-md-2 col-sm-6'>
          <div className='learning'>
        </div >
          </div>

          <div className='col-md-5 col-sm-12'>
          <Card  style={{ width: '25rem', height :'25rem' }}>
      <Card.Body>
        <Card.Title><h2><span>J</span>avaScript</h2></Card.Title>
        <Card.Text>
        It is considered the most important step for you in Front End and is considered the first programming language you will deal with.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>

        </div>
        <div className='row'>
          <div className='col-md-5 col-sm-12'>
          <Card className='card1'  style={{ width: '25rem', height :'25rem'  }}>
      <Card.Body>
        <Card.Title><h2><span>J</span>S Framework</h2></Card.Title>
        <Card.Text>
        To make it easier for you and to provide the best experience in the shortest time you should use FrameWork for JavaScript
         you can choose between several examples
         Vue.JS - React.JS - Angular.Js
        </Card.Text>
      </Card.Body>
    </Card>
          </div>

          <div className='col-md-2 col-sm-6'>
          <div className='learning'>
        </div >
          </div>

          <div className='col-md-5 col-sm-12'>
          <div className='design1'>
            <p>Front End</p>
            </div>
          </div>

        </div>
        </div>
        <hr></hr>

      </div> */}
      </section>
      </Fragment>
  )
}

export default Guidance
