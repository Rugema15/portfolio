import React from 'react';
import './Skills.css';
import UI from './UI.png';
import web from './web.png';
import app from './app.png';


const Skills = () => {
  return (
    <section id='Skills'>
      <span className='skilltitle'>What I Do</span>
      <span className='skillDesc'>I'm a skilled and passionate full-stack web designer 
        
        with a strong understanding of design principles and a keen eye for detail. 
        I specialize in creating visually appealing,
         user-friendly websites using HTML, CSS, and JavaScript on the front end,
          and have experience with back-end development as well.
      </span>
      <div className="skillBar">
        <img src={UI} alt='UI/UX' className='skillBarImg'/>
        <div className='skillBarText'>
            <h2>UI/UX</h2>
            <p>We design intuitive and engaging user interfaces with a focus on smooth user experiences.
               Every interaction is crafted to be clear, efficient, and user-friendly across all devices.

.</p>
        </div>
      </div>
      <div className='skillBar'>
        <img src={web} alt='Website Design' className='skillBarImg'/>
        <div className="skillBarText">
            <h2>Website Design</h2>
            <p>We create modern, responsive, and user-friendly websites that reflect your brand and engage your audience. 
              From layout to launch, every detail is crafted for performance and visual impact.

</p>
        </div>
      </div>
      <div className='skillBar'>
        <img src={app} alt='App Design' className='skillBarImg'/>
        <div className="skillBarText">
            <h2>App Design</h2>
            <p>We specialize in building powerful, user-friendly mobile applications for both Android and iOS platforms.
               From concept to launch, we create custom apps that are fast, secure, and scalable
              designed to enhance user experience and meet your business goals. 
              Whether it’s a startup idea or enterprise-level solution, we turn your vision into a mobile reality..</p>
        </div>
      </div>
    </section>
  );
}

export default Skills
