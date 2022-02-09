import React from "react"
import landingImg from '../Assets/landing.svg'

export default function Landing() {
  return (
    <div className="container  d-flex align-items-center " style={{ maxWidth: '90%', height: '85vh', }}>
      <div style={{ flexDirection: 'column',width:'48%' }}>
        <div style={{ color: "grey",fontSize:'43px',fontWeight:'600',height:'50px' }} ><p>Hello India! </p></div>
        <div style={{ fontWeight: '700',fontSize:'50px' }} ><p>Investing is Simple,
          Transparent & for everyone.</p></div>
        <button className="btn btn-primary my-3 py-10" style={{fontSize:'20px',backgroundColor:'darkblue',fontWeight:'bold',padding:'15px 30px'}}>Start Investing</button>
      </div>
      <div style={{width:'52%',marginLeft:'-30px',marginBottom:'-140px'}}>
        <img src={landingImg}/>
      </div>
    </div>
  )
}