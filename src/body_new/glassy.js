import React from 'react';
import './glassy.css'; // Import your CSS file for styling
import img from './WhatsApp Image 2023-08-13 at 3.52.30 PM.jpeg'
import { Link } from 'react-router-dom';
import { LinkedIn } from '@mui/icons-material';
const GlassyProfile = () => {
    const text = `Adeniji Damilola Phebean, a recent Masters graduate working as an Information Manager
    with an Msc degree in Management Information System from Covenant University. Damilola
    excels in management skills, project management, operation research, and so on. Currently
    learning at ALX, Damilola aims to drive impactful solutions through her 
  
`

  return (
    <div className="glassy-profile">
      <div className="text-side">
        <h2 className='glassytitle'>BIO :</h2>
        <h1 className='glassy-header'>Empowering Impactful Management with Emerging Tech</h1>
        <p>{text}
        <a className='personally' style={{display:"flex", alignItems:"center", justifyContent:"center", height:"30px",margin:"10px"}} href='https://www.linkedin.com/in/damilola-adeniji-5572a91b7/'>LinkedIn<LinkedIn  style={{fontSize:"20px"}}/></a>
        </p>
      </div>
      <div className="image-side">
        <img src={img} alt="Profile" />
      </div>
    </div>
  );
};

export default GlassyProfile;