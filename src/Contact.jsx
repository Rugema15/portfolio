import React from 'react'
import'./Contact.css';
import instagram from './instagram.png';
import twitter from './twitter.jpg';
import tiktok from './tiktok.png';
import facebook from './facebook.png';
import innn from './innn.png';
import Youtube from './Youtube.png';

const Contact = () => {
  return (
    <section className='contactPage'>
        <div id="client">
            <h1 className='contactpagetitle'>My Client</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with a diverse group of companies.
                some of the notable companies I have worked with includes.
                I am a skilled web designer whith experience in 
                creating visually appealing and user friendly websites.
            </p>
            <div className="clientImgs">
                <img src={instagram} alt="clientImg" className='clientImg' />
                <img src={twitter} alt="clientImg" className='clientImg' />
                <img src={tiktok} alt="clientImg" className='clientImg' />
                <img src={facebook} alt="clientImg" className='clientImg' />
                <img src={innn} alt="clientImg" className='clientImg' />
                <img src={Youtube} alt="clientImg" className='clientImg' />
            </div>

        </div>
        <div id="contact">
          <h1 className='contactpagetitle'>contact me</h1>
          <span className='contactDesc'>please fill out the form below to discuss any work opportunities.</span>
          <form className='contactform'>
            <input type='text' className='name' placeholder='your name'/><br/>
            <input type='email' className='email' placeholder='your email'/><br/>
            <textarea className='msg' name='message' rows='5' placeholder='your message'></textarea><br/>
            <button type='submit' value='send'className="submitBtn">submit</button>
            <div className="links">
              <img src={facebook} alt="link" className='link' />
              <img src={instagram} alt="link"  className='link'/>
              <img src={twitter} alt="link"  className='link'/>
              <img src={tiktok} alt="link" className='link' />
            </div>
          </form>

        </div>
      
    </section>
  )
}

export default Contact
