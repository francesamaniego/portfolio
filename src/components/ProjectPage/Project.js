
import KALMA from '../assets/KALMALogo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";

const Project = () => {
    useEffect(() => {
      AOS.init();
    }, [])
    return (
      <section className="project" id='project'>
        <div className="title" id='title' >
          <h1 data-aos="fade-right">
            Portfolio</h1>
          <h3 data-aos="fade-left">Collaborated Project</h3>
        </div>
        <div 
          data-aos="flip-left"
          className="box"
        >
            <img
              data-aos="zoom-in"
              src={KALMA} alt="KALMA" />
            <h1>KALMA - Kalinga at Agarang Lunas Mobile Application</h1>
            <p>This mobile application was created as a final project in our subject CAPSTONE 401.</p>
            <form href="https://play.google.com/store/apps/details?id=com.kalma.capstonev12">
            <input  className="btn btn-s" type="submit" value="Visit" target="_blank" />
            </form>
          </div>
      </section>
    )
  }



export default Project
