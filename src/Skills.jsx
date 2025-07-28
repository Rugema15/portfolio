import React from 'react';
import './Skills.css';
import UI from './UI.png';
import web from './web.png';
import app from './app.png';


const Skills = () => {
  return (
    <section id='Skills'>
      <span className='skilltitle'>What I Do</span>
      <span className='skillDesc'>I am a skilled and passionate web designer with experience in create visually appealing amd user-friendly websites.i have a
        strong  understanding of design and a keen eye for detail. I am proficient in HTML,CSS and JavaScript, as well as design software
        such as adobe photoshop and illustrator. 
      </span>
      <div className="skillBar">
        <img src={UI} alt='UI/UX' className='skillBarImg'/>
        <div className='skillBarText'>
            <h2>UI/UX</h2>
            <p>This is a demo text, both are most important.</p>
        </div>
      </div>
      <div className='skillBar'>
        <img src={web} alt='Website Design' className='skillBarImg'/>
        <div className="skillBarText">
            <h2>Website Design</h2>
            <p>This demo text can be changed while making the production ready website.</p>
        </div>
      </div>
      <div className='skillBar'>
        <img src={app} alt='App Design' className='skillBarImg'/>
        <div className="skillBarText">
            <h2>App Design</h2>
            <p>You can write text related to mobile app development.</p>
        </div>
      </div>
    </section>
  );
}

export default Skills
