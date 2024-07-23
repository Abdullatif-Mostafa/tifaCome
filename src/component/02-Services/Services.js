import React from 'react'
import './Services.css'

// import {FontAwesomeIcon} from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Services = () => {
  return (
    <div className='Services' style={{marginTop:"70px",marginBottom:"30px"}}>
        <div className='container'>

          <div className='row'>
            <div className='col-md-6 col-lg-3 col-sm-12 col-xs-12'>
              <div className='box'>
              <i class="material-icons">person_outline_tie</i>
                  <h4> Master Chefs </h4>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-12 col-xs-12'>
              <div className='box'>
                 <i className='material-icons'>restaurant</i>              
                  <h4> Quality Food </h4>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-12 col-xs-12'>
              <div className='box'>
              <i class="material-icons">shopping_cart</i>
                  <h4> Online Order </h4>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-12 col-xs-12'>
              <div className='box'>
              <i class="material-icons">headset</i>
             
                  <h4> 24/7 Service </h4>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>


          
        </div>
    </div>
  )
}

export default Services