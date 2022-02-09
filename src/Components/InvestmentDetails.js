import React from "react";
import nps from '../Assets/nps.svg'
import invest from '../Assets/invest.png'
import direct from '../Assets/direct.svg'
import download from '../Assets/download.svg'


export default function Investment() {
  return (
    <div style={{ display:'flex',flexDirection:'column',height:'1700px' }}>
      {/* Mutual Funds */}
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', padding: '10px'}}>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '50%' }} >
          <p style={{ fontSize: '37px', fontWeight: 'bold', marginTop: '100px' }}>Invest in Direct Mutual Funds</p>
          <ul style={{ color: 'gray', fontSize: '22px', }}>
            <li style={{ marginBottom: '30px' }}>Get upto 1% higher returns with direct plans</li>
            <li style={{ marginBottom: '30px' }}>No hidden charges or investment fees</li>
            <li style={{ marginBottom: '30px' }}>Switch from regular to Direct funds</li>
          </ul>
          <button className="btn btn-primary my-3 py-10" style={{ fontSize: '20px', backgroundColor: 'darkblue', fontWeight: 'bold', padding: '15px 30px' }}>Invest in Mutual Funds</button>

        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50%' ,marginTop:'50px' }}>
          <div style={{ backgroundColor: 'white', boxShadow: '0 0 30px rgba(0,0,0,.1)', borderRadius: '10px', width: '400px', height: '300px', marginLeft: '80px' }}>
            <img src={direct} />
          </div>
          <img className="bgdots" src={download} style={{ zIndex: '-1', marginTop: '-278px', marginLeft: '-94px', height: '120px', width: '150px' }} />
        </div>
      </div>

      {/* Stocks */}
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', padding: '50px 10px'}}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50%' ,marginTop:'50px' }}>
          <img className="bgdots" src={download} style={{ zIndex: '-1', marginTop: '-278px', marginLeft: '-94px', height: '120px', width: '150px',marginRight:'-170px' }} />
          <div style={{ backgroundColor: 'white', boxShadow: '0 0 30px rgba(0,0,0,.1)', borderRadius: '10px', width: '400px', height: '300px', marginLeft: '80px' }}>
            <img src={invest} style={{height:'200px'}}/>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '50%' }} >
          <p style={{ fontSize: '37px', fontWeight: 'bold', marginTop: '100px' }}>Invest in Stocks</p>
          <ul style={{ color: 'gray', fontSize: '22px', }}>
            <li style={{ marginBottom: '30px' }}>Online Stock Market Onboarding</li>
            <li style={{ marginBottom: '30px' }}>Manage Watchlist & Market Movers</li>
            <li style={{ marginBottom: '30px' }}>Free Delivery. Lowest Trading Fees</li>
          </ul>
          <button className="btn btn-primary my-3 py-10" style={{ fontSize: '20px', backgroundColor: 'darkblue', fontWeight: 'bold', padding: '15px 30px' }}>Explore Stocks</button>

        </div>
      </div>

      {/* NPS */}
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', padding: '10px'}}>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '50%' }} >
          <p style={{ fontSize: '37px', fontWeight: 'bold', marginTop: '100px' }}>Invest in National Pension System</p>
          <ul style={{ color: 'gray', fontSize: '22px', }}>
            <li style={{ marginBottom: '30px' }}>Wealth creation for your retirement</li>
            <li style={{ marginBottom: '30px' }}>Save additional tax on investments upto ₹ 50,000</li>
            <li style={{ marginBottom: '30px' }}>Enjoy regular pension income on retirement</li>
          </ul>
          <button className="btn btn-primary my-3 py-10" style={{ fontSize: '20px', backgroundColor: 'darkblue', fontWeight: 'bold', padding: '15px 30px' }}>Invest in NPS</button>

        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50%' ,marginTop:'50px' }}>
          <div style={{ backgroundColor: 'white', boxShadow: '0 0 30px rgba(0,0,0,.1)', borderRadius: '10px', width: '400px', height: '300px', marginLeft: '80px' }}>
            <img src={nps} />
          </div>
          <img className="bgdots" src={download} style={{ zIndex: '-1', marginTop: '-278px', marginLeft: '-94px', height: '120px', width: '150px' }} />
        </div>
      </div>


    </div>
  )
}