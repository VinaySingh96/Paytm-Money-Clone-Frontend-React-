import React from "react";
import orangeDots from '../Assets/combined-shape.svg';
import twitter from '../Assets/twitterIcon.svg';
import udit from '../Assets/udit.jpg';

export default function UsersTweets() {
  return (
    <>
      <div style={{ backgroundColor: '#faf5f1', height: '700px', display: 'flex' }}>
        <img src={orangeDots} style={{ height: "230px", marginTop: '140px', marginLeft: '90px' }} />
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '-65px' }}>
          <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginTop: '100px', display: 'flex', justifyContent: 'center' }}>Our users love investing via Paytm Money. Every single day.</h1>
          <h3 style={{ color: 'gray', fontSize: '24px', display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>We bring simplicity and ease to investing, along with exceptional customer experience that our users admire.</h3>
          <div className="d-flex" style={{ marginLeft: '-65px' }}>
            <div className="d-flex cardtweet my-2" style={{ marginRight: '35px', cursor: 'pointer' }} >
              <div className="card-body d-flex " style={{ padding: "0px", flexDirection: 'column' }} >
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <img src={udit} style={{ height: '60px', borderRadius: '30px' }}></img>
                  <div style={{ display: 'flex', width: '100%', marginLeft: '20px', flexDirection: 'column' }}>
                    <p className="card-title" style={{ fontSize: '20px', }} >Udit N. Singh</p>
                    <p className="card-title text-muted" style={{ fontSize: '15px', fontWeight: '500' }} >@theuditnsingh</p>
                  </div>
                  <img src={twitter} style={{ height: '28px' }} />
                </div>
                <p className="card-subtitle my-2 text-muted" style={{ fontSize: '18px', fontWeight: '200px' }}>Hey @PaytmMoneyTeam, Great job. Tried the app recently for #MutualFund investment &amp; absolutely loved it. So easier to understand &amp; follow through. Really gives the confidence to customer by removing that mystery factor away. More power to you.. Kudos..!@Paytm@vijayshekhar</p>
                <p className="card-title my-2 text-muted" style={{ fontSize: '18px', }} >17 July, 2020</p>
              </div>
            </div>

            <div className="d-flex cardtweet my-2" style={{ marginRight: '35px', cursor: 'pointer' }} >
              <div className="card-body d-flex " style={{ padding: "0px", flexDirection: 'column' }} >
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <img src={udit} style={{ height: '60px', borderRadius: '30px' }}></img>
                  <div style={{ display: 'flex', width: '100%', marginLeft: '20px', flexDirection: 'column' }}>
                    <p className="card-title" style={{ fontSize: '20px', }} >Udit N. Singh</p>
                    <p className="card-title text-muted" style={{ fontSize: '15px', fontWeight: '500' }} >@theuditnsingh</p>
                  </div>
                  <img src={twitter} style={{ height: '28px' }} />
                </div>
                <p className="card-subtitle my-2 text-muted" style={{ fontSize: '18px', fontWeight: '200px' }}>Hey @PaytmMoneyTeam, Great job. Tried the app recently for #MutualFund investment &amp; absolutely loved it. So easier to understand &amp; follow through. Really gives the confidence to customer by removing that mystery factor away. More power to you.. Kudos..!@Paytm@vijayshekhar</p>
                <p className="card-title my-2 text-muted" style={{ fontSize: '18px', }} >17 July, 2020</p>
              </div>
            </div>
            <div className="d-flex cardtweet my-2" style={{ marginRight: '35px', cursor: 'pointer' }} >
              <div className="card-body d-flex " style={{ padding: "0px", flexDirection: 'column' }} >
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <img src={udit} style={{ height: '60px', borderRadius: '30px' }}></img>
                  <div style={{ display: 'flex', width: '100%', marginLeft: '20px', flexDirection: 'column' }}>
                    <p className="card-title" style={{ fontSize: '20px', }} >Udit N. Singh</p>
                    <p className="card-title text-muted" style={{ fontSize: '15px', fontWeight: '500' }} >@theuditnsingh</p>
                  </div>
                  <img src={twitter} style={{ height: '28px' }} />
                </div>
                <p className="card-subtitle my-2 text-muted" style={{ fontSize: '18px', fontWeight: '200px' }}>Hey @PaytmMoneyTeam, Great job. Tried the app recently for #MutualFund investment &amp; absolutely loved it. So easier to understand &amp; follow through. Really gives the confidence to customer by removing that mystery factor away. More power to you.. Kudos..!@Paytm@vijayshekhar</p>
                <p className="card-title my-2 text-muted" style={{ fontSize: '18px', }} >17 July, 2020</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#faf5f1',display:'flex',height:'100px'}}>
        <div className='container d-flex ' style={{width:"250px"}}>
          <div className='container d-flex justify-content-center' style={{fontSize:'34px',fontWeight:'bold',width:'56px',height:'56px',backgroundColor:'white',borderRadius:'28px',color:'darkblue',cursor:'pointer',boxShadow:' 0 0 20px rgba(0,0,0,.1)'}}>&#8592;</div>
          <div className='container d-flex justify-content-center' style={{fontSize:'34px',fontWeight:'bold',width:'56px',height:'56px',backgroundColor:'white',borderRadius:'28px',color:'darkblue',cursor:'pointer',boxShadow:' 0 0 20px rgba(0,0,0,.1)'}}>&#8594;</div>
        </div>
      </div>
    </>
  )
}