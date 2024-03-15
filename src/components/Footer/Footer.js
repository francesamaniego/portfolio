import fb from '../assets/fb.png';
import linkedin from '../assets/linkedin.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <footer className="footer" id="footer">
      <div className="footer-holder">
        <h1 data-aos="fade-right">Get in Touch</h1>
        <h3 data-aos="fade-left">I’m currently looking for any new opportunities, my inbox is always open.</h3>
        <form action="mailto:francesamaniego21@gmail.com">
            <button data-aos="fade-right" className="btn btn-s" >Send Mail</button>
        </form>
        <div  className="socmed-holder">
          <a data-aos="fade-up" href='https://www.facebook.com/samaniego28/'> 
            <button className="socmed" type='submit'>
              <img src={fb} alt="fb" />
            </button>
          </a>
          <a data-aos="fade-down" href='https://www.linkedin.com/in/france-samaniego-0a2011227/'> 
            <button className="socmed" type='submit'>
              <img src={linkedin} alt="linkedin" />
            </button>
          </a>
        </div>
        <h3 data-aos="fade-up">Designed and Built by France Samaniego</h3>
      </div>
    </footer>
  )
}

export default Footer