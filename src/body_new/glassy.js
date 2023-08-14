import React from 'react';
import './glassy.css'; // Import your CSS file for styling
import img from './WhatsApp Image 2023-08-13 at 3.52.30 PM.jpeg'
import { Link } from 'react-router-dom';
const GlassyProfile = () => {
    const text = `Adeniji Damilola Phebean, a recent Masters graduate working as an Information Manager
    with an Msc degree in Management Information System from Covenant University. Damilola
    excels in management skills, project management, operation research, and so on. Currently
    learning at ALX, Damilola aims to drive impactful solutions through her managerial skills and
    her goal is to build a strong management team where the
  
`
  return (
    <div className="glassy-profile">
      <div className="text-side">
        <h2 className='glassytitle'>BIO :</h2>
        <h1 className='glassy-header'>Empowering Impactful Management with Emerging Tech</h1>
        <p>{text}</p>
        <a className='personally' href='#class-action'> Continue Reading</a>
      </div>
      <div className="image-side">
        <img src={img} alt="Profile" />
      </div>
    </div>
  );
};

export default GlassyProfile;
