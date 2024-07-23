import React from 'react'
import { Link } from 'react-router-dom'
import "../01-header/header.css"
function NavBar() {
    return (
        <>
            <header className='header fixed-top'>
                <nav className='nav'>
                    <div className='container navbar'>
                        <div className='logo d-flex'>
                            <span className='material-icons me-2'>restaurant</span>
                            <h1 ><Link to={"/"}>Tifa</Link></h1>
                        </div>
                        <input type='checkbox' id='check' className='d-none'></input>
                        <label for='check'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </label>
                        <div className='links'>
                            <ul>
                                <li><Link className="home" href="/"><span data-hover="home">home</span></Link></li>
                                <li><Link to="/aboutUs"><span data-hover="About Us">About Us</span></Link>
                                </li>
                                <li><Link to="/services"><span data-hover="Services">Services</span></Link></li>
                                <li><Link to="/popularFoot"><span data-hover="Menu">Menu</span></Link></li>
                                {/* <li><Link to="/registration"><span data-hover="Contact">Contact</span></Link></li> */}
                                <li><Link to='/registration' > <button className='btnn' style={{ width: "190px", height: "50px" }}>Book A Table</button></Link></li>
                            </ul>
                        </div>
                        {/* </Route> */}
                        {/* </Router> */}
                        {/* </BrowserRouter> */}
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar