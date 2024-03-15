
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";
const Experience = () => {
    useEffect(() => {
        AOS.init();
        }, [])
    return (
        <section className="exp" id='exp'>
            <div className="title" id='title'>
                <h1 data-aos="fade-right">Experience</h1>
                <h3 data-aos="fade-left">My Personal Journey</h3>
            </div> 
            <div className="container-exp">
                <div className="education">
                    <h1 data-aos="flip-left">Education</h1>
                    <div data-aos="fade-left" className="course-holder">
                        <p className="course">Bachelor of Science in Information Technology</p>
                        <p className="school">Bulacan State University</p>
                        <p className="date">2019-2023</p>
                    </div>
                    <div data-aos="fade-left" className="course-holder">
                        <p className="course">Senior High School Technical-Vocational-Livelihood</p>
                        <p className="school">Bahay Pare National High School</p>
                        <p className="date">2017-2019</p>
                    </div>
                    
                </div>
                <div className="work">
                    <h1 data-aos="flip-right">Work</h1>
                    <div data-aos="fade-right" className="job-holder">
                        <p className="job-title">ERP Support Assistant at OLG under Hoop Pine Holding LTD.</p>
                        <p className="date">06/06/2023 - 02/02/2024</p>
                    </div>
                    <div data-aos="fade-right" className="job-holder">
                        <p className="job-title">Intern at OLG under Hoop Pine Holding LTD.</p>
                        <p className="date">01/31/2023 - 04/22/2023</p>
                    </div>
                    <div data-aos="fade-right" className="job-holder">
                        <p className="job-title">Self-taught Graphic Artist</p>
                        <p className="date">2017 - Present</p>
                    </div>
                </div>

            </div>
        
        </section>
    )
}

export default Experience
