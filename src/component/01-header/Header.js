import React from 'react'
import './header.css'
import mainImg from "../../images/hero.png"
// import link from 'react-router-dom'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='mainHome'>
        <div className='content'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-12 '>
                <div className='content-detail'>
                  <h1 className='text-white'>Enjoy Our
                    Delicious Meal</h1>
                  <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit
                    , sed stet lorem sit clita duo justo magna dolore erat amet</p>
                </div>
                <button className='btnn'>Visit Us</button>
              </div>
              <div className='col-lg-6 col-md-12 '>
                <img src={mainImg} alt='img'></img>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>

  )

}

export default Header