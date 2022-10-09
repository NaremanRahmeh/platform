import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import React, { Component, Fragment, useEffect, useState } from 'react';
import Home from './Pages/Home/Home.js';
import About from './Pages/About/About.js';
import Allcourses from './Pages/AllCourses/Allcourses.js';
import ContactUs from './Pages/Contact us/ContactUs.js';
import LearningMap from './Pages/LearningMap/LearningMap.js';
import Notfound from './Pages/Notfound/Notfound.js';
import Navs from './Component/Navs/Navs.js';
import Foot from './Component/Foot/Foot.js';
// import { response } from '../myapi/app.js';



function App() {
 
  // constructor(props){
  //   super(props);
  //   this.state ={
  //       users :[]
  //   }
  // }

  //   ComponentDidMount (){
  //   fetch('http://localhost:3001/users')
  //   .then(response => response.json())
  //   .then( res => {
  //     if(res && res.data){
  //       this.setState({ users: [...this.state.users , ...res.data]})
  //     }
  //   })
  // }
  return (
  
    <BrowserRouter>
    
    <Navs />
     <Routes>
      <Route index element={<Home />}/>
      <Route path='about' element={<About/>}/>
      <Route path='allcourses' element={<Allcourses/>}/>
      <Route path='learningmap' element={<LearningMap/>}/>
      <Route path='contact' element={<ContactUs/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes> 
    <Foot />

    </BrowserRouter>
   
  );
}

export default App;
