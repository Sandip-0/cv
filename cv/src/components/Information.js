import React from 'react'
import img from './img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';
export default function Information() {
  return (
    <>
      <div className="container">
        <div className="left-column">
          <div className="profile-pic">
            <img src={img} alt="img" style={{ width: 200, height: 200 }} />
          </div>
          <h2>CONTACT</h2>
          <div className="contact">
            <li><FontAwesomeIcon icon={faMobileAlt} style={{ marginRight: 10 }} />+91 9134460122</li>
            <li><FontAwesomeIcon icon={faGoogle} color="white" style={{ marginRight: 10 }} />sandipadak000@gmail.com</li>
            <li><FontAwesomeIcon icon={faLocationDot} style={{ marginRight: 10 }} />WB,India</li>
          </div>

          <h2>CAREER & OBJECT</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, modi voluptatem! Incidunt accusantium explicabo veniam tempora vel assumenda nesciunt esse?</p>
          <h2>LANGUAGES</h2>
          <ul>
            <li>English</li>
            <li>Bengali</li>
          </ul>
          <h2>SKILL</h2>
          <ul>
            <li>C/C++</li>
            <li>HTML/CSS/JAVASCRIPT</li>
            <li>PYTHON</li>
            <li>PHP</li>
            <li>REACT</li>
            <li>CALCULUS</li>
            <li>DATA STRUCTURE</li>
          </ul>
          <h2>INTERESTED</h2>
          <div className="box">
            <div className="icon-container">
              <li><FontAwesomeIcon icon={faWhatsapp} size="3x" color="white" /><link rel="stylesheet" href="" /></li>
              <li><a href="https://www.linkedin.com/in/sandip-adak-70586a2b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} size="3x" color="white" /></a></li>
              <li><a href="https://www.facebook.com/sandip.adak.1401?mibextid=kFxxJD" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faFacebook} size="3x" color="white" /></a></li>
              <li><a href="https://www.instagram.com/sandip_adak_?utm_source=qr&igsh=N2NjcjA0OXBzdDBv" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faInstagram} size="3x" color="white" /></a></li>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className='name'>
            <h1><u>SANDIP ADAK</u></h1>
            <h3>INTERNSHIP / STUDENT JOB </h3>
          </div>
          <h2>EDUCATION</h2>
          <h3>B.TECH IN COMPUTER SCIENCE ENGINEERING</h3>
          <b>SWAMI VIVEKANANDA UNIVERSITY</b>
          <h4>
            <ul>
              <li>F&B management</li>
              <li>Travel and tourism</li>
              <li>Market Analysis</li>
              <li>Computer Organization</li>
              <li>Computer Languages</li>
            </ul>
          </h4>
          <h2>PROFESSIONAL EXPERIENCE</h2>
          <h3>COMPUTER LANGUAGES</h3>
          <ul>
            <li>Languages</li>
            <li>Languages</li>
            <li>Languages</li>
          </ul>
          <h2>TRAINING</h2>
          <h3>Python3 Specialization</h3>
          <p>I have Learned Python Basics concepts,its data types tuple,list.dictionary etc.</p>
          <p>Dara processing in Python3</p>
          <p>Function in Python3</p>
          <p>OOP concept of Python3</p>
          <p>Pillow,Tesseract,OpernCV in python3</p>
          <h2>Deep Learning Using Python</h2>
          <h3>SWAMI VIVEKANANDA UNIVERSITY</h3>
          <ul>
            <li>Learn about Machin Learning.Different Neural Networks,Image Processing</li>
            <li>Real time projects and applications. Python Basics</li>
            <li>Python Libraries like Tensorflow,NumPy.Pandas,Keras,Pill,matplotlib.</li>
          </ul>
          <h2>PROJECTS</h2>
          <h3>AI driven inspection of institutions.</h3>
          <h4>Smart India Hackathon</h4>
          <p>is an Artificial Intelligence (AI) based 'Contactless Attendance and Access control' Cloud platform enabling employers like you to manage your workforce remotely. </p>
          <h3>Spotify clone</h3>
          <h3>Amazon clone</h3>
        </div>
      </div>
    </>
  )
}
