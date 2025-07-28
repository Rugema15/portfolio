import React from 'react';
import bg from './assets/react.svg';
import './Intro.css';
import { Link } from "react-router-dom";
import hero from "./hero.png";
const Intro = () => {
    return (
        <section id='intro'>
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'am <span className="introName">Rugema</span><br/> website designer</span>
                <p className="intropara">I am a skilled web designer whith experience in creating <br/>
                     visually appealing and user friendly websites.</p>
                <Link to="/contact"><button className='btn'>Hire me</button></Link>
            </div>
            <img src={hero} alt="profile" className="hero" />
        </section>
    );
}
export default Intro