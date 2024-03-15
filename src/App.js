
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Section from './components/SectionPage/Section';
import Project from './components/ProjectPage/Project';
import AboutPage from './components/AboutPage/AboutPage';
import Experience from './components/ExperiencePage/Experience.js';
import './components/css/style.css'
import Skill from './components/SkillPage/Skill.js';
import React, { useEffect} from "react";
function App() {
  let name ='France';
  useEffect(() => {
    document.title = "France Samaniego | Personal Website";  
  }, []);
  return (
    <div className="App">
     
   
      <Header />
      
      <Section />
      <Project />
      <AboutPage />
      <Experience />
      <Skill />

      <Footer />
      
    </div>
  );
}

export default App;
