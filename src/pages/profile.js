import React from 'react';
import '../profile.css';
import{docImage}from '../imgs';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Profile = () => {

    const [profile ,setProfile] = useState({name:''});

    useEffect(()=>{
      async function fetchProfileData(){
        try{
          const response = await fetch('api/Account/doctor/register');
          const data = await response.json();

          setProfile({name:data.name});
        }catch (error){
          console.error('There was an error fetching the profile data:', error);
        }
      }
      fetchProfileData();
    },[]);
  return (
    <>  
    <div className="main-sec">
      <div className="up container">
        <div className="img">
          <div className="circle">
            <img src={docImage} alt="Dr. Ahmed Sobh" />
          </div>
        </div>
        <div className="content">
          <h2>Book a consultation session now..</h2>
          <div className="name">{profile.name}</div>
          <div className="specialty">cleaning</div>
          <div className="icon">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <button>
             <Link to={'/booking'}> Book</Link>
              </button>
          </div>
        </div>
      </div>
      
      <div className="tips container">
        <center><h1>Important Tips</h1></center>
        <div className="box">
          Maintaining dental health is an essential aspect of overall well-being. It requires daily attention to ensure a beautiful and healthy smile. Proper teeth cleaning is crucial, and using the right techniques with a toothbrush and dental floss can make a significant difference. Fluoride toothpaste plays a key role in defending against tooth decay by fighting germs and providing a protective barrier.
        </div>
      </div>
      
      <div className="about-doc">
        <div className="img">
          <div className="circle">
            <img src={docImage} alt="Dr. John Smith" />
          </div>
        </div>
        
        <div className="content">
          <h2>About me ..</h2>
          <h4>With a venerable age of 67 and a robust 30 years of experience in dental medicine, Dr. John Smith stands as a paragon of dedication and expertise in his field. His journey in dentistry is marked by an illustrious career that spans several of the nation’s premier hospitals and clinics.</h4>
        </div>
      </div>
    </div>
  </>
  );
};

export default Profile;