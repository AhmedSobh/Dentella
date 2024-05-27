import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {sobh,mostafa,ashraf,omar,nazmy,gamy,abdAllah,abdelghany}from'../imgs'
import '../all.css';
import '../all.min.css';
import '../App.css';
import '../bootstrap.min.css';
import '../doctors.css';

const Doctors =()=>{
    return(
        <>
        <div className="container ">
        <div className="main-content">
            <h1>Our <span>Doctors</span></h1>
            <h2>We have a group of highly experienced doctors</h2>
        </div>
        <div className="collection">
            <div><img src={sobh}/>
                <h3>Dr.Ahmed </h3>
                <h5>Mansoura , cairo</h5>
                <h6>cleaning specialist</h6>
                <Link to={'/booking'}><button>Book Now</button></Link>                
            </div>

            <div><img src={mostafa}/>
                <h3>Dr.mostafa</h3>
                <h5>Mansoura , cairo</h5>
                <h6>cleaning specialist</h6>
               <Link to={'/booking'}><button>Book Now</button></Link>                
            </div>
           
            <div><img src={ashraf}/>
                <h3>Dr.Ashraf</h3>
                <h5>Mansoura , cairo</h5>
                <h6>cleaning specialist</h6>
                <Link to={'/booking'}><button>Book Now</button></Link>                
            </div>
            
            <div><img src={omar}/>
                <h3>Dr.Omar</h3>
                <h5>Mansoura , cairo</h5>
                <h6>cleaning specialist</h6>
                <Link to={'/booking'}><button>Book Now</button></Link>                
            </div>
          
            <div><img src={nazmy}/>
                <h3>Dr.Nazmy</h3>
                <h5>Mansoura , cairo</h5>
                <h6>cleaning specialist</h6>
                <Link to={'/booking'}><button>Book Now</button></Link>                
            </div>
          
            <div><img src={gamy}/>
                <h3>Dr.Gamy</h3>
                <h5>Mansoura , cairo</h5>
                <h6>cleaning specialist</h6>
                <Link to={'/booking'}><button>Book Now</button></Link>                
            </div>
           
            <div><img src={abdelghany}/>
                <h3>Dr.Abdelghany</h3>
                <h5>Mansoura , cairo</h5>
                <h6>cleaning specialist</h6>
                <Link to={'/booking'}><button>Book Now</button></Link>                
            </div>
          
            <div><img src={abdAllah}/>
                <h3>Dr.AbdAllah</h3>
                <h5>Mansoura , cairo</h5>
                <h6>cleaning specialist</h6>
                <Link to={'/booking'}><button>Book Now</button></Link>                
            </div>
       
        </div>
    </div></>
    )
}

export default Doctors;
