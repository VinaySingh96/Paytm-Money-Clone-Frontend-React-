import React from "react";
import orangeDots from '../Assets/combined-shape.svg';
import twitter from '../Assets/twitterIcon.svg';
import udit from '../Assets/udit.jpg';

export default function WhyMantra() {
  return (
    <div>
      <div style={{ height: '700px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column',alignItems:'center' }}>
          <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginTop: '100px', display: 'flex', justifyContent: 'center' }}>Why Paytm Money?</h1>
          <h3 style={{ marginTop: '20px', fontSize: '30px', display: 'flex', justifyContent: 'center',  }}>Simple. Transparent. Accessible.
          </h3>
          <h4 style={{ color: 'gray', fontSize: '22px', display: 'flex', justifyContent: 'center',  }}>Our investment offerings give you a wide access to products and services to invest, manage money and achieve your financial goals.
          </h4>
          <button className="btn btn-primary my-3 py-10" style={{width:'200px',fontSize:'20px',backgroundColor:'darkblue',fontWeight:'bold',padding:'15px 30px'}}>Start Investing</button>

        </div>
      </div>
      <div className="hr"></div>
      <div style={{color:'white',height:'1px'}}></div>
      <div className="hr-dark"></div>
    </div>
  )
}