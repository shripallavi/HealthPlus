import React, { useEffect } from 'react';
import Heart from '../images/heart.jpg'
import './home.css'
const Home = () => {
    useEffect(() => {

    }, []); 
    return (
      <>
        <div className='container'>
          <div className='le'>
          <div className='text'>
            Health+ is a disease prediction application. It is a ML driven powerful predictor which uses Linear Regression Algorithm to accurately predict disease based on the given symptoms by the user. Its user-friendly interface makes it even more easy to keep a check on your health. This application provides rich experience to the user and in this way, the users will come to know more about their health and body
          </div>
          </div>
          <div className='ri'>
            <div className='image'><img src={Heart}/></div>
          </div>
        </div>
      </> 
    );
}
export default Home