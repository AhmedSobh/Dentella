import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import '../all.css';
import '../all.min.css';
import '../App.css';
import '../bootstrap.min.css';
import '../Style.css';

function Header() {
  return (
    <header className="headerB container">
      <div className="logo">
        <Link to={'/'}> <img src={logo} alt="Logo" /></Link>
      </div>
    </header>
  );
}

function BookingSection() {
  return (
    <section className="sec1B container">
      <h1>Book Now</h1>
      <center><h5>Aenean sit amet magna vel magna fringilla fermentum. Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula.</h5></center>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Your Email" />
        <input type="number" placeholder="Phone Number" />
        <select className="form-control">
          <option>Cleaning</option>
          <option>filling</option>
          <option>Crowns</option>
          <option>Implants</option>
          <option>Extractions</option>
          <option>orthodontic</option>
        </select>
        <textarea name="Note" placeholder="Note"></textarea>
      </form>
      <button className='button'>Confirm</button>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="collectionB">
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
          <h3>FollowUs</h3>
          <div className="icons">
            <i className="fa-brands fa-facebook icon"></i>
            <i className="fa-brands fa-twitter icon"></i>
            <i className="fa-brands fa-youtube icon"></i>
            <i className="fa-brands fa-pinterest icon"></i>
            <i className="fa-brands fa-linkedin icon"></i>
            <i className="fa-brands fa-tiktok icon"></i>
            <i className="fa-brands fa-instagram icon"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Booking() {
  return (
    <div>
      <Header />
      <BookingSection />
      <Footer />
    </div>
  );
}

export default Booking;
