import react from '../assets/react.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";
import cv from '../assets/samaniego-france-cv.pdf';
const AboutPage = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className="about" id='about'>
            <div className="title" id='title' >
                <h1 data-aos="fade-up">About Me</h1>
            </div>  
            <div className="container">
                <div  className="images" >
                    <div className="img1">
                        <img data-aos="fade-up-right" src={react} alt="KALMA"/>
                    </div>
                </div>
                <div className="description-holder" >
                    <div data-aos="fade-up-left" className="description">
                        <p >
                            My interest in Web Development/Programming stated since 2018 before I finished my senior high career. Since I'm good at designing, I thought I could expand my design skills into web development. Now I am further honing my design and web development skills by creating UI/UX using FIGMA and I will make it a responsive website using the React JS Framework.
                            <br /><br />I also have knowledge about PHP Laravel Framework when it comes to the backend and I am currently researching how to build a Web API using C#.
                            <br /><br />The tools that I have used for designing are Adobe Photoshop, Adobe XD, Figma. I have done many small projects using Adobe Photoshop for my clients.
                        </p>
                        
                        <a download href={cv} className='btn'>
                            <span>
                                Download CV 
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" width="32px" className='svg'>
                                    <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default AboutPage
