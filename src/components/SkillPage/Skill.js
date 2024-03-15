import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import materialUI from '../assets/mi.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import sass from '../assets/sass.png';
import bootstrap from '../assets/bt.png';
import wordpress from '../assets/wp.png';
import elementor from '../assets/elementor.png';

import php from '../assets/php.png';
import laravel from '../assets/laravel.png';
import mysql from '../assets/mysql.png';

import photoshop from '../assets/ps.png';
import premier from '../assets/pr.png';
import xd from '../assets/xd.png';
import figma from '../assets/figma.png';
import github from '../assets/github.png';
import harmoniq from '../assets/hq.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";
const Skill = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className='skill' id='skill'>
            <div className="title" id='title'>
                <h1 data-aos="fade-right">Skills</h1>
                <h3 data-aos="fade-left">My Technical Level</h3>
            </div> 
            <div className='skill-holder'>
                <div data-aos="fade-up" className='skills frontend'>
                    <div className="skill-title" id='skill-title'>
                        <h1>Frontend</h1>
                    </div>
                    <div className='endskills'> 
                        <div className='skillset'>
                            <img src={html} alt="html" />
                            <h1>HTML5</h1>
                        </div>
                        <div className='skillset'>
                            <img src={css} alt="css" />
                            <h1>CSS</h1>
                        </div>
                        <div className='skillset'>
                            <img src={js} alt="js" />
                            <h1>JavaScript</h1>
                        </div>
                        <div className='skillset'>
                            <img src={react} alt="react" />
                            <h1>ReactJS</h1>
                        </div>
                        <div className='skillset'>
                            <img src={materialUI} alt="materialUI" />
                            <h1>MaterialUI</h1>
                        </div>

                        <div className='skillset'>
                            <img src={tailwind} alt="tailwind" />
                            <h1>Tailwind</h1>
                        </div>
                        <div className='skillset'>
                            <img src={sass} alt="sass" />
                            <h1>SASS</h1>
                        </div>
                        <div className='skillset'>
                            <img src={bootstrap} alt="bootstrap" />
                            <h1>Bootstrap</h1>
                        </div>
                        <div className='skillset'>
                            <img src={wordpress} alt="wordpress" />
                            <h1>WordPress</h1>
                        </div>
                        <div className='skillset'>
                            <img src={elementor} alt="elementor" />
                            <h1>Elementor</h1>
                        </div>

                    </div>

                </div>
                <div data-aos="fade-down" className='skills backend'>
                    <div className="skill-title" id='skill-title'>
                            <h1>Backend</h1>
                    </div>
                    <div className='endskills'> 
                        <div className='skillset'>
                            <img src={php} alt="php" />
                            <h1>PHP</h1>
                        </div>
                        <div className='skillset'>
                            <img src={laravel} alt="laravel" />
                            <h1>Laravel</h1>
                        </div>
                        <div className='skillset'>
                            <img src={mysql} alt="mysql" />
                            <h1>MySQL</h1>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className='skills others'>
                    <div className="skill-title" id='skill-title'>
                        <h1>Others</h1>
                    </div>
                    <div className='endskills'> 
                        <div className='skillset'>
                            <img src={photoshop} alt="photoshop" />
                            <h1>Photoshop</h1>
                        </div>
                        <div className='skillset'>
                            <img src={premier} alt="premier" />
                            <h1>Premier</h1>
                        </div>
                        <div className='skillset'>
                            <img src={xd} alt="xd" />
                            <h1>XD</h1>
                        </div>
                        <div className='skillset'>
                            <img src={figma} alt="figma" />
                            <h1>Figma</h1>
                        </div>
                        <div className='skillset'>
                            <img src={github} alt="github" />
                            <h1>GitHub</h1>
                        </div>
                        <div className='skillset'>
                            <img src={harmoniq} alt="HQ" />
                            <h1>HarmoniQ</h1>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skill
