import React from "react";
import logo from '../Assets/mantraLabsLogo.png';

import applestore from '../Assets/apple-logo-icon.svg';
import playstore from '../Assets/google-play-icon.svg';
import facebook from '../Assets/fb.svg';
import linkedin from '../Assets/li.svg';
import medium from '../Assets/medium.svg';
import twitter from '../Assets/tw.svg';


export default function WhyMantra() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px' }}>
      <div className="d-flex  " style={{ width: '150%', flexDirection: 'column', alignItems: 'center' }}>
        <img src={logo} alt='logo' height={80} width={80} />
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <img className="sitesLogo" src={facebook} alt='logo' />
          <img className="sitesLogo" src={twitter} alt='logo' />
          <img className="sitesLogo" src={linkedin} alt='logo' />
          <img className="sitesLogo" src={medium} alt='logo' />
        </div>
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <img className="sitesLogo" src={playstore} alt='logo' style={{ width: '150px' }} />
          <img className="sitesLogo" src={applestore} alt='logo' style={{ width: '150px' }} />

        </div>
      </div>
      <div className="d-flex " style={{ width: '100%', flexDirection: 'column' }}>
        <h5 style={{ fontWeight: 'bold', fontSize: '23px',marginLeft:'30px',marginBottom:'10px' }}>Products</h5>
        <ul style={{ color: 'gray',listStyleType:'none',fontSize:'18px'}}>
          <li>Mutual Funds</li>
          <li>Stock Market</li>
          <li>NPS Retirement Funds</li>
        </ul>
      </div>
      
      <div className="d-flex " style={{ width: '100%', flexDirection: 'column' }}>
        <h5 style={{ fontWeight: 'bold', fontSize: '23px',marginLeft:'30px',marginBottom:'10px' }}>Company</h5>
        <ul style={{ color: 'gray',listStyleType:'none',fontSize:'18px'}}>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
      
      <div className="d-flex " style={{ width: '100%', flexDirection: 'column' }}>
        <h5 style={{ fontWeight: 'bold', fontSize: '23px',marginLeft:'30px',marginBottom:'10px' }}>Support</h5>
        <ul style={{ color: 'gray',listStyleType:'none',fontSize:'18px'}}>
          <li>Customer Support</li>
          <li>Grievance Redressal</li>
          <li>Safety & Security</li>
        </ul>
      </div>
      
      <div className="d-flex " style={{ width: '100%', flexDirection: 'column' }}>
        <h5 style={{ fontWeight: 'bold', fontSize: '23px',marginLeft:'30px',marginBottom:'10px' }}>More</h5>
        <ul style={{ color: 'gray',listStyleType:'none',fontSize:'18px'}}>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Disclamers</li>
          <li>SEBI Investor Charter</li>
        </ul>
      </div>
      
    </div>
  )
}