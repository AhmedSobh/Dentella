import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import '../Style.css';
import '../all.css';
import '../all.min.css';
import '../App.css';
import '../bootstrap.min.css';
import {Logo,firstperson,shield,supportImage,doctorImage,starImage,chairImage,teethWhiteningImage,dentalImplantImage,teethFillingsImage,oralSurgeryImage,crownBridgesImage,
About,dental1,dental2,dental3,dental4,dental5,dental6,dental11,dental33
,dental44,abdAllah,abdelghany,gamy,nazmy,omar,sobh,mostafa, ashraf,choosing,testimonials, smile,
}from '../imgs';
const Api_Link=""
const App = () => {
  return (
    <>
      <header className="header container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li className="active"><a href="#home">Home</a></li>
            <li><a href="#About Us">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
               <Link to={"/profile"}><button>Login</button></Link> 
            </li>
          </ul>
        </nav>
      </header>
      <section className="sec1 container" id="home">
        <div className="main-contet">
          <div className="left">
            <h1>GET READY FOR YOUR BEST EVER DENTAL EXPERIENCE</h1>
            <h3>We use only the best quality materials on the market in order to provide the best products to our patients, So don't worry about anything and book yourself,</h3>
          </div>
          <div className="right">
            <div className="circle">
              <img className="first-person" src={firstperson} alt="Dental Image"/>
            </div>
          </div>
          <img className="shield" src={shield} alt="Shield" />
        </div>
        <div className="btns">
          <Link to={'/doctors'}><button> Book Appointment</button></Link>
          <div className="circle-1">
            <div className="circle-2">
              <i className="fas fa-play"></i>
            </div>
          </div>
          <h5>See How We Work</h5>
        </div>
        <div className="teeth">
          <i className="fas fa-teeth-open"></i>
          <h3>We are able to restore your <span style={{color: '#1a74bc', fontWeight: 'bolder' }}>dental health issue</span></h3>
        </div>
      </section>
      <section className="sec2">
      <div className="collection container">
    <div className="container">
      <img src={supportImage} alt="Free Consultation" />
      <h2>Free Consultation</h2>
      <h5>We offer flexible appointment scheduling and free to accommodate your busy life</h5>
    </div>
    <div className="container">
      <img src={doctorImage} alt="Expert Dentist" />
      <h2>Expert Dentist</h2>
      <h5>Our team of experienced dentists and dental professionals boasts years of expertise in various areas of dentistry</h5>
    </div>
    <div className="container">
      <img src={starImage} alt="High User Rating" />
      <h2>High User Rating</h2>
      <h5>We offer the latest techniques and materials for restoring damaged teeth, ensuring your dental health is fully optimized</h5>
    </div>
    <div className="container">
      <img src={chairImage} alt="Best Equipment" />
      <h2>Best Equipment</h2>
      <h5>Our compassionate team is dedicated to making your dental experience as comfortable and stress-free as possible</h5>
    </div>
  </div>
  </section>
  <section class="sec3">
  <div className="collection container">
    <div className="head-content">
      <h2>Satisfy Solution</h2>
      <h3>The Best Dental Treatment</h3>
    </div>
    <div className='card-collec'>
    <div className="cards cr1">
      <div className="card-txt">
        <h1>Teeth Whitening</h1>
        <h3>Cosmetic treatment to enhance the whiteness</h3>
        <button>Read more</button>
      </div>
      <img src={teethWhiteningImage} alt="Teeth Whitening" />
    </div>
    <div className="cards cr2">
      <div className="card-txt">
        <h1>Dental Implant</h1>
        <h3>Surgical placement of artificial tooth roots</h3>
        <button>Read more</button>
      </div>
      <img src={dentalImplantImage} alt="Dental Implant" />
    </div>
    <div className="cards cr3">
      <div className="card-txt">
        <h1>Teeth Fillings</h1>
        <h3>Restoration to repair cavities and damaged teeth</h3>
        <button>Read more</button>
      </div>
      <img src={teethFillingsImage} alt="Teeth Fillings" />
    </div>
    <div className="cards cr4">
      <div className="card-txt">
        <h1>Oral Surgery</h1>
        <h3>Surgical procedures, including extractions and dental implants</h3>
        <button>Read more</button>
      </div>
      <img src={oralSurgeryImage} alt="Oral Surgery" />
    </div>
    <div className="cards cr5">
      <div className="card-txt">
        <h1>Crown and Bridges</h1>
        <h3>Restoration options for damaged or missing teeth</h3>
        <button>Read more</button>
      </div>
      <img src={crownBridgesImage} alt="Crown and Bridges" />
    </div>
    </div>
  </div>
  </section>
  <section className="sec4" id="About Us">
    <div className="content container">
      <div className="left">
        <img src={About} alt="" />
      </div>
      <div className="right">
        <h2>About Us</h2>
        <h3>Patient-Centered Care</h3>
        <h5>We are dedicated to providing exceptional dental care in a warm and welcoming environment. Our team of experienced, compassionate, and highly skilled professionals is here to ensure your dental experience is comfortable and stress-free.</h5>
        <h3>Our Mission</h3>
        <h6>At dentella, our mission is to promote optimal oral health and create lasting, confident smiles. </h6>
        <button> Learn More <i className="fa-solid fa-arrow-right-long"></i></button>
      </div>
      <div className="left-2">
        <div>........</div>
        <div>........</div>
        <div>........</div>
        <div>........</div>
      </div>
    </div>
  </section>

 <section className="sec5" id="services">
    <div className="main-content container">
      <h1>
        Our <span> Speciality</span>
      </h1>
      <h3>The best quality service you can get </h3>
    </div>
    <div className="container collection">
      <div className="up">
        <div className="card">
          <img className="img1" src={dental1} alt="" />
          <img className="img2" src={dental11} alt="" />
          <h4>Cleaning</h4>
          <h6>learn more <i className="fa-solid fa-angles-right"></i> </h6>
        </div>

        <div className="card">
          <img className="img1" src={dental2} alt="" />
          <img className="img2" src={dental11} alt="" />
          <h4>Cleaning</h4>
          <h6>learn more <i className="fa-solid fa-angles-right"></i> </h6>
        </div>

        <div className="card">
          <img className="img1" src={dental3} alt="" />
          <img className="img2" src={dental33} alt="" />
          <h4>Cleaning</h4>
          <h6>learn more <i className="fa-solid fa-angles-right"></i> </h6>
        </div>

        <div className="card">
          <img className="img1" src={dental4} alt="" />
          <img className="img2" src={dental44} alt="" />
          <h4>Cleaning</h4>
          <h6>learn more <i className="fa-solid fa-angles-right"></i> </h6>
        </div>

      </div>
      <div className="down">
        <div className="card">
          <img className="img1" src={dental5} alt="" />
          <img className="img2" src={dental11} alt="" />
          <h4>Extractions</h4>
          <h6>learn more <i className="fa-solid fa-angles-right"></i> </h6>
        </div>
        <div className="card">
          <img className="img1" src={dental6} alt="" />
          <img className="img2" src={dental11} alt="" />
          <h4>Extractions</h4>
          <h6>learn more <i className="fa-solid fa-angles-right"></i> </h6>
        </div>
      </div>
    </div>
  </section>
  <section className="sec6">
      <div className="main-content container">
        <h1>
          Our <span> Team</span>
        </h1>
      </div>
      <div className="collection container">
        <div className="avatar">
          <div>
            <img src={abdelghany} alt="abdelghany" />
            <h4>abdelghany</h4>
            <h6>cleaning specialist</h6>
          </div>
          <div>
            <img src={abdAllah} alt="abdAllah" />
            <h4>abdAllah</h4>
            <h6>cleaning specialist</h6>
          </div>
          <div>
            <img src={gamy} alt="gamy" />
            <h4>gamy</h4>
            <h6>cleaning specialist</h6>
          </div>
          <div>
            <img src={nazmy} alt="nazmy" />
            <h4>nazmy</h4>
            <h6>cleaning specialist</h6>
          </div>
          <div>
            <img src={omar} alt="omar" />
            <h4>omar</h4>
            <h6>cleaning specialist</h6>
          </div>
          <div>
            <img src={mostafa} alt="mostafa" />
            <h4>mostafa</h4>
            <h6>cleaning specialist</h6>
          </div>
          <div>
            <img src={ashraf} alt="ashraf" />
            <h4>ashraf</h4>
            <h6>cleaning specialist</h6>
          </div>
          <div>
            <img src={sobh} alt="Ahmed Sobh" />
            <h4>Ahmed Sobh</h4>
            <h6>cleaning specialist</h6>
          </div>
        </div>
      </div>
    </section>

    <section className="sec7" id="choose">
    <div className="content">
      <h4>Why Choose Us</h4>
      <h2>Comprehensive Dental Services</h2>
    </div>
    <div className="main-content container">
      <div className="left">
        <div><i class="fa-solid fa-circle-check"></i></div><div><p><span>Experienced Professionals:</span> Our team consists of highly skilled and knowledgeable dental experts. </p></div>
        <div><i class="fa-solid fa-circle-check"></i></div><div><p><span>State-of-the-Art Technology:</span> We invest in the latest dental technology to provide the best care. </p></div>
        <div><i class="fa-solid fa-circle-check"></i></div><div><p><span>Compassionate Care:</span> We treat every patient with empathy and understanding. </p></div>
        <div><i class="fa-solid fa-circle-check"></i></div><div><p><span>Patient Education:</span> We believe in educating our patients about their oral health to make informed decisions. </p></div>
        <div><i class="fa-solid fa-circle-check"></i></div><div><p><span>Convenient Hours:</span> We offer flexible scheduling to accommodate your busy life. </p></div>
      </div>  
      <div className="right">
        <img src={choosing} alt="Dental Team"/>
      </div>    
    </div>
  </section>

  <section className="sec8" id="Testimonials">
    <div className="head">
      <h6>Testimonials</h6>
      <h3>What People Say About Us</h3>
      <img src={testimonials} alt="Centerpiece" />
      <center><h2>"In an emergency situation, I was amazed by how quickly they accommodated me. The dentist's skill and compassion were evident. I'm grateful for their prompt care."</h2></center>
      <h4>Ahmed El Hossiny</h4>
      <h5>Mansoura, Egypt</h5>
    </div>
  </section>

  <section className="sec9" id="contact">
    <div className="main-box">
      <div className="left">
        <img src={smile} alt="Smile" />
      </div>
      <div className="right">
        <h2>Consultation</h2>
        <form className="needs-validation" novalidate>
          <div className="collection">
            <input id="validationTooltip01" type="text" placeholder="Full Name *" required />
            <input type="text" placeholder="I’m interested in *" required />
            <input type="email" placeholder="Email *" required />
            <input type="number" placeholder="Phone Number *" required />
          </div>
          <button className="btn btn-primary col-11" type="submit">Get a Free Consultation <i className="fa-solid fa-arrow-right"></i></button>
        </form>
      </div>
    </div>
  </section>

  <footer>
    <div className="collection">
      <div className="first">
        <h1>Dentella</h1>
        <h2>Company</h2>
        <a href="#home"><h5>Home</h5></a>
        <a href="#services"><h5>Services</h5></a>
        <a href="#About Us"><h5>About Us</h5></a>
        <a href="#choose"><h5>Why Choose Us</h5></a>
        <a href="#Testimonials"><h5>Testimonials</h5></a>
        <a href="#contact"><h5>Contact Us</h5></a>
      </div>
      <div className="second">
        <h2>Address</h2>
        <h5>123 Dental Avenue City ville, Mansoura, EGYPT View on Maps </h5>
        <h3>Inquiries</h3>
        <h6>(123) 456-7890 <br /> nazmy871@gmail.com</h6>
      </div>
      <div className="third">
        <h4>Newsletter</h4>
        <h5>Stay Updated with our Latest News </h5>
        <input className="email" type="email" placeholder="Your Email" required />
        <h3>Follow Us</h3>
        <div className="icons">
                <i class="fa-brands fa-facebook icon"></i>
                <i class="fa-brands fa-twitter icon"></i>
                <i class="fa-brands fa-youtube icon"></i>
                <i class="fa-brands fa-pinterest icon"></i>
                <i class="fa-brands fa-linkedin icon"></i>
                <i class="fa-brands fa-tiktok icon"></i>
                <i class="fa-brands fa-instagram icon"></i>
        </div>
      </div>
    </div>
  </footer>

    </>
  
    
  );
}

export default App;
