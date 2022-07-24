import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './navbar.css'
import Logo from '../images/logo.jpg'

class NavBar extends Component{ 
  handleClick = (e) => {  
      e.target.classList.toggle('active')
  }
  render(){
      return(
          <>
          <div className='logo'>
              <Link to="/"  style={{ textDecoration: 'none' }}>
                <img src={Logo}/>
              </Link>
          </div>
          <div className="navigation">
              <Link to="/"  style={{ textDecoration: 'none' }}>
                  <div className="menuItems">
                      <p>Home</p>
                  </div>
              </Link>
              <Link to="/diseaseprediction"  style={{ textDecoration: 'none' }}>
                  <div className="menuItems">
                      <p>Disease Prediction</p>
                  </div>
              </Link>  
              <Link to="/diseases"  style={{ textDecoration: 'none' }}>
                  <div className="menuItems">
                      <p>Diseases</p>
                  </div>
              </Link>
              <Link to="/blogs"  style={{ textDecoration: 'none' }}>
                  <div className="menuItems">
                      <p>Blogs</p>
                  </div>
              </Link>
          </div>
          </>  
      )
  }
}

export default NavBar