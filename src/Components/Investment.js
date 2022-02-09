import React from "react";
import mutualFunds from '../Assets/mutual-fund-icon.svg'
import equity from '../Assets/equity-icon.svg'
import nps from '../Assets/nps-icon.svg'

export default function Investment() {
  return (
    <div style={{ backgroundColor: '#f9f9f9', marginTop: '30px',height:'700px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', flexDirection: 'column', }}>
        <p style={{ fontSize: '37px', fontWeight: 'bold', marginTop: '100px' }}>60,00,000+ users trust us for their Investments</p>
        <p style={{ width: '80%', fontSize: '22px', textAlign: 'center', color: 'gray', fontWeight: '200px' }}>Leader & pioneer in low-cost & commission-free investing, we provide access to investing for Indians and help them achieve their financial goals.</p>
      </div>
      <div className="d-flex align-items-center justify-content-center my-5">
        <div className="card mx-4 my-2" style={{ width: "26rem" }} >
          <div className="card-body d-flex align-items-center justify-content-center" style={{ padding: "0px",flexDirection:'column' }} >
            <img src={mutualFunds}></img>
            <h5 className="card-title my-2" style={{ fontSize:'24px',fontWeight:'bold' }} >Mutual Funds</h5>
            <h6 className="card-subtitle my-2 text-muted" style={{ fontSize:'17px',fontWeight:'200px' }}>Grow wealth & invest for your future with direct plans.</h6>
            <button className='btn-small my-2 card btnView'  onClick={console.log("delete")}>View Details &nbsp; &gt;</button>
          </div>
        </div>
        
        <div className="card mx-4 my-2" style={{ width: "26rem" }} >
          <div className="card-body d-flex align-items-center justify-content-center" style={{ padding: "0px",flexDirection:'column' }} >
            <img src={equity}></img>
            <h5 className="card-title my-2" style={{ fontSize:'24px',fontWeight:'bold' }} >Stock Market</h5>
            <h6 className="card-subtitle my-2 text-muted" style={{ fontSize:'17px',fontWeight:'200px' }}>Directly invest in companies you love & follow.</h6>
            <button className='btn-small my-2 card btnView'  onClick={console.log("delete")}>View Details &nbsp; &gt;</button>
          </div>
        </div>

        <div className="card mx-4 my-2" style={{ width: "26rem" }} >
          <div className="card-body d-flex align-items-center justify-content-center" style={{ padding: "0px",flexDirection:'column' }} >
            <img src={nps}></img>
            <h5 className="card-title my-2" style={{ fontSize:'24px',fontWeight:'bold' }} >NPS Retirement Funds</h5>
            <h6 className="card-subtitle my-2 text-muted" style={{ fontSize:'17px',fontWeight:'200px' }}>Build a corpus & pension for your retirement.</h6>
            <button className='btn-small my-2 card btnView'  onClick={console.log("delete")}>View Details &nbsp; &gt;</button>
          </div>
        </div>

      </div>

    </div>
  )
}