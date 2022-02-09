import PropTypes from 'prop-types';
import logo from './Assets/mantraLabsLogo.png';
import Landing from './Components/Landing';

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light "  style={{backgroundColor:'white'}}>
                <div className="container" style={{height:'60px',maxWidth:'1370px'}}>

                    <div style={{ width: '60vw', padding: '0px', display: 'flex', flexDirection: 'row' }}>
                        <img src={logo} alt='logo' height={80} />
                        <h2 style={{marginTop:'10px', width: '70px', color: '#ff460ef5', fontWeight: 'bold', fontSize: '25px' }}>{props.title}</h2>
                    </div>
                    <button style={{ backgroundColor: "white" }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span style={{ color: "white" }} className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" >
                        <ul className="navbar-nav">
                            <div className='dropdown'>
                                <li className="nav-item  navLinks dropdown-toggle" id='dropdownMenuBotton' data-toggle="dropdown" aria-expanded="false" aria-haspopup="true" style={{ width: '90px' }}>
                                    Product
                                </li>
                                <div className='dropdown-menu' aria-labelledby='dropdownMenuBotton'>
                                    <a className='dropdown-item'> Mutual Funds</a>
                                    <a className='dropdown-item'> Stock Market</a>
                                    <a className='dropdown-item'> NPS Retirement Funds</a>
                                    <a className='dropdown-item'> IPO</a>
                                </div>
                                
                            </div>
                            <div className='dropdown mx-4'>
                                <li className="nav-item mx-2 navLinks dropdown-toggle" id='dropdownMenuBotton' data-toggle="dropdown" aria-expanded="false" aria-haspopup="true" style={{ width: '90px' }}>
                                    Company
                                </li>
                                <div className='dropdown-menu' aria-labelledby='dropdownMenuBotton'>
                                    <a className='dropdown-item'>About Us</a>
                                    <a className='dropdown-item'>Contact Us</a>
                                </div>
                            </div>
                            
                            <li className="nav-item mx-2 navLinks" style={{ width: '132px' }}>
                                Partner with us
                            </li>
                            <li className="nav-item mx-2 navLinks" style={{ width: '85px' }}>
                                <button className='btn btn-primary ' style={{backgroundColor:'darkblue'}}> SIGN IN</button>
                            </li>
                            

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string
}
